import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, WifiOff, User, Lock, Fingerprint } from "lucide-react";
import { A as AppShell } from "./AppShell-53crgEur.js";
import "./PhoneFrame-D5fcxJr0.js";
import "./StatusBar-BF9oOY_G.js";
function Login() {
  return /* @__PURE__ */ jsx(AppShell, { hideNav: true, children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-full flex-col px-6 pt-6 pb-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4.5 w-4.5 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold tracking-[0.2em] text-muted-foreground", children: "NHAI" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold leading-tight", children: "EdgeFace Lite" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-2.5 py-1 text-[10px] font-semibold text-warning-foreground", children: [
        /* @__PURE__ */ jsx(WifiOff, { className: "h-3 w-3" }),
        " OFFLINE"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Welcome back" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: "Sign in to your NHAI field operations account" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-3xl border border-border bg-surface-elevated p-5 shadow-card", children: [
      /* @__PURE__ */ jsx("label", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: "Employee ID" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-1.5 flex items-center gap-2 rounded-xl border border-input bg-background px-3.5 py-3", children: [
        /* @__PURE__ */ jsx(User, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx("input", { defaultValue: "NHAI-IN-4827", className: "flex-1 bg-transparent text-sm font-medium outline-none" }),
        /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-success" })
      ] }),
      /* @__PURE__ */ jsx("label", { className: "mt-4 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: "Password" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-1.5 flex items-center gap-2 rounded-xl border border-input bg-background px-3.5 py-3", children: [
        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx("input", { type: "password", defaultValue: "••••••••••", className: "flex-1 bg-transparent text-sm font-medium outline-none tracking-widest" })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/home", className: "mt-5 flex w-full items-center justify-center rounded-xl bg-gradient-primary py-3.5 text-sm font-semibold text-white shadow-primary active:scale-[0.99]", children: "Sign In Securely" }),
      /* @__PURE__ */ jsxs("div", { className: "my-4 flex items-center gap-3 text-[10px] font-semibold tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
        " OR ",
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/scan", className: "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-accent/20 bg-accent/5 py-3.5 text-sm font-semibold text-accent active:scale-[0.99]", children: [
        /* @__PURE__ */ jsx(Fingerprint, { className: "h-5 w-5" }),
        " Biometric Sign-In"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-auto pt-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 rounded-2xl border border-success/20 bg-success/5 px-4 py-3 text-xs", children: [
      /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-success" }),
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Secure Encrypted Device" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "· TPM 2.0" })
    ] }) })
  ] }) });
}
export {
  Login as component
};
