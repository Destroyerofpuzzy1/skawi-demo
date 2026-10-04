import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { IconInstagram, IconPhone, IconPin } from "./Icons";

export function Footer({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/images/skawi-logo.jpg" alt="SKAWI. Szkoła języków obcych" width={438} height={438} sizes="128px" />
          <p>
            {t.brand.descriptor.join(" ")}
          </p>
        </div>

        <ul className="footer__list">
          <li>
            <IconPin />
            <span>
              {site.address.street}, {site.address.postalCode} {site.address.city}
            </span>
          </li>
          <li>
            <IconPhone />
            <a href={site.phone.href}>{site.phone.display}</a>
          </li>
          <li>
            <IconInstagram />
            <a href={site.instagram.url} target="_blank" rel="noopener">
              {site.instagram.handle}
            </a>
          </li>
        </ul>

        <ul className="footer__links">
          <li>
            <a href={site.google.mapsUrl} target="_blank" rel="noopener">
              {t.footer.maps}
            </a>
          </li>
          <li>
            <a href="/polityka-prywatnosci">{t.footer.privacy}</a>
          </li>
        </ul>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} SKAWI. {t.footer.rights}
        </p>
        <p className="footer__credit">
          {t.footer.credit}{" "}
          <a href="https://leadpage.pl" target="_blank" rel="noopener">
            LeadPage
          </a>
        </p>
      </div>
    </footer>
  );
}
