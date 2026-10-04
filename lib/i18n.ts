import { pl } from "./dictionaries/pl";
import { en } from "./dictionaries/en";
import { ua } from "./dictionaries/ua";

export const locales = ["pl", "en", "ua"] as const;
export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, string> = { pl: "pl", en: "en", ua: "uk" };
export const localePath: Record<Locale, string> = { pl: "/", en: "/en", ua: "/ua" };
export const localeLabel: Record<Locale, string> = { pl: "PL", en: "EN", ua: "UA" };

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type GoalId = "talk" | "work" | "exam" | "life";
export type PurposeId = "daily" | "work" | "exam" | "study" | "other";
export type LevelId = "zero" | "a" | "b" | "c" | "unknown";
export type TimeId = "morning" | "afternoon" | "evening" | "flexible";
export type FormatId = "group" | "individual" | "online" | "onsite" | "unsure";

/** Goal chosen on the page -> answer preselected in the form. */
export const goalToPurpose: Record<GoalId, PurposeId> = {
  talk: "daily",
  work: "work",
  exam: "exam",
  life: "daily",
};

export type Dictionary = {
  meta: { title: string; description: string };
  brand: { descriptor: [string, string] };
  nav: {
    items: { href: string; label: string }[];
    cta: string;
    menu: string;
    close: string;
    language: string;
    skip: string;
  };
  hero: {
    kicker: string;
    title: string[];
    lead: string;
    cta: string;
    secondary: string;
    ratingSuffix: string;
    reviewsLink: string;
    photoAlt: string;
  };
  path: { label: string; steps: string[] };
  goals: {
    title: string;
    lead: string;
    items: Record<GoalId, { title: string; text: string; cta: string }>;
  };
  trust: {
    label: string;
    title: string;
    body: string;
    caption: string;
    facts: { address: string; phone: string; google: string; instagram: string };
  };
  steps: {
    label: string;
    title: string[];
    lead: string;
    items: { title: string; text: string }[];
    levelUnconfirmed: { title: string; text: string };
    cta: string;
  };
  reviews: { title: string; lead: string; based: string; cta: string; googleLabel: string };
  faq: {
    title: string;
    lead: string;
    pending: string;
    items: { id: string; q: string; a: string | null }[];
  };
  contact: {
    title: string;
    lead: string;
    address: string;
    phone: string;
    instagram: string;
    route: string;
    openMaps: string;
    mapTitle: string;
  };
  final: { title: string[]; lead: string; cta: string; orCall: string };
  footer: { privacy: string; maps: string; credit: string; rights: string };
  form: {
    title: string;
    step: (n: number, total: number) => string;
    level: { q: string; options: Record<LevelId, string> };
    purpose: { q: string; options: Record<PurposeId, string> };
    format: { q: string; options: Record<FormatId, string> };
    time: { q: string; hint: string; options: Record<TimeId, string> };
    contactTitle: string;
    contactLead: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    optional: string;
    consent: string;
    privacyLink: string;
    next: string;
    back: string;
    submit: string;
    sending: string;
    close: string;
    errors: {
      choose: string;
      name: string;
      contact: string;
      email: string;
      consent: string;
    };
    successTitle: string;
    successText: string;
    failTitle: string;
    failText: string;
    retry: string;
    summary: string;
  };
  reviewsCount: (n: number) => string;
  formatRating: (n: number) => string;
};

const dictionaries: Record<Locale, Dictionary> = { pl, en, ua };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
