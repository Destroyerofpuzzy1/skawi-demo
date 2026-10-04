"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  getDictionary,
  goalToPurpose,
  type FormatId,
  type GoalId,
  type LevelId,
  type Locale,
  type PurposeId,
  type TimeId,
} from "@/lib/i18n";
import { confirmed, site } from "@/lib/site";
import { IconClose, IconPhone, IconArrowLeft } from "./Icons";

const LEVELS: LevelId[] = ["zero", "unknown", "a", "b", "c"];
const PURPOSES: PurposeId[] = ["daily", "work", "exam", "study", "other"];
const TIMES: TimeId[] = ["morning", "afternoon", "evening", "flexible"];
// The format question only appears once the school confirms its formats.
const FORMATS: FormatId[] = confirmed.lessonFormats.length ? [...confirmed.lessonFormats, "unsure"] : [];

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"level" | "purpose" | "name" | "contact" | "email" | "consent", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  lang: Locale;
  open: boolean;
  openId: number;
  goal: GoalId | null;
  onClose: () => void;
};

export function EnquiryModal({ lang, open, openId, goal, onClose }: Props) {
  const t = getDictionary(lang).form;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();

  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const [level, setLevel] = useState<LevelId | null>(null);
  const [purpose, setPurpose] = useState<PurposeId | null>(null);
  const [format, setFormat] = useState<FormatId | null>(null);
  const [times, setTimes] = useState<TimeId[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [trap, setTrap] = useState("");

  // Open / close the native dialog with a short enter/exit transition.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (status === "success") {
        // Fresh form after a successful send.
        setStatus("idle");
        setStep(1);
        setLevel(null);
        setFormat(null);
        setTimes([]);
        setMessage("");
        setConsent(false);
      }
      if (goal) setPurpose(goalToPurpose[goal]);
      if (!dialog.open) dialog.showModal();
      requestAnimationFrame(() => {
        setVisible(true);
        titleRef.current?.focus({ preventScroll: true });
      });
      return;
    }
    setVisible(false);
    const timer = window.setTimeout(() => dialog.open && dialog.close(), 220);
    return () => window.clearTimeout(timer);
    // openId re-runs this when the form is reopened from another CTA.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, openId]);

  const scrollTop = () => scrollRef.current?.scrollTo({ top: 0 });

  function validateStep1() {
    const next: Errors = {};
    if (!level) next.level = t.errors.choose;
    if (!purpose) next.purpose = t.errors.choose;
    setErrors(next);
    const first = next.level ? "level" : next.purpose ? "purpose" : null;
    if (first) document.getElementById(`${uid}-${first}`)?.scrollIntoView({ block: "center", behavior: "smooth" });
    return !first;
  }

  function validateStep2() {
    const next: Errors = {};
    if (!name.trim()) next.name = t.errors.name;
    if (!phone.trim() && !email.trim()) next.contact = t.errors.contact;
    if (email.trim() && !EMAIL_RE.test(email.trim())) next.email = t.errors.email;
    if (!consent) next.consent = t.errors.consent;
    setErrors(next);
    const order = ["name", "contact", "email", "consent"] as const;
    const first = order.find((k) => next[k]);
    if (first) {
      const id = first === "contact" ? "phone" : first;
      document.getElementById(`${uid}-${id}`)?.focus();
    }
    return !first;
  }

  function goNext() {
    if (!validateStep1()) return;
    setStep(2);
    scrollTop();
    requestAnimationFrame(() => titleRef.current?.focus({ preventScroll: true }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (step === 1) return goNext();
    if (!validateStep2() || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level,
          purpose,
          format,
          times,
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          message: message.trim(),
          consent,
          lang,
          goal,
          company: trap,
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !data?.ok) throw new Error("send_failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
    scrollTop();
  }

  const toggleTime = (id: TimeId) =>
    setTimes((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  return (
    <dialog
      ref={dialogRef}
      className="enquiry"
      data-visible={visible || undefined}
      aria-labelledby={`${uid}-title`}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="enquiry__panel" ref={scrollRef}>
        <header className="enquiry__head">
          <div>
            <p className="enquiry__step">
              {status === "success" ? "SKAWI" : t.step(step, 2)}
            </p>
            <h2 id={`${uid}-title`} ref={titleRef} tabIndex={-1} className="enquiry__title">
              {status === "success" ? t.successTitle : step === 1 ? t.title : t.contactTitle}
            </h2>
          </div>
          <button type="button" className="enquiry__close" onClick={onClose} aria-label={t.close}>
            <IconClose />
          </button>
          {status !== "success" && (
            <div className="enquiry__progress" aria-hidden="true">
              <span style={{ transform: `scaleX(${step / 2})` }} />
            </div>
          )}
        </header>

        {status === "success" ? (
          <div className="enquiry__result" role="status">
            <svg className="enquiry__check" viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="24" cy="24" r="22" />
              <path d="M14 25l7 7 13-15" />
            </svg>
            <p className="enquiry__lead">{t.successText}</p>
            <button type="button" className="btn btn--primary btn--lg" onClick={onClose}>
              {t.close}
            </button>
          </div>
        ) : (
          <form className="enquiry__form" onSubmit={submit} noValidate>
            {status === "error" && (
              <div className="enquiry__alert" role="alert">
                <strong>{t.failTitle}</strong>
                <span>
                  {t.failText}{" "}
                  <a href={site.phone.href} className="link-strong">
                    {site.phone.display}
                  </a>
                </span>
              </div>
            )}

            {step === 1 ? (
              <div className="enquiry__body" key="s1">
                <ChoiceGroup
                  id={`${uid}-level`}
                  legend={t.level.q}
                  name="level"
                  options={LEVELS.map((id) => ({ id, label: t.level.options[id] }))}
                  value={level}
                  onChange={(v) => {
                    setLevel(v as LevelId);
                    setErrors((e) => ({ ...e, level: undefined }));
                  }}
                  error={errors.level}
                  wideFirst
                />
                <ChoiceGroup
                  id={`${uid}-purpose`}
                  legend={t.purpose.q}
                  name="purpose"
                  options={PURPOSES.map((id) => ({ id, label: t.purpose.options[id] }))}
                  value={purpose}
                  onChange={(v) => {
                    setPurpose(v as PurposeId);
                    setErrors((e) => ({ ...e, purpose: undefined }));
                  }}
                  error={errors.purpose}
                />
                {FORMATS.length > 0 && (
                  <ChoiceGroup
                    id={`${uid}-format`}
                    legend={t.format.q}
                    name="format"
                    options={FORMATS.map((id) => ({ id, label: t.format.options[id] }))}
                    value={format}
                    onChange={(v) => setFormat(v as FormatId)}
                  />
                )}
                <fieldset className="choice" id={`${uid}-time`}>
                  <legend className="choice__legend">
                    {t.time.q} <span className="choice__hint">{t.time.hint}</span>
                  </legend>
                  <div className="choice__grid choice__grid--four">
                    {TIMES.map((id) => (
                      <label key={id} className="option">
                        <input
                          type="checkbox"
                          name="time"
                          value={id}
                          checked={times.includes(id)}
                          onChange={() => toggleTime(id)}
                        />
                        <span>{t.time.options[id]}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            ) : (
              <div className="enquiry__body" key="s2">
                <p className="enquiry__lead">{t.contactLead}</p>
                <Field id={`${uid}-name`} label={t.name} error={errors.name}>
                  <input
                    id={`${uid}-name`}
                    name="name"
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name || undefined}
                    aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                  />
                </Field>
                <div className="field-pair">
                  <Field id={`${uid}-phone`} label={t.phone} error={errors.contact}>
                    <input
                      id={`${uid}-phone`}
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      aria-invalid={!!errors.contact || undefined}
                      aria-describedby={errors.contact ? `${uid}-phone-err` : undefined}
                    />
                  </Field>
                  <Field id={`${uid}-email`} label={t.email} error={errors.email}>
                    <input
                      id={`${uid}-email`}
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={!!errors.email || !!errors.contact || undefined}
                      aria-describedby={errors.email ? `${uid}-email-err` : undefined}
                    />
                  </Field>
                </div>
                <Field id={`${uid}-message`} label={t.message} hint={t.optional}>
                  <textarea
                    id={`${uid}-message`}
                    name="message"
                    rows={3}
                    placeholder={t.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Field>
                <div className="hp" aria-hidden="true">
                  <label>
                    Company
                    <input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
                  </label>
                </div>
                <div className={`consent${errors.consent ? " consent--error" : ""}`}>
                  <label className="consent__label">
                    <input
                      id={`${uid}-consent`}
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        setErrors((x) => ({ ...x, consent: undefined }));
                      }}
                      aria-describedby={errors.consent ? `${uid}-consent-err` : undefined}
                    />
                    <span>
                      {t.consent}{" "}
                      <a href="/polityka-prywatnosci" target="_blank" rel="noopener" className="link-strong">
                        {t.privacyLink}
                      </a>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="field__error" id={`${uid}-consent-err`}>
                      {errors.consent}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className={`enquiry__foot${step === 1 ? " enquiry__foot--sticky" : ""}`}>
              {step === 2 && (
                <button
                  type="button"
                  className="btn btn--ghost btn--lg enquiry__back"
                  onClick={() => {
                    setStep(1);
                    setErrors({});
                    scrollTop();
                  }}
                >
                  <IconArrowLeft />
                  {t.back}
                </button>
              )}
              <button
                type="submit"
                className="btn btn--primary btn--lg enquiry__next"
                disabled={status === "sending"}
                aria-busy={status === "sending" || undefined}
              >
                {step === 1 ? t.next : status === "sending" ? t.sending : status === "error" ? t.retry : t.submit}
              </button>
            </div>
            {step === 2 && (
              <p className="enquiry__phone">
                <IconPhone />
                <a href={site.phone.href}>{site.phone.display}</a>
              </p>
            )}
          </form>
        )}
      </div>
    </dialog>
  );
}

function ChoiceGroup({
  id,
  legend,
  name,
  options,
  value,
  onChange,
  error,
  wideFirst,
}: {
  id: string;
  legend: string;
  name: string;
  options: { id: string; label: string }[];
  value: string | null;
  onChange: (v: string) => void;
  error?: string;
  wideFirst?: boolean;
}) {
  return (
    <fieldset
      className={`choice${error ? " choice--error" : ""}`}
      id={id}
      aria-describedby={error ? `${id}-err` : undefined}
    >
      <legend className="choice__legend">{legend}</legend>
      <div className={`choice__grid${wideFirst ? " choice__grid--wide-first" : ""}`}>
        {options.map((o) => (
          <label key={o.id} className="option">
            <input type="radio" name={name} value={o.id} checked={value === o.id} onChange={() => onChange(o.id)} />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="field__error" id={`${id}-err`}>
          {error}
        </p>
      )}
    </fieldset>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`field${error ? " field--error" : ""}`}>
      <label htmlFor={id} className="field__label">
        {label}
        {hint && <span className="field__hint"> ({hint})</span>}
      </label>
      {children}
      {error && (
        <p className="field__error" id={`${id}-err`}>
          {error}
        </p>
      )}
    </div>
  );
}
