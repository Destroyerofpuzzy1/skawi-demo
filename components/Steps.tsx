import { getDictionary, type Locale } from "@/lib/i18n";
import { confirmed } from "@/lib/site";
import { CtaButton } from "./EnquiryProvider";
import { Reveal } from "./Reveal";

export function Steps({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).steps;
  // Only promise a level check if the school confirms it offers one.
  const items = t.items.map((item, i) => (i === 1 && !confirmed.levelAssessment ? t.levelUnconfirmed : item));

  return (
    <section id="jak-uczymy" className="steps section--dark" aria-labelledby="steps-title">
      <div className="container">
        <div className="steps__head">
          <div>
            <p className="eyebrow eyebrow--light">{t.label}</p>
            <Reveal as="h2" className="steps__title mask-heading" id="steps-title">
              {t.title.map((line, i) => (
                <span className="line-mask" key={i}>
                  <span style={{ "--i": i } as React.CSSProperties}>{line}</span>
                </span>
              ))}
            </Reveal>
          </div>
          <p className="steps__lead">{t.lead}</p>
        </div>

        <Reveal as="ol" className="process" margin="0px 0px -18% 0px">
          {items.map((item, i) => (
            <li key={i} className="process__step" style={{ "--i": i } as React.CSSProperties}>
              <span className="process__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="process__body">
                <h3 className="process__title">
                  <span className="sr-only">{i + 1}. </span>
                  {item.title}
                </h3>
                <p className="process__text">{item.text}</p>
              </div>
            </li>
          ))}
        </Reveal>

        <div className="steps__cta">
          <CtaButton variant="light" size="lg">
            {t.cta}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
