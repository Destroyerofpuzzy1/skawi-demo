import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { CtaButton } from "./EnquiryProvider";
import { IconPhone } from "./Icons";
import { Reveal } from "./Reveal";

export function FinalCta({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).final;

  return (
    <section className="final section--dark" aria-labelledby="final-title">
      <div className="container final__inner">
        <Reveal as="h2" className="final__title mask-heading" id="final-title">
          {t.title.map((line, i) => (
            <span className="line-mask" key={i}>
              <span style={{ "--i": i } as React.CSSProperties}>{line}</span>
            </span>
          ))}
        </Reveal>
        <p className="final__lead">{t.lead}</p>
        <div className="final__actions">
          <CtaButton variant="light" size="lg">
            {t.cta}
          </CtaButton>
          <a className="final__phone" href={site.phone.href}>
            <span>{t.orCall}</span>
            <IconPhone />
            <strong>{site.phone.display}</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
