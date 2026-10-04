module.exports = [
"[next]/internal/font/google/manrope_2a7e6b04.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_2a7e6b04$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/manrope_2a7e6b04.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_2a7e6b04$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Manrope', 'Manrope Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_2a7e6b04$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_2a7e6b04$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/manrope_2a7e6b04.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "manrope_2a7e6b04-module__kA1Nta__className",
  "variable": "manrope_2a7e6b04-module__kA1Nta__variable",
});
}),
"[project]/app/[lang]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_2a7e6b04$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/manrope_2a7e6b04.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const dynamicParams = false;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locales"].map((lang)=>({
            lang
        }));
}
const viewport = {
    themeColor: "#164A48",
    width: "device-width",
    initialScale: 1
};
async function generateMetadata({ params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasLocale"])(lang)) return {};
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(lang);
    return {
        metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].url),
        title: t.meta.title,
        description: t.meta.description,
        keywords: lang === "pl" ? [
            "język polski dla cudzoziemców Łódź",
            "kurs polskiego dla obcokrajowców Łódź",
            "szkoła języka polskiego Łódź",
            "nauka polskiego dla cudzoziemców"
        ] : undefined,
        alternates: {
            canonical: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localePath"][lang],
            languages: {
                pl: "/",
                en: "/en",
                uk: "/ua",
                "x-default": "/"
            }
        },
        openGraph: {
            type: "website",
            siteName: "SKAWI",
            title: t.meta.title,
            description: t.meta.description,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localePath"][lang],
            locale: ({
                pl: "pl_PL",
                en: "en_GB",
                ua: "uk_UA"
            })[lang],
            images: [
                {
                    url: "/images/skawi-logo.jpg",
                    width: 438,
                    height: 438,
                    alt: "SKAWI"
                }
            ]
        },
        icons: {
            icon: "/images/skawi-logo.jpg",
            apple: "/images/skawi-logo.jpg"
        }
    };
}
// Runs before paint:
// 1. marks JS as available,
// 2. decides whether the intro plays (once per tab session, never with reduced motion),
// 3. a refresh always starts at the top: no scroll restoration, and the
//    #anchor left in the URL by an earlier nav click is dropped on reload.
//    A shared link with #anchor on a fresh visit still jumps to its section.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(r||sessionStorage.getItem('skawi-intro')){d.classList.add('intro-done')}else{sessionStorage.setItem('skawi-intro','1')}}catch(e){d.classList.add('intro-done')}try{if('scrollRestoration' in history)history.scrollRestoration='manual';var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];var reload=n?n.type==='reload':(performance.navigation&&performance.navigation.type===1);if(reload&&location.hash){history.replaceState(history.state,'',location.pathname+location.search)}if(reload||!location.hash){var top=function(){try{window.scrollTo({top:0,left:0,behavior:'instant'})}catch(e){window.scrollTo(0,0)}};top();var moved=false,mark=function(){moved=true};['wheel','touchstart','keydown'].forEach(function(t){window.addEventListener(t,mark,{once:true,passive:true})});window.addEventListener('load',function(){if(!moved)top()},{once:true})}}catch(e){}})();`;
async function RootLayout({ children, params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasLocale"])(lang)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["htmlLang"][lang],
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    dangerouslySetInnerHTML: {
                        __html: bootScript
                    }
                }, void 0, false, {
                    fileName: "[project]/app/[lang]/layout.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[lang]/layout.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_2a7e6b04$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable,
                children: children
            }, void 0, false, {
                fileName: "[project]/app/[lang]/layout.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[lang]/layout.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/dictionaries/en.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "en",
    ()=>en
]);
const en = {
    meta: {
        title: "SKAWI | Polish for foreigners in Łódź",
        description: "SKAWI is a Polish language school for foreigners in Łódź. Polish courses for everyday life, work and conversation. Łagiewnicka 54/501. Phone 535 228 264."
    },
    brand: {
        descriptor: [
            "Polish language school",
            "for foreigners"
        ]
    },
    nav: {
        items: [
            {
                href: "#kursy",
                label: "Courses"
            },
            {
                href: "#jak-uczymy",
                label: "How we teach"
            },
            {
                href: "#o-nas",
                label: "About us"
            },
            {
                href: "#opinie",
                label: "Reviews"
            },
            {
                href: "#faq",
                label: "FAQ"
            },
            {
                href: "#kontakt",
                label: "Contact"
            }
        ],
        cta: "Find a course",
        menu: "Menu",
        close: "Close",
        language: "Site language",
        skip: "Skip to content"
    },
    hero: {
        kicker: "Polish for foreigners in Łódź",
        title: [
            "Learn Polish",
            "for real life."
        ],
        lead: "You learn step by step. For work, for talking and for everyday life. We start from your level.",
        cta: "Find your course",
        secondary: "See how we teach",
        ratingSuffix: "on Google",
        reviewsLink: "See reviews on Google",
        photoAlt: "A bright desk with an open notebook, books and coffee"
    },
    path: {
        label: "Your path with Polish",
        steps: [
            "First conversations",
            "More confidence",
            "Independent communication",
            "Advanced Polish",
            "Full fluency"
        ]
    },
    goals: {
        title: "Why do you need Polish?",
        lead: "Choose your goal. It helps us find the right course.",
        items: {
            talk: {
                title: "I want to speak freely",
                text: "You want to talk with neighbours, in shops and with friends. Without stress and without searching for words.",
                cta: "Find a conversation course"
            },
            work: {
                title: "I need Polish for work",
                text: "You want to understand your boss and colleagues. You want to write emails and talk to clients. Tell us about your job.",
                cta: "Find a course for work"
            },
            exam: {
                title: "I want to prepare for an exam",
                text: "Do you have a Polish exam ahead? Tell us which exam and when. We will tell you how we can help.",
                cta: "Ask about your exam"
            },
            life: {
                title: "I want to manage better in Poland",
                text: "Offices, doctors, banks, your child's school. You want to handle things yourself and understand what is happening around you.",
                cta: "Find a course for life in Poland"
            }
        }
    },
    trust: {
        label: "Meet SKAWI",
        title: "We teach Polish for real life.",
        body: "SKAWI is a Polish language school for foreigners in Łódź. We teach the Polish you need every day: at work, at the office and in conversation.",
        caption: "Our students with their certificates.",
        facts: {
            address: "Address",
            phone: "Phone",
            google: "Google rating",
            instagram: "Instagram"
        }
    },
    steps: {
        label: "How to start?",
        title: [
            "4 simple steps.",
            "Then you start."
        ],
        lead: "Tell us what you need. We will help you choose the right way to learn.",
        items: [
            {
                title: "Tell us what you need.",
                text: "Fill in a short form."
            },
            {
                title: "We check your level.",
                text: "So you start in the right place."
            },
            {
                title: "We choose a course.",
                text: "We get back to you with a suitable offer."
            },
            {
                title: "You start learning.",
                text: "We agree on a date and you can begin."
            }
        ],
        levelUnconfirmed: {
            title: "Tell us your level.",
            text: "Not sure? Choose “I don't know”."
        },
        cta: "Find your course"
    },
    reviews: {
        title: "What do our students say?",
        lead: "Our students leave reviews on Google. Read what they write.",
        based: "average rating",
        cta: "See reviews on Google",
        googleLabel: "Google reviews"
    },
    faq: {
        title: "Frequently asked questions",
        lead: "Your question is not here? Call us. We are happy to help.",
        pending: "Please ask us directly. Call 535 228 264 or fill in the form. We will answer your question.",
        items: [
            {
                id: "zero",
                q: "Can I start from zero?",
                a: null
            },
            {
                id: "level",
                q: "How can I check my level?",
                a: null
            },
            {
                id: "group",
                q: "Are the lessons in a group or one-to-one?",
                a: null
            },
            {
                id: "online",
                q: "Can I learn online?",
                a: null
            },
            {
                id: "often",
                q: "How often are the lessons?",
                a: null
            },
            {
                id: "price",
                q: "How much does a course cost?",
                a: null
            },
            {
                id: "exam",
                q: "Do you prepare students for exams?",
                a: null
            },
            {
                id: "teacher-lang",
                q: "What language does the teacher use with beginners?",
                a: null
            },
            {
                id: "signup",
                q: "How do I sign up?",
                a: "Click “Find your course” and fill in the short form. You can also call us: 535 228 264."
            },
            {
                id: "where",
                q: "Where is the school?",
                a: "Łagiewnicka 54/501, 91-463 Łódź."
            }
        ]
    },
    contact: {
        title: "Contact",
        lead: "Visit us, call us or send a message on Instagram.",
        address: "Address",
        phone: "Phone",
        instagram: "Instagram",
        route: "Get directions",
        openMaps: "Open in Google Maps",
        mapTitle: "Map: SKAWI, Łagiewnicka 54/501, Łódź"
    },
    final: {
        title: [
            "Start speaking",
            "Polish."
        ],
        lead: "Tell us what you need. We will help you choose the right way to learn.",
        cta: "Find a course",
        orCall: "or call"
    },
    footer: {
        privacy: "Privacy policy",
        maps: "Google Maps",
        credit: "Website by",
        rights: "All rights reserved."
    },
    form: {
        title: "Find your course",
        step: (n, total)=>`Step ${n} of ${total}`,
        level: {
            q: "How well do you know Polish?",
            options: {
                zero: "I'm starting from zero",
                a: "A1–A2",
                b: "B1–B2",
                c: "C1–C2",
                unknown: "I don't know"
            }
        },
        purpose: {
            q: "Why are you learning Polish?",
            options: {
                daily: "Everyday life",
                work: "Work",
                exam: "Exam",
                study: "Studies",
                other: "Other goal"
            }
        },
        format: {
            q: "How do you want to learn?",
            options: {
                group: "In a group",
                individual: "One-to-one",
                online: "Online",
                onsite: "At the school",
                unsure: "I don't know yet"
            }
        },
        time: {
            q: "When can you learn?",
            hint: "You can choose more than one.",
            options: {
                morning: "Morning",
                afternoon: "Afternoon",
                evening: "Evening",
                flexible: "Flexible"
            }
        },
        contactTitle: "How can we contact you?",
        contactLead: "Give us your phone or email. We will get back to you.",
        name: "First name",
        phone: "Phone",
        email: "Email",
        message: "Message",
        messagePlaceholder: "For example: when you want to start",
        optional: "optional",
        consent: "I agree that SKAWI may contact me about a course.",
        privacyLink: "Privacy policy",
        next: "Next",
        back: "Back",
        submit: "Send enquiry",
        sending: "Sending…",
        close: "Close",
        errors: {
            choose: "Choose one answer.",
            name: "Enter your first name.",
            contact: "Enter your phone or email.",
            email: "Check your email address.",
            consent: "Please tick the box so we can reply."
        },
        successTitle: "Thank you!",
        successText: "We have your enquiry. We will get back to you.",
        failTitle: "The form was not sent.",
        failText: "Please try again or call us:",
        retry: "Try again",
        summary: "Your answers"
    },
    reviewsCount: (n)=>`${n} ${n === 1 ? "review" : "reviews"}`,
    formatRating: (n)=>n.toFixed(1)
};
}),
"[project]/lib/dictionaries/pl.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pl",
    ()=>pl
]);
function plural(n, one, few, many) {
    if (n === 1) return one;
    const d = n % 10;
    const h = n % 100;
    if (d >= 2 && d <= 4 && (h < 12 || h > 14)) return few;
    return many;
}
const pl = {
    meta: {
        title: "SKAWI | Język polski dla cudzoziemców w Łodzi",
        description: "SKAWI to szkoła języka polskiego dla cudzoziemców w Łodzi. Kurs polskiego dla obcokrajowców do życia, pracy i rozmów. Łagiewnicka 54/501. Tel. 535 228 264."
    },
    brand: {
        descriptor: [
            "Szkoła języka polskiego",
            "dla cudzoziemców"
        ]
    },
    nav: {
        items: [
            {
                href: "#kursy",
                label: "Kursy"
            },
            {
                href: "#jak-uczymy",
                label: "Jak uczymy"
            },
            {
                href: "#o-nas",
                label: "O nas"
            },
            {
                href: "#opinie",
                label: "Opinie"
            },
            {
                href: "#faq",
                label: "FAQ"
            },
            {
                href: "#kontakt",
                label: "Kontakt"
            }
        ],
        cta: "Dobierz kurs",
        menu: "Menu",
        close: "Zamknij",
        language: "Język strony",
        skip: "Przejdź do treści"
    },
    hero: {
        kicker: "Polski dla obcokrajowców w Łodzi",
        title: [
            "Naucz się polskiego",
            "do życia."
        ],
        lead: "Uczysz się krok po kroku. Do pracy, do rozmów i do codziennego życia. Zaczynamy od Twojego poziomu.",
        cta: "Dobierz kurs dla siebie",
        secondary: "Zobacz, jak uczymy",
        ratingSuffix: "w Google",
        reviewsLink: "Zobacz opinie w Google",
        photoAlt: "Jasne biurko z otwartym zeszytem, książkami i kawą"
    },
    path: {
        label: "Twoja droga z polskim",
        steps: [
            "Pierwsze rozmowy",
            "Więcej swobody",
            "Samodzielna komunikacja",
            "Zaawansowany polski",
            "Pełna swoboda"
        ]
    },
    goals: {
        title: "Po co Ci polski?",
        lead: "Wybierz swój cel. Wtedy łatwiej dobierzemy kurs.",
        items: {
            talk: {
                title: "Chcę swobodnie rozmawiać",
                text: "Chcesz rozmawiać z sąsiadami, w sklepie i z przyjaciółmi. Bez stresu i bez długiego szukania słów.",
                cta: "Dobierz kurs do rozmów"
            },
            work: {
                title: "Potrzebuję polskiego do pracy",
                text: "Chcesz rozumieć szefa i współpracowników. Chcesz pisać maile i rozmawiać z klientami. Powiedz nam, jaką masz pracę.",
                cta: "Dobierz kurs do pracy"
            },
            exam: {
                title: "Chcę przygotować się do egzaminu",
                text: "Masz przed sobą egzamin z polskiego? Napisz, jaki to egzamin i kiedy. Powiemy Ci, jak możemy pomóc.",
                cta: "Zapytaj o egzamin"
            },
            life: {
                title: "Chcę lepiej radzić sobie w Polsce",
                text: "Urząd, lekarz, bank, szkoła dziecka. Chcesz załatwiać sprawy samodzielnie i rozumieć, co się dzieje wokół Ciebie.",
                cta: "Dobierz kurs do życia w Polsce"
            }
        }
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
            instagram: "Instagram"
        }
    },
    steps: {
        label: "Jak zacząć?",
        title: [
            "4 proste kroki.",
            "I zaczynasz."
        ],
        lead: "Powiedz nam, czego potrzebujesz. Pomożemy Ci dobrać odpowiednią naukę.",
        items: [
            {
                title: "Powiedz, czego potrzebujesz.",
                text: "Wypełnij krótki formularz."
            },
            {
                title: "Sprawdzimy Twój poziom.",
                text: "Dzięki temu zaczniesz od właściwego miejsca."
            },
            {
                title: "Dobieramy kurs.",
                text: "Wracamy do Ciebie z odpowiednią propozycją."
            },
            {
                title: "Zaczynasz naukę.",
                text: "Ustalamy termin i możesz zacząć."
            }
        ],
        levelUnconfirmed: {
            title: "Powiedz nam, jaki masz poziom.",
            text: "Nie wiesz? Wybierz „Nie wiem”."
        },
        cta: "Dobierz kurs dla siebie"
    },
    reviews: {
        title: "Co mówią nasi uczniowie?",
        lead: "Nasi kursanci wystawiają nam opinie w Google. Przeczytaj, co piszą.",
        based: "średnia ocena",
        cta: "Zobacz opinie w Google",
        googleLabel: "Opinie Google"
    },
    faq: {
        title: "Najczęstsze pytania",
        lead: "Nie ma tu Twojego pytania? Zadzwoń. Chętnie odpowiemy.",
        pending: "Zapytaj nas o to bezpośrednio. Zadzwoń: 535 228 264 albo wypełnij formularz. Odpowiemy na Twoje pytanie.",
        items: [
            {
                id: "zero",
                q: "Czy mogę zacząć od zera?",
                a: null
            },
            {
                id: "level",
                q: "Jak sprawdzić swój poziom?",
                a: null
            },
            {
                id: "group",
                q: "Czy zajęcia są grupowe czy indywidualne?",
                a: null
            },
            {
                id: "online",
                q: "Czy można uczyć się online?",
                a: null
            },
            {
                id: "often",
                q: "Jak często są zajęcia?",
                a: null
            },
            {
                id: "price",
                q: "Ile kosztuje kurs?",
                a: null
            },
            {
                id: "exam",
                q: "Czy przygotowujecie do egzaminu?",
                a: null
            },
            {
                id: "teacher-lang",
                q: "W jakim języku nauczyciel tłumaczy początkującym?",
                a: null
            },
            {
                id: "signup",
                q: "Jak zapisać się na kurs?",
                a: "Kliknij „Dobierz kurs dla siebie” i wypełnij krótki formularz. Możesz też zadzwonić: 535 228 264."
            },
            {
                id: "where",
                q: "Gdzie jest szkoła?",
                a: "Łagiewnicka 54/501, 91-463 Łódź."
            }
        ]
    },
    contact: {
        title: "Kontakt",
        lead: "Przyjdź, zadzwoń albo napisz na Instagramie.",
        address: "Adres",
        phone: "Telefon",
        instagram: "Instagram",
        route: "Wyznacz trasę",
        openMaps: "Otwórz w Mapach Google",
        mapTitle: "Mapa: SKAWI, Łagiewnicka 54/501, Łódź"
    },
    final: {
        title: [
            "Zacznij mówić",
            "po polsku."
        ],
        lead: "Powiedz nam, czego potrzebujesz. Pomożemy Ci wybrać odpowiednią naukę.",
        cta: "Dobierz kurs",
        orCall: "albo zadzwoń"
    },
    footer: {
        privacy: "Polityka prywatności",
        maps: "Mapy Google",
        credit: "Strona wykonana przez",
        rights: "Wszelkie prawa zastrzeżone."
    },
    form: {
        title: "Dobierz kurs dla siebie",
        step: (n, total)=>`Krok ${n} z ${total}`,
        level: {
            q: "Jak dobrze znasz polski?",
            options: {
                zero: "Zaczynam od zera",
                a: "A1–A2",
                b: "B1–B2",
                c: "C1–C2",
                unknown: "Nie wiem"
            }
        },
        purpose: {
            q: "Po co uczysz się polskiego?",
            options: {
                daily: "Codzienne życie",
                work: "Praca",
                exam: "Egzamin",
                study: "Studia",
                other: "Inny cel"
            }
        },
        format: {
            q: "Jak chcesz się uczyć?",
            options: {
                group: "W grupie",
                individual: "Indywidualnie",
                online: "Online",
                onsite: "W szkole",
                unsure: "Nie wiem jeszcze"
            }
        },
        time: {
            q: "Kiedy możesz się uczyć?",
            hint: "Możesz wybrać kilka.",
            options: {
                morning: "Rano",
                afternoon: "Po południu",
                evening: "Wieczorem",
                flexible: "Elastycznie"
            }
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
            consent: "Zaznacz zgodę, żebyśmy mogli odpowiedzieć."
        },
        successTitle: "Dziękujemy!",
        successText: "Mamy Twoje zapytanie. Odezwiemy się do Ciebie.",
        failTitle: "Nie udało się wysłać formularza.",
        failText: "Spróbuj jeszcze raz albo zadzwoń do nas:",
        retry: "Spróbuj jeszcze raz",
        summary: "Twoje odpowiedzi"
    },
    reviewsCount: (n)=>`${n} ${plural(n, "opinia", "opinie", "opinii")}`,
    formatRating: (n)=>n.toFixed(1).replace(".", ",")
};
}),
"[project]/lib/dictionaries/ua.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ua",
    ()=>ua
]);
function plural(n, one, few, many) {
    const d = n % 10;
    const h = n % 100;
    if (d === 1 && h !== 11) return one;
    if (d >= 2 && d <= 4 && (h < 12 || h > 14)) return few;
    return many;
}
const ua = {
    meta: {
        title: "SKAWI | Польська мова для іноземців у Лодзі",
        description: "Школа SKAWI навчає іноземців польської мови в Лодзі. Курси польської для життя, роботи та спілкування. Łagiewnicka 54/501. Тел. 535 228 264."
    },
    brand: {
        descriptor: [
            "Школа польської мови",
            "для іноземців"
        ]
    },
    nav: {
        items: [
            {
                href: "#kursy",
                label: "Курси"
            },
            {
                href: "#jak-uczymy",
                label: "Як ми навчаємо"
            },
            {
                href: "#o-nas",
                label: "Про нас"
            },
            {
                href: "#opinie",
                label: "Відгуки"
            },
            {
                href: "#faq",
                label: "FAQ"
            },
            {
                href: "#kontakt",
                label: "Контакт"
            }
        ],
        cta: "Підібрати курс",
        menu: "Меню",
        close: "Закрити",
        language: "Мова сторінки",
        skip: "Перейти до змісту"
    },
    hero: {
        kicker: "Польська для іноземців у Лодзі",
        title: [
            "Вивчайте польську",
            "для життя."
        ],
        lead: "Ви вчитеся крок за кроком. Для роботи, для розмов і для щоденного життя. Починаємо з вашого рівня.",
        cta: "Підібрати курс для себе",
        secondary: "Як ми навчаємо",
        ratingSuffix: "у Google",
        reviewsLink: "Відгуки в Google",
        photoAlt: "Світлий стіл з відкритим зошитом, книжками та кавою"
    },
    path: {
        label: "Ваш шлях з польською",
        steps: [
            "Перші розмови",
            "Більше впевненості",
            "Самостійне спілкування",
            "Просунута польська",
            "Повна вільність"
        ]
    },
    goals: {
        title: "Навіщо вам польська?",
        lead: "Оберіть свою мету. Так нам легше підібрати курс.",
        items: {
            talk: {
                title: "Хочу вільно розмовляти",
                text: "Ви хочете говорити з сусідами, у магазині та з друзями. Без стресу і без довгого пошуку слів.",
                cta: "Підібрати курс для розмов"
            },
            work: {
                title: "Потрібна польська для роботи",
                text: "Ви хочете розуміти керівника та колег. Писати листи й говорити з клієнтами. Розкажіть нам про свою роботу.",
                cta: "Підібрати курс для роботи"
            },
            exam: {
                title: "Хочу підготуватися до іспиту",
                text: "Попереду іспит з польської? Напишіть, який це іспит і коли. Ми скажемо, як можемо допомогти.",
                cta: "Запитати про іспит"
            },
            life: {
                title: "Хочу краще почуватися в Польщі",
                text: "Установа, лікар, банк, школа дитини. Ви хочете вирішувати справи самостійно й розуміти, що відбувається довкола.",
                cta: "Підібрати курс для життя в Польщі"
            }
        }
    },
    trust: {
        label: "Знайомтеся: SKAWI",
        title: "Вчимо польської для справжнього життя.",
        body: "Школа SKAWI навчає іноземців польської мови в Лодзі. Ми вчимо польської, яка потрібна щодня: на роботі, в установах і в розмові.",
        caption: "Наші слухачки із сертифікатами.",
        facts: {
            address: "Адреса",
            phone: "Телефон",
            google: "Оцінка в Google",
            instagram: "Instagram"
        }
    },
    steps: {
        label: "Як почати?",
        title: [
            "4 прості кроки.",
            "І ви починаєте."
        ],
        lead: "Розкажіть, що вам потрібно. Ми допоможемо підібрати відповідне навчання.",
        items: [
            {
                title: "Розкажіть, що вам потрібно.",
                text: "Заповніть коротку форму."
            },
            {
                title: "Ми перевіримо ваш рівень.",
                text: "Так ви почнете з правильного місця."
            },
            {
                title: "Підбираємо курс.",
                text: "Ми повернемося до вас із відповідною пропозицією."
            },
            {
                title: "Ви починаєте навчання.",
                text: "Домовляємося про дату, і можна починати."
            }
        ],
        levelUnconfirmed: {
            title: "Скажіть, який у вас рівень.",
            text: "Не знаєте? Оберіть «Не знаю»."
        },
        cta: "Підібрати курс для себе"
    },
    reviews: {
        title: "Що кажуть наші учні?",
        lead: "Наші слухачі залишають відгуки в Google. Почитайте, що вони пишуть.",
        based: "середня оцінка",
        cta: "Відгуки в Google",
        googleLabel: "Відгуки Google"
    },
    faq: {
        title: "Часті запитання",
        lead: "Немає вашого запитання? Зателефонуйте. Ми охоче відповімо.",
        pending: "Запитайте нас про це напряму. Телефонуйте: 535 228 264 або заповніть форму. Ми відповімо на ваше запитання.",
        items: [
            {
                id: "zero",
                q: "Чи можна почати з нуля?",
                a: null
            },
            {
                id: "level",
                q: "Як перевірити свій рівень?",
                a: null
            },
            {
                id: "group",
                q: "Заняття групові чи індивідуальні?",
                a: null
            },
            {
                id: "online",
                q: "Чи можна навчатися онлайн?",
                a: null
            },
            {
                id: "often",
                q: "Як часто проходять заняття?",
                a: null
            },
            {
                id: "price",
                q: "Скільки коштує курс?",
                a: null
            },
            {
                id: "exam",
                q: "Чи готуєте ви до іспиту?",
                a: null
            },
            {
                id: "teacher-lang",
                q: "Якою мовою викладач пояснює початківцям?",
                a: null
            },
            {
                id: "signup",
                q: "Як записатися на курс?",
                a: "Натисніть «Підібрати курс для себе» і заповніть коротку форму. Також можна зателефонувати: 535 228 264."
            },
            {
                id: "where",
                q: "Де знаходиться школа?",
                a: "Łagiewnicka 54/501, 91-463 Łódź."
            }
        ]
    },
    contact: {
        title: "Контакт",
        lead: "Приходьте, телефонуйте або пишіть в Instagram.",
        address: "Адреса",
        phone: "Телефон",
        instagram: "Instagram",
        route: "Прокласти маршрут",
        openMaps: "Відкрити в Google Maps",
        mapTitle: "Мапа: SKAWI, Łagiewnicka 54/501, Łódź"
    },
    final: {
        title: [
            "Почніть говорити",
            "польською."
        ],
        lead: "Розкажіть, що вам потрібно. Ми допоможемо вибрати відповідне навчання.",
        cta: "Підібрати курс",
        orCall: "або зателефонуйте"
    },
    footer: {
        privacy: "Політика конфіденційності",
        maps: "Google Maps",
        credit: "Сайт створено",
        rights: "Усі права захищено."
    },
    form: {
        title: "Підібрати курс для себе",
        step: (n, total)=>`Крок ${n} з ${total}`,
        level: {
            q: "Наскільки добре ви знаєте польську?",
            options: {
                zero: "Починаю з нуля",
                a: "A1–A2",
                b: "B1–B2",
                c: "C1–C2",
                unknown: "Не знаю"
            }
        },
        purpose: {
            q: "Навіщо ви вчите польську?",
            options: {
                daily: "Щоденне життя",
                work: "Робота",
                exam: "Іспит",
                study: "Навчання",
                other: "Інша мета"
            }
        },
        format: {
            q: "Як ви хочете навчатися?",
            options: {
                group: "У групі",
                individual: "Індивідуально",
                online: "Онлайн",
                onsite: "У школі",
                unsure: "Ще не знаю"
            }
        },
        time: {
            q: "Коли ви можете навчатися?",
            hint: "Можна вибрати кілька.",
            options: {
                morning: "Зранку",
                afternoon: "Після обіду",
                evening: "Увечері",
                flexible: "Гнучко"
            }
        },
        contactTitle: "Як з вами зв'язатися?",
        contactLead: "Вкажіть телефон або e-mail. Ми з вами зв'яжемося.",
        name: "Ім'я",
        phone: "Телефон",
        email: "E-mail",
        message: "Повідомлення",
        messagePlaceholder: "Наприклад: коли хочете почати",
        optional: "необов'язково",
        consent: "Я погоджуюся, щоб SKAWI зв'язалася зі мною щодо курсу.",
        privacyLink: "Політика конфіденційності",
        next: "Далі",
        back: "Назад",
        submit: "Надіслати запит",
        sending: "Надсилання…",
        close: "Закрити",
        errors: {
            choose: "Оберіть одну відповідь.",
            name: "Введіть своє ім'я.",
            contact: "Вкажіть телефон або e-mail.",
            email: "Перевірте адресу e-mail.",
            consent: "Позначте згоду, щоб ми могли відповісти."
        },
        successTitle: "Дякуємо!",
        successText: "Ми отримали ваш запит. Ми з вами зв'яжемося.",
        failTitle: "Не вдалося надіслати форму.",
        failText: "Спробуйте ще раз або зателефонуйте нам:",
        retry: "Спробувати ще раз",
        summary: "Ваші відповіді"
    },
    reviewsCount: (n)=>`${n} ${plural(n, "відгук", "відгуки", "відгуків")}`,
    formatRating: (n)=>n.toFixed(1).replace(".", ",")
};
}),
"[project]/lib/i18n.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDictionary",
    ()=>getDictionary,
    "goalToPurpose",
    ()=>goalToPurpose,
    "hasLocale",
    ()=>hasLocale,
    "htmlLang",
    ()=>htmlLang,
    "localeLabel",
    ()=>localeLabel,
    "localePath",
    ()=>localePath,
    "locales",
    ()=>locales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$pl$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dictionaries/pl.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$en$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dictionaries/en.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$ua$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dictionaries/ua.ts [app-rsc] (ecmascript)");
