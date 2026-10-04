import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function Trust({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const f = t.trust.facts;

  return (
    <section id="o-nas" className="trust section" aria-labelledby="trust-title">
      <div className="container trust__grid">
        <Reveal as="figure" className="trust__figure">
          <div className="photo">
            <Image
              src="/images/skawi-kursantki.jpg"
              alt={t.trust.caption}
              width={559}
              height={745}
              sizes="(min-width: 960px) 480px, 100vw"
              className="photo__img"
            />
          </div>
          <figcaption className="trust__caption">{t.trust.caption}</figcaption>
        </Reveal>

        <div className="trust__copy">
          <p className="eyebrow">{t.trust.label}</p>
          <Reveal as="h2" className="h2 h2--xl mask-heading" id="trust-title">
            <span className="line-mask">
              <span>{t.trust.title}</span>
            </span>
          </Reveal>
          <p className="trust__body">{t.trust.body}</p>

          <dl className="facts">
            <div className="facts__row">
              <dt>{f.address}</dt>
              <dd>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </dd>
            </div>
            <div className="facts__row">
              <dt>{f.phone}</dt>
              <dd>
                <a href={site.phone.href}>{site.phone.display}</a>
              </dd>
            </div>
            <div className="facts__row">
              <dt>{f.google}</dt>
              <dd>
                <a href={site.google.mapsUrl} target="_blank" rel="noopener">
                  {t.formatRating(site.google.rating)} / 5, {t.reviewsCount(site.google.reviewCount)}
                </a>
              </dd>
            </div>
            <div className="facts__row">
              <dt>{f.instagram}</dt>
              <dd>
                <a href={site.instagram.url} target="_blank" rel="noopener">
                  {site.instagram.handle}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
