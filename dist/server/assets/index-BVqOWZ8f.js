import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ScanFace, ShieldCheck } from "lucide-react";
import { P as PhoneFrame } from "./PhoneFrame-D5fcxJr0.js";
function Splash() {
  return /* @__PURE__ */ jsx(PhoneFrame, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-1 flex-col items-center justify-between overflow-hidden bg-gradient-hero px-8 py-16 text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-mesh opacity-80" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-mesh opacity-40" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-white/70", children: [
      /* @__PURE__ */ jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-accent shadow-glow" }),
      "GOVERNMENT OF INDIA · NHAI"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex h-44 w-44 items-center justify-center", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border border-white/20 animate-pulse-ring" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-4 rounded-full border border-accent/40 animate-pulse-ring", style: {
          animationDelay: "0.6s"
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-orbit", children: /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-glow" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex h-28 w-28 items-center justify-center rounded-3xl glass-dark", children: [
          /* @__PURE__ */ jsx(ScanFace, { className: "h-14 w-14 text-white", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-4 top-1/2 h-px bg-accent shadow-glow animate-scan-line" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold tracking-[0.35em] text-accent", children: "EDGEFACE" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-1 text-4xl font-bold tracking-tight", children: "Lite" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-[260px] text-balance text-sm leading-relaxed text-white/70", children: "Secure Offline Biometric Authentication for NHAI Datalake 3.0" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex w-full flex-col gap-3", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/login", className: "group flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground shadow-glow transition-transform active:scale-[0.98]", children: [
        "Get Started",
        /* @__PURE__ */ jsx("span", { className: "inline-block transition-transform group-hover:translate-x-0.5", children: "→" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-[11px] text-white/50", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
        "AES-256 Encrypted · Device Verified · v3.2.1"
      ] })
    ] })
  ] }) });
}
export {
  Splash as component
};
