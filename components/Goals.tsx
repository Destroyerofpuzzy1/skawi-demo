"use client";

import { useRef, useState } from "react";
import { getDictionary, type GoalId, type Locale } from "@/lib/i18n";
import { CtaButton, useEnquiry } from "./EnquiryProvider";

const GOALS: GoalId[] = ["talk", "work", "exam", "life"];

export function Goals({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).goals;
  const { goal, setGoal } = useEnquiry();
  const [active, setActive] = useState<GoalId>(goal ?? "talk");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (id: GoalId) => {
    setActive(id);
    setGoal(id);
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next: number | null = null;
    if (e.key in keys) next = (index + keys[e.key] + GOALS.length) % GOALS.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = GOALS.length - 1;
    if (next === null) return;
    e.preventDefault();
    select(GOALS[next]);
    tabs.current[next]?.focus();
  };

  const item = t.items[active];

  return (
    <section id="kursy" className="goals section" aria-labelledby="goals-title">
      <div className="container">
        <div className="goals__head">
          <h2 id="goals-title" className="h2">
            {t.title}
          </h2>
          <p className="goals__lead">{t.lead}</p>
        </div>

        <div className="goals__grid">
          <div className="goals__list" role="tablist" aria-orientation="vertical" aria-labelledby="goals-title">
            {GOALS.map((id, i) => (
              <button
                key={id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`goal-tab-${id}`}
                aria-selected={active === id}
                aria-controls="goal-panel"
                tabIndex={active === id ? 0 : -1}
                className="goal"
                onClick={() => select(id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <span className="goal__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="goal__title">{t.items[id].title}</span>
                <span className="goal__mark" aria-hidden="true" />
              </button>
            ))}
          </div>

          <div
            className="goals__panel"
            id="goal-panel"
            role="tabpanel"
            aria-labelledby={`goal-tab-${active}`}
            aria-live="polite"
          >
            <div className="goals__panel-inner" key={active}>
              <p className="goals__panel-title">{item.title}</p>
              <p className="goals__panel-text">{item.text}</p>
              <CtaButton goal={active} variant="light" size="lg">
                {item.cta}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
