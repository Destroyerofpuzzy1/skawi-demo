import { NextResponse } from "next/server";
import { pl } from "@/lib/dictionaries/pl";

/**
 * Receives the course enquiry and forwards it to ENQUIRY_WEBHOOK_URL
 * (Make, Zapier, n8n, a CRM, or any endpoint that accepts JSON and
 * turns it into an email). Without that variable the route answers 503,
 * so the visitor sees an honest error with the phone number instead of
 * a fake success.
 */

const LIMITS = { name: 80, phone: 40, email: 120, message: 2000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = Record<string, unknown>;

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const pick = <T extends string>(v: unknown, allowed: readonly T[]) =>
  typeof v === "string" && (allowed as readonly string[]).includes(v) ? (v as T) : null;

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend nothing happened.
  if (str(body.company, 200)) return NextResponse.json({ ok: true });

  const f = pl.form;
  const level = pick(body.level, ["zero", "a", "b", "c", "unknown"] as const);
  const purpose = pick(body.purpose, ["daily", "work", "exam", "study", "other"] as const);
  const format = pick(body.format, ["group", "individual", "online", "onsite", "unsure"] as const);
  const times = Array.isArray(body.times)
    ? body.times
        .map((x) => pick(x, ["morning", "afternoon", "evening", "flexible"] as const))
        .filter((x): x is NonNullable<typeof x> => x !== null)
    : [];
  const name = str(body.name, LIMITS.name);
  const phone = str(body.phone, LIMITS.phone);
  const email = str(body.email, LIMITS.email);
  const message = str(body.message, LIMITS.message);
  const lang = pick(body.lang, ["pl", "en", "ua"] as const) ?? "pl";

  if (!level || !purpose || !name || (!phone && !email) || (email && !EMAIL_RE.test(email)) || body.consent !== true) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    console.error("[enquiry] ENQUIRY_WEBHOOK_URL is not set. Enquiry was not delivered.");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  // Readable Polish labels, so the school can read the lead as is.
  const payload = {
    source: "skawi-website",
    receivedAt: new Date().toISOString(),
    siteLanguage: lang,
    name,
    phone,
    email,
    message,
    level: f.level.options[level],
    purpose: f.purpose.options[purpose],
    format: format ? f.format.options[format] : null,
    availability: times.map((x) => f.time.options[x]),
    consent: true,
    subject: `Nowe zapytanie o kurs: ${name}`,
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[enquiry] delivery failed", err);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
