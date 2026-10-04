(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/EnquiryModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnquiryModal",
    ()=>EnquiryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LEVELS = [
    "zero",
    "unknown",
    "a",
    "b",
    "c"
];
const PURPOSES = [
    "daily",
    "work",
    "exam",
    "study",
    "other"
];
const TIMES = [
    "morning",
    "afternoon",
    "evening",
    "flexible"
];
// The format question only appears once the school confirms its formats.
const FORMATS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmed"].lessonFormats.length ? [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmed"].lessonFormats,
    "unsure"
] : [];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function EnquiryModal({ lang, open, openId, goal, onClose }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDictionary"])(lang).form;
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [purpose, setPurpose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [format, setFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [times, setTimes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trap, setTrap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Open / close the native dialog with a short enter/exit transition.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnquiryModal.useEffect": ()=>{
            const dialog = dialogRef.current;
            if (!dialog) return;
            if (open) {
                if (status === "success") {
                    // Fresh form after a successful send.
                    setStatus("idle");
                    setStep(1);
                    setLevel(null);
                    setFormat(null);
                    setTimes([]);
                    setMessage("");
                    setConsent(false);
                }
                if (goal) setPurpose(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goalToPurpose"][goal]);
                if (!dialog.open) dialog.showModal();
                requestAnimationFrame({
                    "EnquiryModal.useEffect": ()=>{
                        setVisible(true);
                        titleRef.current?.focus({
                            preventScroll: true
                        });
                    }
                }["EnquiryModal.useEffect"]);
                return;
            }
            setVisible(false);
            const timer = window.setTimeout({
                "EnquiryModal.useEffect.timer": ()=>dialog.open && dialog.close()
            }["EnquiryModal.useEffect.timer"], 220);
            return ({
                "EnquiryModal.useEffect": ()=>window.clearTimeout(timer)
            })["EnquiryModal.useEffect"];
        // openId re-runs this when the form is reopened from another CTA.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["EnquiryModal.useEffect"], [
        open,
        openId
    ]);
    const scrollTop = ()=>scrollRef.current?.scrollTo({
            top: 0
        });
    function validateStep1() {
        const next = {};
        if (!level) next.level = t.errors.choose;
        if (!purpose) next.purpose = t.errors.choose;
        setErrors(next);
        const first = next.level ? "level" : next.purpose ? "purpose" : null;
        if (first) document.getElementById(`${uid}-${first}`)?.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
        return !first;
    }
    function validateStep2() {
        const next = {};
        if (!name.trim()) next.name = t.errors.name;
        if (!phone.trim() && !email.trim()) next.contact = t.errors.contact;
        if (email.trim() && !EMAIL_RE.test(email.trim())) next.email = t.errors.email;
        if (!consent) next.consent = t.errors.consent;
        setErrors(next);
        const order = [
            "name",
            "contact",
            "email",
            "consent"
        ];
        const first = order.find((k)=>next[k]);
        if (first) {
            const id = first === "contact" ? "phone" : first;
            document.getElementById(`${uid}-${id}`)?.focus();
        }
        return !first;
    }
    function goNext() {
        if (!validateStep1()) return;
        setStep(2);
        scrollTop();
        requestAnimationFrame(()=>titleRef.current?.focus({
                preventScroll: true
            }));
    }
    async function submit(e) {
        e.preventDefault();
        if (step === 1) return goNext();
        if (!validateStep2() || status === "sending") return;
        setStatus("sending");
        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    level,
                    purpose,
                    format,
                    times,
                    name: name.trim(),
                    phone: phone.trim(),
                    email: email.trim(),
                    message: message.trim(),
                    consent,
                    lang,
                    goal,
                    company: trap
                })
            });
            const data = await res.json().catch(()=>null);
            if (!res.ok || !data?.ok) throw new Error("send_failed");
            setStatus("success");
        } catch  {
            setStatus("error");
        }
        scrollTop();
    }
    const toggleTime = (id)=>setTimes((cur)=>cur.includes(id) ? cur.filter((x)=>x !== id) : [
                ...cur,
                id
            ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: dialogRef,
        className: "enquiry",
        "data-visible": visible || undefined,
        "aria-labelledby": `${uid}-title`,
        onCancel: (e)=>{
            e.preventDefault();
            onClose();
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "enquiry__panel",
            ref: scrollRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "enquiry__head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "enquiry__step",
                                    children: status === "success" ? "SKAWI" : t.step(step, 2)
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: `${uid}-title`,
                                    ref: titleRef,
                                    tabIndex: -1,
                                    className: "enquiry__title",
                                    children: status === "success" ? t.successTitle : step === 1 ? t.title : t.contactTitle
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "enquiry__close",
                            onClick: onClose,
                            "aria-label": t.close,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClose"], {}, void 0, false, {
                                fileName: "[project]/components/EnquiryModal.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        status !== "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "enquiry__progress",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    transform: `scaleX(${step / 2})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/EnquiryModal.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EnquiryModal.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                status === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "enquiry__result",
                    role: "status",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "enquiry__check",
                            viewBox: "0 0 48 48",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "24",
                                    cy: "24",
                                    r: "22"
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M14 25l7 7 13-15"
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "enquiry__lead",
                            children: t.successText
                        }, void 0, false, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn--primary btn--lg",
                            onClick: onClose,
                            children: t.close
                        }, void 0, false, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EnquiryModal.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "enquiry__form",
                    onSubmit: submit,
                    noValidate: true,
                    children: [
                        status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "enquiry__alert",
                            role: "alert",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: t.failTitle
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 209,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        t.failText,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].phone.href,
                                            className: "link-strong",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].phone.display
                                        }, void 0, false, {
                                            fileName: "[project]/components/EnquiryModal.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 208,
                            columnNumber: 15
                        }, this),
                        step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "enquiry__body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                    id: `${uid}-level`,
                                    legend: t.level.q,
                                    name: "level",
                                    options: LEVELS.map((id)=>({
                                            id,
                                            label: t.level.options[id]
                                        })),
                                    value: level,
                                    onChange: (v)=>{
                                        setLevel(v);
                                        setErrors((e)=>({
                                                ...e,
                                                level: undefined
                                            }));
                                    },
                                    error: errors.level,
                                    wideFirst: true
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 221,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                    id: `${uid}-purpose`,
                                    legend: t.purpose.q,
                                    name: "purpose",
                                    options: PURPOSES.map((id)=>({
                                            id,
                                            label: t.purpose.options[id]
                                        })),
                                    value: purpose,
                                    onChange: (v)=>{
                                        setPurpose(v);
                                        setErrors((e)=>({
                                                ...e,
                                                purpose: undefined
                                            }));
                                    },
                                    error: errors.purpose
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this),
                                FORMATS.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                    id: `${uid}-format`,
                                    legend: t.format.q,
                                    name: "format",
                                    options: FORMATS.map((id)=>({
                                            id,
                                            label: t.format.options[id]
                                        })),
                                    value: format,
                                    onChange: (v)=>setFormat(v)
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 247,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                    className: "choice",
                                    id: `${uid}-time`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                            className: "choice__legend",
                                            children: [
                                                t.time.q,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "choice__hint",
                                                    children: t.time.hint
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EnquiryModal.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EnquiryModal.tsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "choice__grid choice__grid--four",
                                            children: TIMES.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "option",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            name: "time",
                                                            value: id,
                                                            checked: times.includes(id),
                                                            onChange: ()=>toggleTime(id)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EnquiryModal.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: t.time.options[id]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EnquiryModal.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, id, true, {
                                                    fileName: "[project]/components/EnquiryModal.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/EnquiryModal.tsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 256,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "s1", true, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 220,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "enquiry__body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "enquiry__lead",
                                    children: t.contactLead
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 278,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    id: `${uid}-name`,
                                    label: t.name,
                                    error: errors.name,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: `${uid}-name`,
                                        name: "name",
                                        autoComplete: "given-name",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        "aria-invalid": !!errors.name || undefined,
                                        "aria-describedby": errors.name ? `${uid}-name-err` : undefined
                                    }, void 0, false, {
                                        fileName: "[project]/components/EnquiryModal.tsx",
                                        lineNumber: 280,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 279,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "field-pair",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            id: `${uid}-phone`,
                                            label: t.phone,
                                            error: errors.contact,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: `${uid}-phone`,
                                                name: "phone",
                                                type: "tel",
                                                inputMode: "tel",
                                                autoComplete: "tel",
                                                value: phone,
                                                onChange: (e)=>setPhone(e.target.value),
                                                "aria-invalid": !!errors.contact || undefined,
                                                "aria-describedby": errors.contact ? `${uid}-phone-err` : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/components/EnquiryModal.tsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/EnquiryModal.tsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            id: `${uid}-email`,
                                            label: t.email,
                                            error: errors.email,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: `${uid}-email`,
                                                name: "email",
                                                type: "email",
                                                inputMode: "email",
                                                autoComplete: "email",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                "aria-invalid": !!errors.email || !!errors.contact || undefined,
                                                "aria-describedby": errors.email ? `${uid}-email-err` : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/components/EnquiryModal.tsx",
                                                lineNumber: 305,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/EnquiryModal.tsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 290,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    id: `${uid}-message`,
                                    label: t.message,
                                    hint: t.optional,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: `${uid}-message`,
                                        name: "message",
                                        rows: 3,
                                        placeholder: t.messagePlaceholder,
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/EnquiryModal.tsx",
                                        lineNumber: 319,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 318,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hp",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Company",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                tabIndex: -1,
                                                autoComplete: "off",
                                                value: trap,
                                                onChange: (e)=>setTrap(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/EnquiryModal.tsx",
                                                lineNumber: 331,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/EnquiryModal.tsx",
                                        lineNumber: 329,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 328,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `consent${errors.consent ? " consent--error" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "consent__label",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: `${uid}-consent`,
                                                    type: "checkbox",
                                                    checked: consent,
                                                    onChange: (e)=>{
                                                        setConsent(e.target.checked);
                                                        setErrors((x)=>({
                                                                ...x,
                                                                consent: undefined
                                                            }));
                                                    },
                                                    "aria-describedby": errors.consent ? `${uid}-consent-err` : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EnquiryModal.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        t.consent,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/polityka-prywatnosci",
                                                            target: "_blank",
                                                            rel: "noopener",
                                                            className: "link-strong",
                                                            children: t.privacyLink
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EnquiryModal.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EnquiryModal.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EnquiryModal.tsx",
                                            lineNumber: 335,
                                            columnNumber: 19
                                        }, this),
                                        errors.consent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "field__error",
                                            id: `${uid}-consent-err`,
                                            children: errors.consent
                                        }, void 0, false, {
                                            fileName: "[project]/components/EnquiryModal.tsx",
                                            lineNumber: 354,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 334,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "s2", true, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 277,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `enquiry__foot${step === 1 ? " enquiry__foot--sticky" : ""}`,
                            children: [
                                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn btn--ghost btn--lg enquiry__back",
                                    onClick: ()=>{
                                        setStep(1);
                                        setErrors({});
                                        scrollTop();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowLeft"], {}, void 0, false, {
                                            fileName: "[project]/components/EnquiryModal.tsx",
                                            lineNumber: 373,
                                            columnNumber: 19
                                        }, this),
                                        t.back
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn btn--primary btn--lg enquiry__next",
                                    disabled: status === "sending",
                                    "aria-busy": status === "sending" || undefined,
                                    children: step === 1 ? t.next : status === "sending" ? t.sending : status === "error" ? t.retry : t.submit
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 362,
                            columnNumber: 13
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "enquiry__phone",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPhone"], {}, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 388,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].phone.href,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].phone.display
                                }, void 0, false, {
                                    fileName: "[project]/components/EnquiryModal.tsx",
                                    lineNumber: 389,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EnquiryModal.tsx",
                            lineNumber: 387,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EnquiryModal.tsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/EnquiryModal.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/EnquiryModal.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(EnquiryModal, "0J3LUr1gCdYqmNSiCS89MBsdnLg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = EnquiryModal;
function ChoiceGroup({ id, legend, name, options, value, onChange, error, wideFirst }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        className: `choice${error ? " choice--error" : ""}`,
        id: id,
        "aria-describedby": error ? `${id}-err` : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "choice__legend",
                children: legend
            }, void 0, false, {
                fileName: "[project]/components/EnquiryModal.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `choice__grid${wideFirst ? " choice__grid--wide-first" : ""}`,
                children: options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "option",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: name,
                                value: o.id,
                                checked: value === o.id,
                                onChange: ()=>onChange(o.id)
                            }, void 0, false, {
                                fileName: "[project]/components/EnquiryModal.tsx",
                                lineNumber: 428,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: o.label
                            }, void 0, false, {
                                fileName: "[project]/components/EnquiryModal.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        ]
                    }, o.id, true, {
                        fileName: "[project]/components/EnquiryModal.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/EnquiryModal.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "field__error",
                id: `${id}-err`,
                children: error
            }, void 0, false, {
                fileName: "[project]/components/EnquiryModal.tsx",
                lineNumber: 434,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EnquiryModal.tsx",
        lineNumber: 419,
        columnNumber: 5
    }, this);
}
_c1 = ChoiceGroup;
function Field({ id, label, hint, error, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `field${error ? " field--error" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "field__label",
                children: [
                    label,
                    hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "field__hint",
                        children: [
                            " (",
                            hint,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/EnquiryModal.tsx",
                        lineNumber: 459,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EnquiryModal.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "field__error",
                id: `${id}-err`,
                children: error
            }, void 0, false, {
                fileName: "[project]/components/EnquiryModal.tsx",
                lineNumber: 463,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EnquiryModal.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, this);
}
_c2 = Field;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EnquiryModal");
__turbopack_context__.k.register(_c1, "ChoiceGroup");
__turbopack_context__.k.register(_c2, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EnquiryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaButton",
    ()=>CtaButton,
    "EnquiryProvider",
    ()=>EnquiryProvider,
    "useEnquiry",
    ()=>useEnquiry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EnquiryModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const EnquiryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useEnquiry() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(EnquiryContext);
    if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
    return ctx;
}
_s(useEnquiry, "/dMy7t63NXD4eYACoT93CePwGrg=");
function EnquiryProvider({ lang, children }) {
    _s1();
    const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Bumped on every open so the form can apply the latest preselection.
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const openEnquiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EnquiryProvider.useCallback[openEnquiry]": (fromGoal)=>{
            if (fromGoal) setGoal(fromGoal);
            setOpenId({
                "EnquiryProvider.useCallback[openEnquiry]": (n)=>n + 1
            }["EnquiryProvider.useCallback[openEnquiry]"]);
            setOpen(true);
        }
    }["EnquiryProvider.useCallback[openEnquiry]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EnquiryProvider.useMemo[value]": ()=>({
                lang,
                goal,
                setGoal,
                openEnquiry
            })
    }["EnquiryProvider.useMemo[value]"], [
        lang,
        goal,
        openEnquiry
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnquiryContext.Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnquiryModal"], {
                lang: lang,
                open: open,
                openId: openId,
                goal: goal,
                onClose: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/EnquiryProvider.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EnquiryProvider.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s1(EnquiryProvider, "RU37DHtKVUEqYYTNJaDCe8v3Ugw=");
_c = EnquiryProvider;
function CtaButton({ children, goal, variant = "primary", size = "md", className = "" }) {
    _s2();
    const { openEnquiry } = useEnquiry();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `btn btn--${variant} btn--${size} ${className}`,
        "aria-haspopup": "dialog",
        onClick: ()=>openEnquiry(goal),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/EnquiryProvider.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s2(CtaButton, "bl2D/Ovr66Mcsl35oUiB0ds1TP0=", false, function() {
    return [
        useEnquiry
    ];
});
_c1 = CtaButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "EnquiryProvider");
__turbopack_context__.k.register(_c1, "CtaButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Goals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Goals",
    ()=>Goals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EnquiryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EnquiryProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const GOALS = [
    "talk",
    "work",
    "exam",
    "life"
];
function Goals({ lang }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDictionary"])(lang).goals;
    const { goal, setGoal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EnquiryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnquiry"])();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(goal ?? "talk");
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const select = (id)=>{
        setActive(id);
        setGoal(id);
    };
    const onKeyDown = (e, index)=>{
        const keys = {
            ArrowDown: 1,
            ArrowRight: 1,
            ArrowUp: -1,
            ArrowLeft: -1
        };
        let next = null;
        if (e.key in keys) next = (index + keys[e.key] + GOALS.length) % GOALS.length;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = GOALS.length - 1;
        if (next === null) return;
        e.preventDefault();
        select(GOALS[next]);
        tabs.current[next]?.focus();
    };
    const item = t.items[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "kursy",
        className: "goals section",
        "aria-labelledby": "goals-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "goals__head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "goals-title",
                            className: "h2",
                            children: t.title
                        }, void 0, false, {
                            fileName: "[project]/components/Goals.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "goals__lead",
                            children: t.lead
                        }, void 0, false, {
                            fileName: "[project]/components/Goals.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Goals.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "goals__grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "goals__list",
                            role: "tablist",
                            "aria-orientation": "vertical",
                            "aria-labelledby": "goals-title",
                            children: GOALS.map((id, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: (el)=>{
                                        tabs.current[i] = el;
                                    },
                                    type: "button",
                                    role: "tab",
                                    id: `goal-tab-${id}`,
                                    "aria-selected": active === id,
                                    "aria-controls": "goal-panel",
                                    tabIndex: active === id ? 0 : -1,
                                    className: "goal",
                                    onClick: ()=>select(id),
                                    onKeyDown: (e)=>onKeyDown(e, i),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "goal__num",
                                            children: String(i + 1).padStart(2, "0")
                                        }, void 0, false, {
                                            fileName: "[project]/components/Goals.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "goal__title",
                                            children: t.items[id].title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Goals.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "goal__mark",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Goals.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, id, true, {
                                    fileName: "[project]/components/Goals.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Goals.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "goals__panel",
                            id: "goal-panel",
                            role: "tabpanel",
                            "aria-labelledby": `goal-tab-${active}`,
                            "aria-live": "polite",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "goals__panel-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "goals__panel-title",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Goals.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "goals__panel-text",
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/Goals.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EnquiryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaButton"], {
                                        goal: active,
                                        variant: "light",
                                        size: "lg",
                                        children: item.cta
                                    }, void 0, false, {
                                        fileName: "[project]/components/Goals.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, active, true, {
                                fileName: "[project]/components/Goals.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Goals.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Goals.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Goals.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Goals.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Goals, "m49+7KwOalT20iIyXcJ3ZhKU3wY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EnquiryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnquiry"]
    ];
});
_c = Goals;
var _c;
__turbopack_context__.k.register(_c, "Goals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EnquiryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EnquiryProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Header({ lang }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDictionary"])(lang);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 8)
            }["Header.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            document.documentElement.classList.toggle("menu-open", menuOpen);
            if (!menuOpen) return;
            document.querySelector("#mobile-menu a")?.focus({
                preventScroll: true
            });
            const onKey = {
                "Header.useEffect.onKey": (e)=>e.key === "Escape" && setMenuOpen(false)
            }["Header.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "Header.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        menuOpen
    ]);
    // Close the menu first (it locks page scroll), then scroll to the section.
    const goTo = (e, href)=>{
        const target = document.querySelector(href);
        if (!target) return setMenuOpen(false);
        e.preventDefault();
        setMenuOpen(false);
        requestAnimationFrame(()=>{
            document.documentElement.classList.remove("menu-open");
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            history.pushState(null, "", href);
            document.querySelector(".menu-toggle")?.focus({
                preventScroll: true
            });
        });
    };
    const LangSwitch = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: className,
            "aria-label": t.nav.language,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locales"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localePath"][l],
                    hrefLang: l === "ua" ? "uk" : l,
                    "aria-current": l === lang ? "true" : undefined,
                    className: "lang__item",
                    scroll: false,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeLabel"][l]
                }, l, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-header${scrolled ? " is-scrolled" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "site-header__inner container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localePath"][lang],
                        className: "brand",
                        "aria-label": "SKAWI",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand__logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/skawi-logo.jpg",
                                    alt: "SKAWI. Szkoła języków obcych",
                                    width: 438,
                                    height: 438,
                                    sizes: "64px",
                                    preload: true
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand__text",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t.brand.descriptor[0]
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t.brand.descriptor[1]
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "main-nav",
                        "aria-label": "Menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: t.nav.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "site-header__actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LangSwitch, {
                                className: "lang"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EnquiryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaButton"], {
                                size: "sm",
                                className: "site-header__cta",
                                children: t.nav.cta
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "menu-toggle",
                                "aria-expanded": menuOpen,
                                "aria-controls": "mobile-menu",
                                onClick: ()=>setMenuOpen((v)=>!v),
                                children: [
                                    menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClose"], {}, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMenu"], {}, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 98,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: menuOpen ? t.nav.close : t.nav.menu
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mobile-menu",
                className: "mobile-menu",
                "data-open": menuOpen || undefined,
                hidden: !menuOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mobile-menu__list",
                            children: t.nav.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        onClick: (e)=>goTo(e, item.href),
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-menu__foot",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LangSwitch, {
                                className: "lang lang--large"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "mobile-menu__phone",
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].phone.href,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPhone"], {}, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].phone.display
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(Header, "0FTCTa/wSwaXFgLT2GlKcn4CdyU=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleG",
    ()=>GoogleG,
    "IconArrow",
    ()=>IconArrow,
    "IconArrowLeft",
    ()=>IconArrowLeft,
    "IconClose",
    ()=>IconClose,
    "IconExternal",
    ()=>IconExternal,
    "IconInstagram",
    ()=>IconInstagram,
    "IconMenu",
    ()=>IconMenu,
    "IconPhone",
    ()=>IconPhone,
    "IconPin",
    ()=>IconPin,
    "IconPlus",
    ()=>IconPlus,
    "Stars",
    ()=>Stars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const base = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
};
const IconPhone = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 3.5h3.2l1.6 4-2 1.3a11 11 0 0 0 7.4 7.4l1.3-2 4 1.6V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.1A1.5 1.5 0 0 1 5 3.5Z"
        }, void 0, false, {
            fileName: "[project]/components/Icons.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconPhone;
const IconInstagram = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3.5",
                y: "3.5",
                width: "17",
                height: "17",
                rx: "5"
            }, void 0, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3.9"
            }, void 0, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.2",
                cy: "6.8",
                r: "0.6",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = IconInstagram;
const IconPin = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10",
                r: "2.4"
            }, void 0, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = IconPin;
const IconArrow = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12h13M13 6l6 6-6 6"
        }, void 0, false, {
            fileName: "[project]/components/Icons.tsx",
            lineNumber: 38,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = IconArrow;
const IconArrowLeft = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 12H6M11 6l-6 6 6 6"
        }, void 0, false, {
            fileName: "[project]/components/Icons.tsx",
            lineNumber: 44,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = IconArrowLeft;
const IconExternal = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        width: 16,
        height: 16,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
        }, void 0, false, {
            fileName: "[project]/components/Icons.tsx",
            lineNumber: 50,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = IconExternal;
const IconClose = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        width: 22,
        height: 22,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 6l12 12M18 6 6 18"
        }, void 0, false, {
            fileName: "[project]/components/Icons.tsx",
            lineNumber: 56,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = IconClose;
const IconMenu = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        width: 22,
        height: 22,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 8h16M4 16h16"
        }, void 0, false, {
            fileName: "[project]/components/Icons.tsx",
            lineNumber: 62,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = IconMenu;
const IconPlus = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14"
        }, void 0, false, {
            fileName: "[project]/components/Icons.tsx",
            lineNumber: 68,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = IconPlus;
function Stars({ className, size = 18 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `stars ${className ?? ""}`,
        "aria-hidden": "true",
        children: Array.from({
            length: 5
        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "currentColor",
                    d: "M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6Z"
                }, void 0, false, {
                    fileName: "[project]/components/Icons.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c9 = Stars;
const GoogleG = ({ className, size = 18 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 48 48",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FFC107",
                d: "M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5Z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 90,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FF3D00",
                d: "m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 91,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#4CAF50",
                d: "M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 92,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#1976D2",
                d: "M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.tsx",
                lineNumber: 93,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.tsx",
        lineNumber: 89,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = GoogleG;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "IconPhone");
__turbopack_context__.k.register(_c1, "IconInstagram");
__turbopack_context__.k.register(_c2, "IconPin");
__turbopack_context__.k.register(_c3, "IconArrow");
__turbopack_context__.k.register(_c4, "IconArrowLeft");
__turbopack_context__.k.register(_c5, "IconExternal");
__turbopack_context__.k.register(_c6, "IconClose");
__turbopack_context__.k.register(_c7, "IconMenu");
__turbopack_context__.k.register(_c8, "IconPlus");
__turbopack_context__.k.register(_c9, "Stars");
__turbopack_context__.k.register(_c10, "GoogleG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ as: Tag = "div", className, children, margin = "0px 0px -12% 0px", ...rest }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (!("IntersectionObserver" in window)) {
                el.dataset.inview = "true";
                return;
            }
            const io = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        el.dataset.inview = "true";
                        io.disconnect();
                    }
                }
            }["Reveal.useEffect"], {
                rootMargin: margin
            });
            io.observe(el);
            return ({
                "Reveal.useEffect": ()=>io.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], [
        margin
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: className,
        "data-reveal": "",
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Reveal.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Reveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/dictionaries/en.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/dictionaries/pl.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/dictionaries/ua.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$pl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dictionaries/pl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dictionaries/en.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$ua$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dictionaries/ua.ts [app-client] (ecmascript)");
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
    pl: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$pl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pl"],
    en: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["en"],
    ua: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dictionaries$2f$ua$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ua"]
};
function getDictionary(locale) {
    return dictionaries[locale];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const site = {
    name: "SKAWI",
    // TODO(klient): potwierdzić docelową domenę. Można nadpisać zmienną NEXT_PUBLIC_SITE_URL.
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_URL ?? "https://skawi.pl",
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_195q66_._.js.map