import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, htmlLang, localePath, locales } from "@/lib/i18n";
import { site } from "@/lib/site";
import "../globals.css";

// Manrope covers Polish diacritics and Cyrillic, which the UA version needs.
const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#164A48",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    keywords:
      lang === "pl"
        ? [
            "język polski dla cudzoziemców Łódź",
            "kurs polskiego dla obcokrajowców Łódź",
            "szkoła języka polskiego Łódź",
            "nauka polskiego dla cudzoziemców",
          ]
        : undefined,
    alternates: {
      canonical: localePath[lang],
      languages: {
        pl: "/",
        en: "/en",
        uk: "/ua",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      siteName: "SKAWI",
      title: t.meta.title,
      description: t.meta.description,
      url: localePath[lang],
      locale: { pl: "pl_PL", en: "en_GB", ua: "uk_UA" }[lang],
      images: [{ url: "/images/skawi-logo.jpg", width: 438, height: 438, alt: "SKAWI" }],
    },
    icons: { icon: "/images/skawi-logo.jpg", apple: "/images/skawi-logo.jpg" },
  };
}

// Runs before paint:
// 1. marks JS as available,
// 2. decides whether the intro plays (once per tab session, never with reduced motion),
// 3. a refresh always starts at the top: no scroll restoration, and the
//    #anchor left in the URL by an earlier nav click is dropped on reload.
//    A shared link with #anchor on a fresh visit still jumps to its section.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(r||sessionStorage.getItem('skawi-intro')){d.classList.add('intro-done')}else{sessionStorage.setItem('skawi-intro','1')}}catch(e){d.classList.add('intro-done')}try{if('scrollRestoration' in history)history.scrollRestoration='manual';var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];var reload=n?n.type==='reload':(performance.navigation&&performance.navigation.type===1);if(reload&&location.hash){history.replaceState(history.state,'',location.pathname+location.search)}if(reload||!location.hash){var top=function(){try{window.scrollTo({top:0,left:0,behavior:'instant'})}catch(e){window.scrollTo(0,0)}};top();var moved=false,mark=function(){moved=true};['wheel','touchstart','keydown'].forEach(function(t){window.addEventListener(t,mark,{once:true,passive:true})});window.addEventListener('load',function(){if(!moved)top()},{once:true})}}catch(e){}})();`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={htmlLang[lang]} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
