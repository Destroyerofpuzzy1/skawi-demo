import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { IconExternal, IconInstagram, IconPhone, IconPin } from "./Icons";

export function Contact({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).contact;

  return (
    <section id="kontakt" className="contact section" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__info">
          <h2 id="contact-title" className="h2">
            {t.title}
          </h2>
          <p className="contact__lead">{t.lead}</p>

          <p className="contact__name">
            SKAWI
            <span>{getDictionary(lang).brand.descriptor.join(" ")}</span>
          </p>

          <ul className="contact__list">
            <li>
              <IconPin className="contact__icon" />
              <div>
                <span className="contact__label">{t.address}</span>
                <address>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </address>
                <a className="contact__sub" href={site.google.directionsUrl} target="_blank" rel="noopener">
                  {t.route}
                  <IconExternal />
                </a>
              </div>
            </li>
            <li>
              <IconPhone className="contact__icon" />
              <div>
                <span className="contact__label">{t.phone}</span>
                <a className="contact__big" href={site.phone.href}>
                  {site.phone.display}
                </a>
              </div>
            </li>
            <li>
              <IconInstagram className="contact__icon" />
              <div>
                <span className="contact__label">{t.instagram}</span>
                <a className="contact__big" href={site.instagram.url} target="_blank" rel="noopener">
                  {site.instagram.handle}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="map">
          <iframe
            title={t.mapTitle}
            src={site.google.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a className="map__open" href={site.google.mapsUrl} target="_blank" rel="noopener">
            {t.openMaps}
            <IconExternal />
          </a>
        </div>
      </div>
    </section>
  );
}
