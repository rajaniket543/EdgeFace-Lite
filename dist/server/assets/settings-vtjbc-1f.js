import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Sun, Globe, ShieldCheck, Cpu, HardDrive, Info, LifeBuoy, LogOut, X } from "lucide-react";
import { useState } from "react";
import { A as AppShell } from "./AppShell-53crgEur.js";
import "./PhoneFrame-D5fcxJr0.js";
import "./StatusBar-BF9oOY_G.js";
function Settings() {
  const [theme, setTheme] = useState("System");
  const [language, setLanguage] = useState("English (India)");
  const [detail, setDetail] = useState(null);
  return /* @__PURE__ */ jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxs("div", { className: "px-5 pt-4 pb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Link, { to: "/home", className: "flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold tracking-tight", children: "Settings" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-white", children: "AM" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold", children: "Er. Arjun Mehta" }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: "NHAI-IN-4827 · Field Engineer" })
        ] }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "Preferences", children: [
        /* @__PURE__ */ jsx(Item, { icon: Sun, label: "Theme", value: theme, onClick: () => setDetail({
          title: "Theme",
          body: "Choose the interface appearance for field use.",
          actions: /* @__PURE__ */ jsx(ChoiceGroup, { options: ["System", "Light", "Dark"], value: theme, onChange: setTheme })
        }) }),
        /* @__PURE__ */ jsx(Item, { icon: Globe, label: "Language", value: language, onClick: () => setDetail({
          title: "Language",
          body: "This changes labels and prompts used during authentication.",
          actions: /* @__PURE__ */ jsx(ChoiceGroup, { options: ["English (India)", "Hindi", "Kannada"], value: language, onChange: setLanguage })
        }) })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "Privacy & Security", children: [
        /* @__PURE__ */ jsx(Item, { icon: ShieldCheck, label: "Privacy Controls", value: "Strict", to: "/security" }),
        /* @__PURE__ */ jsx(Item, { icon: Cpu, label: "AI Model Version", value: "EdgeFace v3.2.1", onClick: () => setDetail({
          title: "AI Model Version",
          body: "EdgeFace v3.2.1 is signed by the NHAI CA and verified locally before each session."
        }) }),
        /* @__PURE__ */ jsx(Item, { icon: HardDrive, label: "Storage Usage", value: "28.4 / 500 MB", onClick: () => setDetail({
          title: "Storage Usage",
          body: "142 encrypted attendance records are stored locally. Pending records are uploaded from the Queue screen."
        }) })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "About", children: [
        /* @__PURE__ */ jsx(Item, { icon: Info, label: "About EdgeFace Lite", value: "Build 2026.05.30", onClick: () => setDetail({
          title: "About EdgeFace Lite",
          body: "Secure offline biometric authentication for NHAI highway field workers."
        }) }),
        /* @__PURE__ */ jsx(Item, { icon: LifeBuoy, label: "Support & Helpdesk", value: "1800-NHAI", onClick: () => setDetail({
          title: "Support & Helpdesk",
          body: "Call 1800-NHAI or raise a field support ticket with your employee ID NHAI-IN-4827."
        }) })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "mt-5 flex items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/5 py-3.5 text-sm font-semibold text-destructive", children: [
        /* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }),
        " Sign Out"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center text-[10px] text-muted-foreground", children: [
        "NHAI Datalake 3.0 · Ministry of Road Transport & Highways",
        /* @__PURE__ */ jsx("div", { className: "mt-1 font-mono", children: "© 2026 · Government of India" })
      ] })
    ] }),
    detail && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-end bg-black/30 px-3 pb-3", children: /* @__PURE__ */ jsxs("div", { className: "w-full rounded-3xl border border-border bg-card p-4 shadow-elevated", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-base font-bold", children: detail.title }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setDetail(null), className: "flex h-8 w-8 items-center justify-center rounded-xl bg-secondary", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: detail.body }),
      detail.actions && /* @__PURE__ */ jsx("div", { className: "mt-4", children: detail.actions }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setDetail(null), className: "mt-4 w-full rounded-2xl bg-gradient-primary py-3 text-sm font-bold text-white shadow-primary", children: "Done" })
    ] }) })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: title }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card", children })
  ] });
}
function Item({
  icon: Icon,
  label,
  value,
  to,
  onClick
}) {
  const inner = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-secondary/50", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 text-sm font-semibold", children: label }),
    /* @__PURE__ */ jsx("div", { className: "text-[11px] font-medium text-muted-foreground", children: value }),
    /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
  ] });
  if (to) return /* @__PURE__ */ jsx(Link, { to, children: inner });
  return /* @__PURE__ */ jsx("button", { type: "button", onClick, className: "w-full text-left", children: inner });
}
function ChoiceGroup({
  options,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2", children: options.map((option) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => onChange(option), className: `rounded-xl border px-2 py-2 text-[11px] font-bold ${value === option ? "border-primary bg-primary text-white" : "border-border bg-secondary text-foreground"}`, children: option }, option)) });
}
export {
  Settings as component
};
