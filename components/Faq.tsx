import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { IconPhone, IconPlus } from "./Icons";

export function Faq({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).faq;

  return (
    <section id="faq" className="faq section" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__head">
          <h2 id="faq-title" className="h2">
            {t.title}
          </h2>
          <p className="faq__lead">{t.lead}</p>
          <a className="faq__phone" href={site.phone.href}>
            <IconPhone />
            {site.phone.display}
          </a>
        </div>

        <div className="faq__list">
          {t.items.map((item) => (
            <details key={item.id} className="qa" name="faq">
              <summary>
                <span>{item.q}</span>
                <IconPlus className="qa__icon" />
              </summary>
              {/* Answers stay null until the school confirms them. */}
              <div className="qa__answer">
                <p>{item.a ?? t.pending}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
