import { getDictionary, type Locale } from "@/lib/i18n";
import { site, testimonials, type Testimonial } from "@/lib/site";
import { GoogleG, IconExternal, Stars } from "./Icons";
import { Reveal } from "./Reveal";

export function Reviews({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const rating = t.formatRating(site.google.rating);

  return (
    <section id="opinie" className="reviews section" aria-labelledby="reviews-title">
      <div className="container reviews__grid">
        <div className="reviews__copy">
          <h2 id="reviews-title" className="h2 h2--xl">
            {t.reviews.title}
          </h2>
          <p className="reviews__lead">{t.reviews.lead}</p>
          <a className="btn btn--primary btn--lg" href={site.google.mapsUrl} target="_blank" rel="noopener">
            {t.reviews.cta}
            <IconExternal />
          </a>
        </div>

        <Reveal className="score">
          <p className="score__value">
            <span className="line-mask">
              <span>{rating}</span>
            </span>
            <span className="score__max">/ 5</span>
          </p>
          <Stars size={26} className="score__stars" />
          <p className="score__meta">
            {t.reviews.based}, {t.reviewsCount(site.google.reviewCount)}
          </p>
          <p className="score__source">
            <GoogleG size={20} />
            {t.reviews.googleLabel}
          </p>
        </Reveal>
      </div>

      {testimonials.length > 0 && <ReviewMarquee items={testimonials} />}
    </section>
  );
}

/**
 * Two rows moving in opposite directions. Renders only with genuine
 * reviews in lib/site.ts. It does not pause on hover, by design.
 */
function ReviewMarquee({ items }: { items: Testimonial[] }) {
  const half = Math.ceil(items.length / 2);
  const rows = [items.slice(0, half), items.slice(half).length ? items.slice(half) : items.slice(0, half)];
  return (
    <div className="marquee" aria-label="Google">
      {rows.map((row, r) => (
        <div key={r} className={`marquee__row${r === 1 ? " marquee__row--reverse" : ""}`}>
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee__track" aria-hidden={copy === 1 || undefined}>
              {row.map((item, i) => (
                <li key={i} className="quote" lang={item.lang}>
                  <Stars size={14} />
                  <p>{item.text}</p>
                  <span>{item.author}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}
