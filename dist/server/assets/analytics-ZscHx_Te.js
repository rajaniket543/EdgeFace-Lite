import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { TrendingUp, ShieldAlert, Clock, Users, ChevronRight } from "lucide-react";
import { useState } from "react";
import { A as AppShell } from "./AppShell-53crgEur.js";
import "./PhoneFrame-D5fcxJr0.js";
import "./StatusBar-BF9oOY_G.js";
function Analytics() {
  const [period, setPeriod] = useState("7D");
  const data = {
    "7D": {
      bars: [62, 78, 55, 88, 92, 70, 95],
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      total: "18,492",
      trend: "8.2%",
      success: "99.7%",
      spoofs: "148",
      recognition: "612 ms",
      officers: "2,847"
    },
    "30D": {
      bars: [72, 66, 81, 75, 88, 91, 86],
      labels: ["W1", "W2", "W3", "W4", "Now", "", ""],
      total: "74,318",
      trend: "11.4%",
      success: "99.5%",
      spoofs: "531",
      recognition: "641 ms",
      officers: "3,102"
    },
    "90D": {
      bars: [58, 64, 70, 77, 82, 89, 93],
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Now"],
      total: "219,870",
      trend: "16.9%",
      success: "99.2%",
      spoofs: "1,604",
      recognition: "688 ms",
      officers: "3,418"
    }
  }[period];
  return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", { className: "px-5 pt-4 pb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[11px] font-semibold tracking-wider text-muted-foreground", children: "COMMAND CENTER" }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold tracking-tight", children: "Analytics" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 rounded-xl border border-border bg-card p-1 text-[11px] font-semibold", children: ["7D", "30D", "90D"].map((p) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setPeriod(p), className: `rounded-lg px-2.5 py-1 ${period === p ? "bg-primary text-white" : "text-muted-foreground"}`, children: p }, p)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsx(KPI, { icon: TrendingUp, label: "Success Rate", value: data.success, delta: "+0.4%", tone: "success" }),
      /* @__PURE__ */ jsx(KPI, { icon: ShieldAlert, label: "Spoofs Blocked", value: data.spoofs, delta: "+12", tone: "destructive" }),
      /* @__PURE__ */ jsx(KPI, { icon: Clock, label: "Avg Recognition", value: data.recognition, delta: "-48ms", tone: "primary" }),
      /* @__PURE__ */ jsx(KPI, { icon: Users, label: "Active Officers", value: data.officers, delta: "+143", tone: "accent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-3xl border border-border bg-card p-5 shadow-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold", children: "Daily Authentications" }),
          /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
            "Window: ",
            period,
            " · NH-44 sector"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: data.total }),
          /* @__PURE__ */ jsxs("div", { className: "text-[10px] font-semibold text-success", children: [
            "▲ ",
            data.trend
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex h-36 items-end justify-between gap-2", children: data.bars.map((h, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("div", { className: "relative flex h-full w-full items-end", children: /* @__PURE__ */ jsx("div", { className: `w-full rounded-t-md ${i === 6 ? "bg-gradient-accent shadow-glow" : "bg-gradient-primary"}`, style: {
          height: `${h}%`
        } }) }),
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold text-muted-foreground", children: data.labels[i] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-4 shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: "Sync Status" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex items-center justify-center", children: /* @__PURE__ */ jsx(Donut, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1.5 text-[11px]", children: [
          /* @__PURE__ */ jsx(Legend, { color: "bg-success", label: "Synced", value: "89%" }),
          /* @__PURE__ */ jsx(Legend, { color: "bg-warning", label: "Pending", value: "9%" }),
          /* @__PURE__ */ jsx(Legend, { color: "bg-destructive", label: "Failed", value: "2%" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-4 shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: "Threat Map" }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-2xl font-bold", children: "148" }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: "Spoof attempts blocked" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1.5", children: [
          /* @__PURE__ */ jsx(ThreatRow, { label: "Photo replay", v: 62 }),
          /* @__PURE__ */ jsx(ThreatRow, { label: "Mask spoof", v: 48 }),
          /* @__PURE__ */ jsx(ThreatRow, { label: "Video replay", v: 38 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Link, { to: "/security", className: "mt-4 flex items-center justify-between rounded-2xl border border-border bg-gradient-primary p-4 text-white shadow-primary", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold", children: "Open Security Center" }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] text-white/80", children: "Encryption · device trust · model integrity" })
      ] }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
    ] })
  ] }) });
}
function KPI({
  icon: Icon,
  label,
  value,
  delta,
  tone
}) {
  const tones = {
    success: "bg-success/10 text-success",
    destructive: "bg-destructive/10 text-destructive",
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent"
  };
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-4 shadow-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: `flex h-8 w-8 items-center justify-center rounded-lg ${tones[tone]}`, children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-success", children: delta })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-lg font-bold tracking-tight", children: value }),
    /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: label })
  ] });
}
function Donut() {
  const r = 32, c = 2 * Math.PI * r;
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 80 80", className: "h-24 w-24 -rotate-90", children: [
    /* @__PURE__ */ jsx("circle", { cx: "40", cy: "40", r, fill: "none", stroke: "oklch(0.92 0.008 250)", strokeWidth: "10" }),
    /* @__PURE__ */ jsx("circle", { cx: "40", cy: "40", r, fill: "none", stroke: "oklch(0.62 0.17 155)", strokeWidth: "10", strokeDasharray: `${c * 0.89} ${c}` }),
    /* @__PURE__ */ jsx("circle", { cx: "40", cy: "40", r, fill: "none", stroke: "oklch(0.78 0.16 80)", strokeWidth: "10", strokeDasharray: `${c * 0.09} ${c}`, strokeDashoffset: `${-c * 0.89}` }),
    /* @__PURE__ */ jsx("circle", { cx: "40", cy: "40", r, fill: "none", stroke: "oklch(0.58 0.24 27)", strokeWidth: "10", strokeDasharray: `${c * 0.02} ${c}`, strokeDashoffset: `${-c * 0.98}` })
  ] });
}
function Legend({
  color,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("span", { className: `h-2 w-2 rounded-full ${color}` }),
    /* @__PURE__ */ jsx("span", { className: "flex-1 text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: value })
  ] });
}
function ThreatRow({
  label,
  v
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-[10px] font-semibold", children: [
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("span", { children: v })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 h-1 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full bg-gradient-accent", style: {
      width: `${v}%`
    } }) })
  ] });
}
export {
  Analytics as component
};
