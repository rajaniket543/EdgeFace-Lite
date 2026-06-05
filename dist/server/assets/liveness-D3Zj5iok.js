import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Eye, RotateCw, Smile, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { P as PhoneFrame } from "./PhoneFrame-D5fcxJr0.js";
import { S as StatusBar } from "./StatusBar-BF9oOY_G.js";
function Liveness() {
  const [step, setStep] = useState(0);
  const challenges = [{
    label: "Please Blink Twice",
    icon: Eye,
    stepLabel: "Blink Detection"
  }, {
    label: "Turn Head Left",
    icon: RotateCw,
    stepLabel: "Turn Head Left"
  }, {
    label: "Smile Confirmation",
    icon: Smile,
    stepLabel: "Smile Confirmation"
  }];
  const progress = Math.round(Math.min(step + 1, challenges.length) / challenges.length * 100);
  const current = challenges[Math.min(step, challenges.length - 1)];
  const CurrentIcon = current.icon;
  const complete = step >= challenges.length;
  return /* @__PURE__ */ jsx(PhoneFrame, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-1 flex-col bg-[oklch(0.14_0.04_258)] text-white", children: [
    /* @__PURE__ */ jsx(StatusBar, { dark: true }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-3", children: [
      /* @__PURE__ */ jsx(Link, { to: "/scan", className: "flex h-9 w-9 items-center justify-center rounded-xl glass-dark", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold tracking-[0.25em] text-white/60", children: "STEP 2 / 3" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold", children: "Dynamic Liveness" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-9 w-9" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center px-5 pb-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full rounded-3xl bg-gradient-accent p-5 text-white shadow-glow", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold tracking-[0.2em] text-white/80", children: "CURRENT CHALLENGE" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: complete ? "Liveness Complete" : current.label }),
          complete ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-7 w-7" }) : /* @__PURE__ */ jsx(CurrentIcon, { className: "h-7 w-7" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-[11px] text-white/80", children: "Random challenge prevents replay attacks" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mt-6 flex h-56 w-56 items-center justify-center", children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", className: "h-full w-full -rotate-90", children: [
          /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "52", stroke: "oklch(1 0 0 / 0.08)", strokeWidth: "6", fill: "none" }),
          /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "52", stroke: "url(#gg)", strokeWidth: "6", fill: "none", strokeDasharray: `${progress / 100 * 326.7} 326.7`, strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "gg", x1: "0", x2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.7 0.21 45)" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.55 0.18 250)" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-6 rounded-full border border-white/10 grid-mesh" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-10 flex flex-col items-center justify-center rounded-full glass-dark", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold tracking-wider text-white/60", children: "TRUST SCORE" }),
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold tracking-tight", children: complete ? "96" : String(88 + step * 4) }),
          /* @__PURE__ */ jsxs("div", { className: "text-[10px] text-success", children: [
            "/ 100 ",
            complete ? "VERIFIED" : "ANALYZING"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -top-2 right-2 rounded-full glass-dark px-2.5 py-1 text-[10px] font-bold text-accent", children: [
          progress,
          "% complete"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 w-full space-y-2", children: challenges.map((challenge, index) => /* @__PURE__ */ jsx(Step, { icon: challenge.icon, label: challenge.stepLabel, done: index < step || complete, active: !complete && index === step }, challenge.stepLabel)) }),
      complete ? /* @__PURE__ */ jsx(Link, { to: "/success", className: "mt-auto w-full rounded-2xl bg-gradient-accent py-3.5 text-center text-sm font-bold text-white shadow-glow active:scale-[0.99]", children: "Continue to Trust Score" }) : /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setStep((value) => value + 1), className: "mt-auto w-full rounded-2xl bg-white/10 py-3.5 text-center text-sm font-semibold backdrop-blur active:scale-[0.99]", children: "Mark Challenge Complete" })
    ] })
  ] }) });
}
function Step({
  icon: Icon,
  label,
  done,
  active
}) {
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 ${done ? "border-success/30 bg-success/10" : active ? "border-accent/40 bg-accent/10" : "border-white/10 bg-white/5"}`, children: [
    /* @__PURE__ */ jsx("div", { className: `flex h-8 w-8 items-center justify-center rounded-lg ${done ? "bg-success text-white" : active ? "bg-accent text-white" : "bg-white/10 text-white/60"}`, children: done ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 text-sm font-semibold", children: label }),
    active && /* @__PURE__ */ jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-accent" })
  ] });
}
export {
  Liveness as component
};
