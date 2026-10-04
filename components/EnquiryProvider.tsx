"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { GoalId, Locale } from "@/lib/i18n";
import { EnquiryModal } from "./EnquiryModal";

type EnquiryContextValue = {
  lang: Locale;
  /** Goal the visitor picked in "Po co Ci polski?". Remembered for the form. */
  goal: GoalId | null;
  setGoal: (goal: GoalId) => void;
  openEnquiry: (goal?: GoalId) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}

export function EnquiryProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  const [goal, setGoal] = useState<GoalId | null>(null);
  const [open, setOpen] = useState(false);
  // Bumped on every open so the form can apply the latest preselection.
  const [openId, setOpenId] = useState(0);

  const openEnquiry = useCallback((fromGoal?: GoalId) => {
    if (fromGoal) setGoal(fromGoal);
    setOpenId((n) => n + 1);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ lang, goal, setGoal, openEnquiry }), [lang, goal, openEnquiry]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryModal lang={lang} open={open} openId={openId} goal={goal} onClose={() => setOpen(false)} />
    </EnquiryContext.Provider>
  );
}

type CtaProps = {
  children: React.ReactNode;
  goal?: GoalId;
  variant?: "primary" | "light" | "ghost";
  size?: "md" | "lg" | "sm";
  className?: string;
};

export function CtaButton({ children, goal, variant = "primary", size = "md", className = "" }: CtaProps) {
  const { openEnquiry } = useEnquiry();
  return (
    <button
      type="button"
      className={`btn btn--${variant} btn--${size} ${className}`}
      aria-haspopup="dialog"
      onClick={() => openEnquiry(goal)}
    >
      {children}
    </button>
  );
}
