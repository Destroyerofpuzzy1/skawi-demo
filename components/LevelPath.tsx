import { getDictionary, type Locale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function LevelPath({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).path;

  return (
    <section className="path" aria-labelledby="path-title">
      <Reveal className="container path__inner">
        <h2 id="path-title" className="path__label">
          {t.label}
        </h2>
        <div className="path__track">
          <span className="path__line" aria-hidden="true" />
          <ol className="path__list">
          {t.steps.map((label, i) => (
            <li key={label} className="path__seg" style={{ "--i": i } as React.CSSProperties}>
              <span className="path__levels">
                <span className="path__from">{LEVELS[i]}</span>
                <span className="path__arrow" aria-hidden="true" />
                <span className="sr-only">→</span>
                <span className="path__to">{LEVELS[i + 1]}</span>
              </span>
              <span className="path__text">{label}</span>
            </li>
          ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
