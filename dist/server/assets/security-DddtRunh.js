import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Lock, FileCheck2, Cpu, Eye, AlertTriangle, ChevronRight } from "lucide-react";
import { A as AppShell } from "./AppShell-53crgEur.js";
import "./PhoneFrame-D5fcxJr0.js";
import "./StatusBar-BF9oOY_G.js";
function Security() {
  return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", { className: "px-5 pt-4 pb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(Link, { to: "/home", className: "flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[11px] font-semibold tracking-wider text-muted-foreground", children: "SECURITY CENTER" }),
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold tracking-tight", children: "Device & Model Trust" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 overflow-hidden rounded-3xl bg-gradient-hero p-5 text-white shadow-elevated", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-white/70", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-success" }),
          " SECURITY STATUS"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rounded-full bg-success/20 px-2.5 py-0.5 text-[10px] font-bold text-success", children: "SECURE" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-end gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold tracking-tight", children: "A+" }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] text-white/70", children: "Trust Grade" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-white/80", children: "All systems verified · last check 2 min ago" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 h-1.5 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx("div", { className: "h-full w-[98%] rounded-full bg-gradient-accent shadow-glow" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ jsx(SecRow, { icon: Lock, title: "AES-256 Encryption", sub: "GCM mode · TPM-backed key · v3.2", status: "active" }),
      /* @__PURE__ */ jsx(SecRow, { icon: FileCheck2, title: "Model Integrity", sub: "SHA-512 verified · signed by NHAI CA", status: "active" }),
      /* @__PURE__ */ jsx(SecRow, { icon: Cpu, title: "Device Trust Score", sub: "98 / 100 · TPM 2.0 attested", status: "active" }),
      /* @__PURE__ */ jsx(SecRow, { icon: Eye, title: "Threat Detection", sub: "Live · 148 spoofs blocked today", status: "active" }),
      /* @__PURE__ */ jsx(SecRow, { icon: ShieldCheck, title: "Last Security Audit", sub: "30 May 2026 · 06:00 IST · Passed", status: "active" }),
      /* @__PURE__ */ jsx(SecRow, { icon: AlertTriangle, title: "Outstanding Alerts", sub: "No critical issues detected", status: "ok" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 rounded-2xl border border-border bg-card p-4 shadow-card", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold", children: "Compliance" }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: "CERT-In · ISO 27001 · MeitY" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx(Pill, { children: "CERT-In" }),
        /* @__PURE__ */ jsx(Pill, { children: "ISO" }),
        /* @__PURE__ */ jsx(Pill, { children: "MeitY" })
      ] })
    ] }) })
  ] }) });
}
function SecRow({
  icon: Icon,
  title,
  sub,
  status
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-card", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: title }),
      /* @__PURE__ */ jsx("div", { className: "truncate text-[11px] text-muted-foreground", children: sub })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success", children: [
      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-success" }),
      status === "active" ? "ACTIVE" : "OK"
    ] }),
    /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
  ] });
}
function Pill({
  children
}) {
  return /* @__PURE__ */ jsx("span", { className: "rounded-md bg-secondary px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-secondary-foreground", children });
}
export {
  Security as component
};
