import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Bell, CheckCircle2, MapPin, ScanFace, ChevronRight, CloudUpload, Activity, TrendingUp, Cpu, WifiOff, ShieldCheck, X, Clock, Navigation } from "lucide-react";
import { useState } from "react";
import { A as AppShell } from "./AppShell-53crgEur.js";
import "./PhoneFrame-D5fcxJr0.js";
import "./StatusBar-BF9oOY_G.js";
function Home() {
  const [panel, setPanel] = useState(null);
  return /* @__PURE__ */ jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxs("div", { className: "px-5 pt-4 pb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] font-medium text-muted-foreground", children: "Good morning" }),
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold tracking-tight", children: "Er. Arjun Mehta" })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setPanel("notifications"), className: "relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated active:scale-[0.98]", "aria-label": "Open notifications", children: [
          /* @__PURE__ */ jsx(Bell, { className: "h-4.5 w-4.5 text-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mt-5 overflow-hidden rounded-3xl bg-gradient-hero p-5 text-white shadow-elevated", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-mesh opacity-70" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-start gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur ring-2 ring-accent/40", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "AM" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-success ring-2 ring-[oklch(0.32_0.13_255)]", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-white" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-white/70", children: "EMPLOYEE ID · NHAI-IN-4827" }),
            /* @__PURE__ */ jsx("div", { className: "mt-0.5 truncate text-base font-bold", children: "Highway Field Engineer" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-1.5 text-xs text-white/80", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
              " NH-44, Sector 17 · Gurugram"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setPanel("attendance"), className: "relative mt-5 flex w-full items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-left backdrop-blur active:scale-[0.99]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold tracking-wider text-white/60", children: "TODAY'S ATTENDANCE" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-0.5 flex items-center gap-2 text-sm font-bold", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-success" }),
              " Checked-in · 08:42 IST"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rounded-full bg-success/20 px-2.5 py-1 text-[10px] font-bold tracking-wider text-success", children: "VERIFIED" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/scan", className: "mt-4 flex items-center gap-4 rounded-3xl border border-accent/20 bg-gradient-accent p-4 text-white shadow-glow active:scale-[0.99]", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur", children: /* @__PURE__ */ jsx(ScanFace, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold", children: "Run Face Authentication" }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] text-white/80", children: "AI liveness · spoof detection · < 800ms" })
        ] }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsx(StatCard, { icon: CloudUpload, tint: "primary", label: "Offline Records", value: "12", sub: "Pending sync", to: "/queue" }),
        /* @__PURE__ */ jsx(StatCard, { icon: Activity, tint: "success", label: "Sync Status", value: "98.4%", sub: "Last: 2m ago", to: "/queue" }),
        /* @__PURE__ */ jsx(StatCard, { icon: TrendingUp, tint: "accent", label: "Auth Success", value: "99.7%", sub: "Past 30 days", to: "/analytics" }),
        /* @__PURE__ */ jsx(StatCard, { icon: Cpu, tint: "primary", label: "Device Health", value: "Optimal", sub: "Model v3.2.1", to: "/security" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-2 overflow-x-auto pb-1", children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setPanel("status"), children: /* @__PURE__ */ jsx(Chip, { icon: WifiOff, text: "Offline Mode", tone: "warning" }) }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setPanel("status"), children: /* @__PURE__ */ jsx(Chip, { icon: MapPin, text: "GPS Locked", tone: "success" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/security", children: /* @__PURE__ */ jsx(Chip, { icon: ShieldCheck, text: "AES-256", tone: "primary" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold tracking-tight", children: "Recent Activity" }),
          /* @__PURE__ */ jsx(Link, { to: "/queue", className: "text-[11px] font-semibold text-primary", children: "View all" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-2", children: [{
          t: "Face Authentication",
          s: "Verified · NH-44 KM 287",
          time: "8:42 AM",
          ok: true
        }, {
          t: "Sync to Datalake",
          s: "12 records transmitted",
          time: "8:30 AM",
          ok: true
        }, {
          t: "Liveness Challenge",
          s: "Blink + Head turn",
          time: "8:42 AM",
          ok: true
        }].map((it, i) => /* @__PURE__ */ jsxs(Link, { to: i === 0 ? "/trust-score" : "/queue", className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-card active:scale-[0.99]", children: [
          /* @__PURE__ */ jsx("div", { className: `flex h-9 w-9 items-center justify-center rounded-xl ${it.ok ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`, children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: it.t }),
            /* @__PURE__ */ jsx("div", { className: "truncate text-[11px] text-muted-foreground", children: it.s })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-medium text-muted-foreground", children: it.time })
        ] }, i)) })
      ] })
    ] }),
    panel && /* @__PURE__ */ jsx(HomePanel, { panel, onClose: () => setPanel(null) })
  ] });
}
function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  tint,
  to
}) {
  const tints = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    accent: "bg-accent/10 text-accent"
  };
  return /* @__PURE__ */ jsxs(Link, { to, className: "rounded-2xl border border-border bg-card p-4 shadow-card active:scale-[0.99]", children: [
    /* @__PURE__ */ jsx("div", { className: `flex h-8 w-8 items-center justify-center rounded-lg ${tints[tint]}`, children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-xl font-bold tracking-tight", children: value }),
    /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: sub })
  ] });
}
function Chip({
  icon: Icon,
  text,
  tone
}) {
  const tones = {
    warning: "border-warning/30 bg-warning/10 text-warning-foreground",
    success: "border-success/30 bg-success/10 text-success",
    primary: "border-primary/20 bg-primary/5 text-primary"
  };
  return /* @__PURE__ */ jsxs("div", { className: `flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold ${tones[tone]}`, children: [
    /* @__PURE__ */ jsx(Icon, { className: "h-3 w-3" }),
    " ",
    text
  ] });
}
function HomePanel({
  panel,
  onClose
}) {
  const content = {
    notifications: {
      title: "Notifications",
      rows: [["Sync available", "12 offline records can upload when network returns."], ["Model check passed", "EdgeFace v3.2.1 signature verified 2 min ago."], ["Shift reminder", "NH-44 sector patrol checkpoint due at 11:30 IST."]]
    },
    attendance: {
      title: "Attendance Details",
      rows: [["Check-in", "08:42:17 IST · Confidence 97.4%"], ["Location", "NH-44, Sector 17 · Gurugram · GPS ±3m"], ["Verification", "Face match, liveness, anti-spoof and device trust passed."]]
    },
    status: {
      title: "Live Device Status",
      rows: [["Network", "Offline capture enabled. Queue is encrypted locally."], ["GPS", "Locked at 28.4595 N, 77.0266 E with ±3m accuracy."], ["Storage", "28.4 MB used of 500 MB secure device allocation."]]
    }
  }[panel];
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-end bg-black/30 px-3 pb-3", children: /* @__PURE__ */ jsxs("div", { className: "w-full rounded-3xl border border-border bg-card p-4 shadow-elevated", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-bold", children: content.title }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: onClose, className: "flex h-8 w-8 items-center justify-center rounded-xl bg-secondary", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-2", children: content.rows.map(([title, body]) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 rounded-2xl bg-secondary/60 p-3", children: [
      /* @__PURE__ */ jsx("div", { className: "mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary", children: panel === "attendance" ? /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }) : panel === "status" ? /* @__PURE__ */ jsx(Navigation, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: title }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: body })
      ] })
    ] }, title)) })
  ] }) });
}
export {
  Home as component
};
