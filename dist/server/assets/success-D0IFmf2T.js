import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, Clock, MapPin, Smartphone, ShieldCheck, CloudUpload } from "lucide-react";
import { A as AppShell } from "./AppShell-53crgEur.js";
import "./PhoneFrame-D5fcxJr0.js";
import "./StatusBar-BF9oOY_G.js";
function Success() {
  return /* @__PURE__ */ jsx(AppShell, { hideNav: true, children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-full flex-col px-5 pt-2 pb-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mt-2 overflow-hidden rounded-3xl bg-gradient-success p-6 text-white shadow-elevated", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex h-24 w-24 items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-pulse-ring rounded-full border-2 border-white/40" }),
          /* @__PURE__ */ jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-white text-success shadow-elevated", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-12 w-12", strokeWidth: 2.5 }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 text-[11px] font-semibold tracking-[0.25em] text-white/80", children: "AUTHENTICATION SUCCESS" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-1 text-2xl font-bold", children: "Welcome, Er. Arjun" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/90", children: "Attendance recorded for NH-44 sector" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold tracking-wider", children: "CONFIDENCE 97.4%" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-3xl border border-border bg-card p-4 shadow-card", children: [
      /* @__PURE__ */ jsx(Row, { icon: Clock, label: "Timestamp", value: "30 May 2026 · 08:42:17 IST" }),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(Row, { icon: MapPin, label: "GPS Location", value: "28.4595° N, 77.0266° E · ±3m" }),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(Row, { icon: Smartphone, label: "Device ID", value: "NHAI-EDG-7742-A · TPM verified" }),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(Row, { icon: ShieldCheck, label: "Encryption", value: "AES-256-GCM · SHA-512 signed" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-3 rounded-2xl border border-warning/30 bg-warning/5 p-3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-warning/15 text-warning-foreground", children: /* @__PURE__ */ jsx(CloudUpload, { className: "h-4.5 w-4.5" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: "Queued for sync" }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: "Will upload to NHAI Datalake when online" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-full bg-warning/20 px-2 py-0.5 text-[10px] font-bold text-warning-foreground", children: "12" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-auto grid grid-cols-2 gap-3 pt-6", children: [
      /* @__PURE__ */ jsx(Link, { to: "/trust-score", className: "rounded-2xl border border-border bg-surface-elevated py-3.5 text-center text-sm font-semibold active:scale-[0.99]", children: "View Trust Score" }),
      /* @__PURE__ */ jsx(Link, { to: "/home", className: "rounded-2xl bg-gradient-primary py-3.5 text-center text-sm font-bold text-white shadow-primary active:scale-[0.99]", children: "Done" })
    ] })
  ] }) });
}
function Row({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-2.5", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("div", { className: "truncate text-sm font-semibold", children: value })
    ] })
  ] });
}
function Divider() {
  return /* @__PURE__ */ jsx("div", { className: "my-1 h-px bg-border" });
}
export {
  Success as component
};
