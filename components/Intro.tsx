import Image from "next/image";

/**
 * Branded entrance (~1.5 s). Pure CSS, so it never blocks hydration.
 * Hidden by the boot script when it already played in this tab
 * or when the visitor prefers reduced motion.
 */
export function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__stage">
        <div className="intro__logo">
          <Image src="/images/skawi-logo.jpg" alt="" width={438} height={438} sizes="128px" preload />
        </div>
        <svg className="intro__branch" viewBox="0 0 240 40" fill="none">
          <path pathLength={1} d="M4 30C40 30 62 8 104 14c30 4 38 18 68 16 24-2 40-14 64-22" />
          <path pathLength={1} d="M150 26c6-8 14-12 24-12" />
        </svg>
      </div>
    </div>
  );
}
