import { notFound } from "next/navigation";
import { getDictionary, hasLocale, localePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { EnquiryProvider } from "@/components/EnquiryProvider";
import { Intro } from "@/components/Intro";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LevelPath } from "@/components/LevelPath";
import { Goals } from "@/components/Goals";
import { Trust } from "@/components/Trust";
import { Steps } from "@/components/Steps";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${site.url}/#skawi`,
    name: "SKAWI. Szkoła języka polskiego dla cudzoziemców",
    alternateName: "SKAWI Szkoła języków obcych",
    description: t.meta.description,
    url: `${site.url}${localePath[lang] === "/" ? "" : localePath[lang]}`,
    logo: `${site.url}/images/skawi-logo.jpg`,
    image: `${site.url}/images/skawi-kursantki.jpg`,
    telephone: site.phone.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    hasMap: site.google.mapsUrl,
    sameAs: [site.instagram.url],
    knowsLanguage: ["pl"],
  };

  return (
    <EnquiryProvider lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip-link" href="#tresc">
        {t.nav.skip}
      </a>
      <Intro />
      <Header lang={lang} />
      <main id="tresc">
        <Hero lang={lang} />
        <LevelPath lang={lang} />
        <Goals lang={lang} />
        <Trust lang={lang} />
        <Steps lang={lang} />
        <Reviews lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
        <FinalCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </EnquiryProvider>
  );
}
