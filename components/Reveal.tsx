"use client";

import { useEffect, useRef } from "react";

/**
 * Marks its element with data-inview once it scrolls into view.
 * The actual motion lives in CSS, so without JS everything stays visible.
 */
export function Reveal({
  as: Tag = "div",
  className,
  children,
  margin = "0px 0px -12% 0px",
  ...rest
}: {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  margin?: string;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.inview = "true";
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.inview = "true";
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);

  return (
    <Tag ref={ref} className={className} data-reveal="" {...rest}>
      {children}
    </Tag>
  );
}
