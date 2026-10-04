import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

// Polish only. Reached at /polityka-prywatnosci through a rewrite.
export function generateStaticParams() {
  return [{ lang: "pl" }];
}

export const metadata: Metadata = {
  title: "Polityka prywatności | SKAWI",
  // TODO(klient): zdjąć noindex po weryfikacji treści i danych administratora.
  robots: { index: false, follow: true },
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPage() {
  return (
    <main className="legal container">
      <Link href="/" className="legal__back">
        SKAWI
      </Link>
      <h1 className="h2">Polityka prywatności</h1>
      <p className="legal__note">
        Wersja robocza. Treść wymaga potwierdzenia przez SKAWI, w tym pełnej nazwy administratora danych.
      </p>

      <h2>Kto przetwarza dane</h2>
      <p>
        Administratorem danych jest SKAWI, szkoła języka polskiego dla cudzoziemców, {site.address.street},{" "}
        {site.address.postalCode} {site.address.city}. Kontakt: <a href={site.phone.href}>{site.phone.display}</a>.
      </p>

      <h2>Jakie dane zbieramy</h2>
      <p>
        Gdy wypełniasz formularz „Dobierz kurs dla siebie”, podajesz imię, telefon lub e-mail, odpowiedzi o
        poziomie, celu nauki i dostępności oraz opcjonalną wiadomość.
      </p>

      <h2>Po co</h2>
      <p>Używamy tych danych tylko po to, żeby odpowiedzieć na Twoje zapytanie i zaproponować kurs.</p>

      <h2>Twoje prawa</h2>
      <p>
        Możesz poprosić o dostęp do swoich danych, ich poprawienie lub usunięcie. Możesz też wycofać zgodę.
        Zadzwoń do nas, a zajmiemy się tym.
      </p>
    </main>
  );
}
