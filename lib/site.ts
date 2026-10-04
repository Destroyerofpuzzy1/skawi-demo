/**
 * Verified business data and content switches.
 * Everything here is either confirmed in the brief or explicitly marked
 * as waiting for confirmation from the client.
 */

export const site = {
  name: "SKAWI",
  // TODO(klient): potwierdzić docelową domenę. Można nadpisać zmienną NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://skawi.pl",

  address: {
    street: "Łagiewnicka 54/501",
    postalCode: "91-463",
    city: "Łódź",
    country: "PL",
  },

  phone: {
    display: "535 228 264",
    href: "tel:+48535228264",
    e164: "+48535228264",
  },

  instagram: {
    handle: "@skawi.pl_school",
    url: "https://www.instagram.com/skawi.pl_school",
  },

  /**
   * Google rating, checked manually. Update both numbers together.
   * TODO(klient): podmienić mapsUrl na dokładny link do wizytówki Google
   * (link "Udostępnij" z Map Google). Brief go nie zawierał.
   */
  google: {
    rating: 4.9,
    reviewCount: 54,
    checkedAt: "2026-10",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("SKAWI Szkoła języka polskiego, Łagiewnicka 54/501, 91-463 Łódź"),
    embedUrl:
      "https://www.google.com/maps?output=embed&z=16&q=" +
      encodeURIComponent("Łagiewnicka 54, 91-463 Łódź"),
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent("Łagiewnicka 54, 91-463 Łódź"),
  },
} as const;

/**
 * Facts that change what the site is allowed to say.
 * Flip to true only after the client confirms.
 */
export const confirmed = {
  /** Does the school test the level before the course? Changes step 2 copy. */
  levelAssessment: false,
  /** Lesson formats offered. Empty = the format question stays hidden in the form. */
  lessonFormats: [] as Array<"group" | "individual" | "online" | "onsite">,
};

/**
 * Genuine Google reviews, copied word for word with the author's first name.
 * Leave empty until real texts are supplied. When filled, the reviews
 * section shows two moving rows automatically.
 */
export type Testimonial = { author: string; text: string; lang?: string };
export const testimonials: Testimonial[] = [];
