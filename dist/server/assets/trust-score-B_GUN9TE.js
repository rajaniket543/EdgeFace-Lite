import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, CheckCircle2, Cpu, Activity, ShieldCheck } from "lucide-react";
import { A as AppShell } from "./AppShell-53crgEur.js";
import "./PhoneFrame-D5fcxJr0.js";
import "./StatusBar-BF9oOY_G.js";
const SCORES = [{
  label: "Face Match",
  value: 97,
  color: "oklch(0.55 0.18 250)"
}, {
  label: "Liveness",
  value: 95,
  color: "oklch(0.7 0.21 45)"
}, {
  label: "Lighting Quality",
  value: 92,
  color: "oklch(0.62 0.17 155)"
}, {
  label: "Spoof Detection",
  value: 100,
  color: "oklch(0.62 0.17 155)"
}];
function TrustScore() {
  const final = 96;
  const r = 80;
  const c = 2 * Math.PI * r;
  return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-full flex-col bg-gradient-hero text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-mesh opacity-70" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-mesh opacity-30" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center justify-between px-5 pt-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/success", className: "flex h-9 w-9 items-center justify-center rounded-xl glass-dark", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold tracking-[0.25em] text-white/60", children: "EDGEFACE AI" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold", children: "Trust Score Engine" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-glow", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-5 pb-6 pt-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex h-64 w-64 items-center justify-center", children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 200", className: "h-full w-full -rotate-90", children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "trustG", x1: "0", x2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.7 0.21 45)" }),
            /* @__PURE__ */ jsx("stop", { offset: "60%", stopColor: "oklch(0.55 0.18 250)" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.62 0.17 155)" })
          ] }) }),
          /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r, fill: "none", stroke: "oklch(1 0 0 / 0.08)", strokeWidth: "10" }),
          /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r, fill: "none", stroke: "url(#trustG)", strokeWidth: "10", strokeDasharray: `${final / 100 * c} ${c}`, strokeLinecap: "round" }),
          Array.from({
            length: 40
          }).map((_, i) => {
            const a = i / 40 * Math.PI * 2;
            const x1 = 100 + Math.cos(a) * 92;
            const y1 = 100 + Math.sin(a) * 92;
            const x2 = 100 + Math.cos(a) * 98;
            const y2 = 100 + Math.sin(a) * 98;
            return /* @__PURE__ */ jsx("line", { x1, y1, x2, y2, stroke: "oklch(1 0 0 / 0.2)", strokeWidth: "1" }, i);
          })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-12 flex flex-col items-center justify-center rounded-full glass-dark", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold tracking-[0.25em] text-white/60", children: "FINAL TRUST" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-6xl font-bold tracking-tight", children: final }),
            /* @__PURE__ */ jsx("span", { className: "text-lg text-white/60", children: "/100" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-1.5 rounded-full bg-success/20 px-2.5 py-0.5 text-[10px] font-bold text-success", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }),
            " AUTHENTICATED"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 animate-orbit", children: /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-glow" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-2.5", children: SCORES.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl glass-dark p-3.5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-white/70", children: s.label }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold", children: [
            s.value,
            s.label === "Spoof Detection" ? "" : "%",
            s.label === "Spoof Detection" && /* @__PURE__ */ jsx("span", { className: "ml-1 text-success", children: "· PASSED" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 h-1.5 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full shadow-glow", style: {
          width: `${s.value}%`,
          background: s.color
        } }) })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-3 gap-2", children: [
        /* @__PURE__ */ jsx(MetaPill, { icon: Cpu, label: "Model", value: "v3.2.1" }),
        /* @__PURE__ */ jsx(MetaPill, { icon: Activity, label: "Latency", value: "612ms" }),
        /* @__PURE__ */ jsx(MetaPill, { icon: ShieldCheck, label: "Channel", value: "AES-256" })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/home", className: "mt-5 flex w-full items-center justify-center rounded-2xl bg-accent py-3.5 text-sm font-bold text-accent-foreground shadow-glow active:scale-[0.99]", children: "Complete Authentication" })
    ] })
  ] }) });
}
function MetaPill({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl glass-dark p-3 text-center", children: [
    /* @__PURE__ */ jsx(Icon, { className: "mx-auto h-3.5 w-3.5 text-accent" }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-[9px] font-semibold uppercase tracking-wider text-white/60", children: label }),
    /* @__PURE__ */ jsx("div", { className: "text-xs font-bold", children: value })
  ] });
}
export {
  TrustScore as component
};