;
;
;
const locales = [
    "pl",
    "en",
    "ua"
];
const htmlLang = {
    pl: "pl",
    en: "en",
    ua: "uk"
};
const localePath = {
    pl: "/",
    en: "/en",
    ua: "/ua"
};
const localeLabel = {
    pl: "PL",
    en: "EN",
    ua: "UA"
};
function hasLocale(value) {
    return locales.includes(value);
}
const goalToPurpose = {
    talk: "daily",
    work: "work",
    exam: "exam",
    life: "daily"
};
const dictionaries = {
    pl: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$pl$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pl"],
    en: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$en$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"],
    ua: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$ua$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ua"]
};
function getDictionary(locale) {
    return dictionaries[locale];
}
}),
"[project]/lib/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Verified business data and content switches.
 * Everything here is either confirmed in the brief or explicitly marked
 * as waiting for confirmation from the client.
 */ __turbopack_context__.s([
    "confirmed",
    ()=>confirmed,
    "site",
    ()=>site,
    "testimonials",
    ()=>testimonials
]);
const site = {
    name: "SKAWI",
    // TODO(klient): potwierdzić docelową domenę. Można nadpisać zmienną NEXT_PUBLIC_SITE_URL.
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://skawi.pl",
    address: {
        street: "Łagiewnicka 54/501",
        postalCode: "91-463",
        city: "Łódź",
        country: "PL"
    },
    phone: {
        display: "535 228 264",
        href: "tel:+48535228264",
        e164: "+48535228264"
    },
    instagram: {
        handle: "@skawi.pl_school",
        url: "https://www.instagram.com/skawi.pl_school"
    },
    /**
   * Google rating, checked manually. Update both numbers together.
   * TODO(klient): podmienić mapsUrl na dokładny link do wizytówki Google
   * (link "Udostępnij" z Map Google). Brief go nie zawierał.
   */ google: {
        rating: 4.9,
        reviewCount: 54,
        checkedAt: "2026-10",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("SKAWI Szkoła języka polskiego, Łagiewnicka 54/501, 91-463 Łódź"),
        embedUrl: "https://www.google.com/maps?output=embed&z=16&q=" + encodeURIComponent("Łagiewnicka 54, 91-463 Łódź"),
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("Łagiewnicka 54, 91-463 Łódź")
    }
};
const confirmed = {
    /** Does the school test the level before the course? Changes step 2 copy. */ levelAssessment: false,
    /** Lesson formats offered. Empty = the format question stays hidden in the form. */ lessonFormats: []
};
const testimonials = [];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0et4vdt._.js.map