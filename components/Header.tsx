"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDictionary, localeLabel, localePath, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { CtaButton } from "./EnquiryProvider";
import { IconClose, IconMenu, IconPhone } from "./Icons";

export function Header({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    if (!menuOpen) return;
    document.querySelector<HTMLAnchorElement>("#mobile-menu a")?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Close the menu first (it locks page scroll), then scroll to the section.
  const goTo = (e: React.MouseEvent, href: string) => {
    const target = document.querySelector(href);
    if (!target) return setMenuOpen(false);
    e.preventDefault();
    setMenuOpen(false);
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("menu-open");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
      document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus({ preventScroll: true });
    });
  };

  const LangSwitch =({ className }: { className: string }) => (
    <nav className={className} aria-label={t.nav.language}>
      {locales.map((l) => (
        <Link
          key={l}
          href={localePath[l]}
          hrefLang={l === "ua" ? "uk" : l}
          aria-current={l === lang ? "true" : undefined}
          className="lang__item"
          scroll={false}
        >
          {localeLabel[l]}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner container">
        <Link href={localePath[lang]} className="brand" aria-label="SKAWI">
          <span className="brand__logo">
            <Image src="/images/skawi-logo.jpg" alt="SKAWI. Szkoła języków obcych" width={438} height={438} sizes="64px" preload />
          </span>
          <span className="brand__text">
            <span>{t.brand.descriptor[0]}</span>
            <span>{t.brand.descriptor[1]}</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Menu">
          <ul>
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <LangSwitch className="lang" />
          <CtaButton size="sm" className="site-header__cta">
            {t.nav.cta}
          </CtaButton>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
            <span className="sr-only">{menuOpen ? t.nav.close : t.nav.menu}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-open={menuOpen || undefined} hidden={!menuOpen}>
        <nav aria-label="Menu">
          <ul className="mobile-menu__list">
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => goTo(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <LangSwitch className="lang lang--large" />
          <a className="mobile-menu__phone" href={site.phone.href}>
            <IconPhone />
            {site.phone.display}
          </a>
        </div>
      </div>
    </header>
  );
}
