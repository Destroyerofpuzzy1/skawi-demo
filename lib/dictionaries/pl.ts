import type { Dictionary } from "../i18n";

function plural(n: number, one: string, few: string, many: string) {
  if (n === 1) return one;
  const d = n % 10;
  const h = n % 100;
  if (d >= 2 && d <= 4 && (h < 12 || h > 14)) return few;
  return many;
}

export const pl: Dictionary = {
  meta: {
    title: "SKAWI | Język polski dla cudzoziemców w Łodzi",
    description:
      "SKAWI to szkoła języka polskiego dla cudzoziemców w Łodzi. Kurs polskiego dla obcokrajowców do życia, pracy i rozmów. Łagiewnicka 54/501. Tel. 535 228 264.",
  },
  brand: { descriptor: ["Szkoła języka polskiego", "dla cudzoziemców"] },
  nav: {
    items: [
      { href: "#kursy", label: "Kursy" },
      { href: "#jak-uczymy", label: "Jak uczymy" },
      { href: "#o-nas", label: "O nas" },
      { href: "#opinie", label: "Opinie" },
      { href: "#faq", label: "FAQ" },
      { href: "#kontakt", label: "Kontakt" },
    ],
    cta: "Dobierz kurs",
    menu: "Menu",
    close: "Zamknij",
    language: "Język strony",
    skip: "Przejdź do treści",
  },
  hero: {
    kicker: "Polski dla obcokrajowców w Łodzi",
    title: ["Naucz się polskiego", "do życia."],
    lead: "Uczysz się krok po kroku. Do pracy, do rozmów i do codziennego życia. Zaczynamy od Twojego poziomu.",
    cta: "Dobierz kurs dla siebie",
    secondary: "Zobacz, jak uczymy",
    ratingSuffix: "w Google",
    reviewsLink: "Zobacz opinie w Google",
    photoAlt: "Jasne biurko z otwartym zeszytem, książkami i kawą",
  },
  path: {
    label: "Twoja droga z polskim",
    steps: [
      "Pierwsze rozmowy",
      "Więcej swobody",
      "Samodzielna komunikacja",
      "Zaawansowany polski",
      "Pełna swoboda",
    ],
  },
  goals: {
    title: "Po co Ci polski?",
    lead: "Wybierz swój cel. Wtedy łatwiej dobierzemy kurs.",
    items: {
      talk: {
        title: "Chcę swobodnie rozmawiać",
        text: "Chcesz rozmawiać z sąsiadami, w sklepie i z przyjaciółmi. Bez stresu i bez długiego szukania słów.",
        cta: "Dobierz kurs do rozmów",
      },
      work: {
        title: "Potrzebuję polskiego do pracy",
        text: "Chcesz rozumieć szefa i współpracowników. Chcesz pisać maile i rozmawiać z klientami. Powiedz nam, jaką masz pracę.",
        cta: "Dobierz kurs do pracy",
      },
      exam: {
        title: "Chcę przygotować się do egzaminu",
        text: "Masz przed sobą egzamin z polskiego? Napisz, jaki to egzamin i kiedy. Powiemy Ci, jak możemy pomóc.",
        cta: "Zapytaj o egzamin",
      },
      life: {
        title: "Chcę lepiej radzić sobie w Polsce",
        text: "Urząd, lekarz, bank, szkoła dziecka. Chcesz załatwiać sprawy samodzielnie i rozumieć, co się dzieje wokół Ciebie.",
        cta: "Dobierz kurs do życia w Polsce",
      },
    },
  },
  trust: {
    label: "Poznaj SKAWI",
    title: "Uczymy polskiego do prawdziwego życia.",
    body: "SKAWI to szkoła języka polskiego dla cudzoziemców w Łodzi. Uczymy polskiego, który przydaje się na co dzień: w pracy, w urzędzie i w rozmowie.",
    caption: "Nasze kursantki z certyfikatami.",
    facts: {
      address: "Adres",
      phone: "Telefon",
      google: "Ocena w Google",
      instagram: "Instagram",
    },
  },
  steps: {
    label: "Jak zacząć?",
    title: ["4 proste kroki.", "I zaczynasz."],
    lead: "Powiedz nam, czego potrzebujesz. Pomożemy Ci dobrać odpowiednią naukę.",
    items: [
      { title: "Powiedz, czego potrzebujesz.", text: "Wypełnij krótki formularz." },
      { title: "Sprawdzimy Twój poziom.", text: "Dzięki temu zaczniesz od właściwego miejsca." },
      { title: "Dobieramy kurs.", text: "Wracamy do Ciebie z odpowiednią propozycją." },
      { title: "Zaczynasz naukę.", text: "Ustalamy termin i możesz zacząć." },
    ],
    levelUnconfirmed: {
      title: "Powiedz nam, jaki masz poziom.",
      text: "Nie wiesz? Wybierz „Nie wiem”.",
    },
    cta: "Dobierz kurs dla siebie",
  },
  reviews: {
    title: "Co mówią nasi uczniowie?",
    lead: "Nasi kursanci wystawiają nam opinie w Google. Przeczytaj, co piszą.",
    based: "średnia ocena",
    cta: "Zobacz opinie w Google",
    googleLabel: "Opinie Google",
  },
  faq: {
    title: "Najczęstsze pytania",
    lead: "Nie ma tu Twojego pytania? Zadzwoń. Chętnie odpowiemy.",
    pending:
      "Zapytaj nas o to bezpośrednio. Zadzwoń: 535 228 264 albo wypełnij formularz. Odpowiemy na Twoje pytanie.",
    items: [
      { id: "zero", q: "Czy mogę zacząć od zera?", a: null },
      { id: "level", q: "Jak sprawdzić swój poziom?", a: null },
      { id: "group", q: "Czy zajęcia są grupowe czy indywidualne?", a: null },
      { id: "online", q: "Czy można uczyć się online?", a: null },
      { id: "often", q: "Jak często są zajęcia?", a: null },
      { id: "price", q: "Ile kosztuje kurs?", a: null },
      { id: "exam", q: "Czy przygotowujecie do egzaminu?", a: null },
      { id: "teacher-lang", q: "W jakim języku nauczyciel tłumaczy początkującym?", a: null },
      {
        id: "signup",
        q: "Jak zapisać się na kurs?",
        a: "Kliknij „Dobierz kurs dla siebie” i wypełnij krótki formularz. Możesz też zadzwonić: 535 228 264.",
      },
      { id: "where", q: "Gdzie jest szkoła?", a: "Łagiewnicka 54/501, 91-463 Łódź." },
    ],
  },
  contact: {
    title: "Kontakt",
    lead: "Przyjdź, zadzwoń albo napisz na Instagramie.",
    address: "Adres",
    phone: "Telefon",
    instagram: "Instagram",
    route: "Wyznacz trasę",
    openMaps: "Otwórz w Mapach Google",
    mapTitle: "Mapa: SKAWI, Łagiewnicka 54/501, Łódź",
  },
  final: {
    title: ["Zacznij mówić", "po polsku."],
    lead: "Powiedz nam, czego potrzebujesz. Pomożemy Ci wybrać odpowiednią naukę.",
    cta: "Dobierz kurs",
    orCall: "albo zadzwoń",
  },
  footer: {
    privacy: "Polityka prywatności",
    maps: "Mapy Google",
    credit: "Strona wykonana przez",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  form: {
    title: "Dobierz kurs dla siebie",
    step: (n, total) => `Krok ${n} z ${total}`,
    level: {
      q: "Jak dobrze znasz polski?",
      options: { zero: "Zaczynam od zera", a: "A1–A2", b: "B1–B2", c: "C1–C2", unknown: "Nie wiem" },
    },
    purpose: {
      q: "Po co uczysz się polskiego?",
      options: { daily: "Codzienne życie", work: "Praca", exam: "Egzamin", study: "Studia", other: "Inny cel" },
    },
    format: {
      q: "Jak chcesz się uczyć?",
      options: {
        group: "W grupie",
        individual: "Indywidualnie",
        online: "Online",
        onsite: "W szkole",
        unsure: "Nie wiem jeszcze",
      },
    },
    time: {
      q: "Kiedy możesz się uczyć?",
      hint: "Możesz wybrać kilka.",
      options: { morning: "Rano", afternoon: "Po południu", evening: "Wieczorem", flexible: "Elastycznie" },
    },
    contactTitle: "Jak możemy się z Tobą skontaktować?",
    contactLead: "Podaj telefon albo e-mail. Odezwiemy się do Ciebie.",
    name: "Imię",
    phone: "Telefon",
    email: "E-mail",
    message: "Wiadomość",
    messagePlaceholder: "Na przykład: kiedy chcesz zacząć",
    optional: "opcjonalnie",
    consent: "Zgadzam się, żeby SKAWI skontaktowało się ze mną w sprawie kursu.",
    privacyLink: "Polityka prywatności",
    next: "Dalej",
    back: "Wstecz",
    submit: "Wyślij zapytanie",
    sending: "Wysyłanie…",
    close: "Zamknij",
    errors: {
      choose: "Wybierz jedną odpowiedź.",
      name: "Wpisz swoje imię.",
      contact: "Podaj telefon albo e-mail.",
      email: "Sprawdź adres e-mail.",
      consent: "Zaznacz zgodę, żebyśmy mogli odpowiedzieć.",
    },
    successTitle: "Dziękujemy!",
    successText: "Mamy Twoje zapytanie. Odezwiemy się do Ciebie.",
    failTitle: "Nie udało się wysłać formularza.",
    failText: "Spróbuj jeszcze raz albo zadzwoń do nas:",
    retry: "Spróbuj jeszcze raz",
    summary: "Twoje odpowiedzi",
  },
  reviewsCount: (n) => `${n} ${plural(n, "opinia", "opinie", "opinii")}`,
  formatRating: (n) => n.toFixed(1).replace(".", ","),
};
