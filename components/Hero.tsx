import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { CtaButton } from "./EnquiryProvider";
import { GoogleG, Stars } from "./Icons";

/** Full-screen opening: the photo covers the hero, the copy sits on a green shade. */
export function Hero({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        src="/images/skawi-hero-photo.png"
        alt=""
        fill
        // On portrait phones the cover crop is driven by height, so ask for a wider file.
        sizes="(max-width: 767px) 340vw, 100vw"
        preload
        className="hero__bg"
      />
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__kicker hero-in">{t.hero.kicker}</p>
          <h1 id="hero-title" className="hero__title hero-in">
            {t.hero.title.join(" ")}
          </h1>
          <p className="hero__lead hero-in">{t.hero.lead}</p>
          <div className="hero__actions hero-in">
            <CtaButton variant="light" size="lg">
              {t.hero.cta}
            </CtaButton>
            <a href="#jak-uczymy" className="btn btn--outline-light btn--lg">
              {t.hero.secondary}
            </a>
          </div>
          <a
            className="rating hero-in"
            href={site.google.mapsUrl}
            target="_blank"
            rel="noopener"
            aria-label={`${t.formatRating(site.google.rating)} / 5 ${t.hero.ratingSuffix}, ${t.reviewsCount(site.google.reviewCount)}. ${t.hero.reviewsLink}`}
          >
            <span className="rating__g">
              <GoogleG size={20} />
            </span>
            <span className="rating__body">
              <span className="rating__top">
                <strong>{t.formatRating(site.google.rating)} / 5</strong>
                <Stars size={15} />
              </span>
              <span className="rating__meta">
                {t.hero.ratingSuffix}, {t.reviewsCount(site.google.reviewCount)}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
