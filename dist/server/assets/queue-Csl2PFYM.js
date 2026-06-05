import { jsxs, jsx } from "react/jsx-runtime";
import { RefreshCw, Database, ChevronRight, X, CheckCircle2, XCircle, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { A as AppShell } from "./AppShell-53crgEur.js";
import "./PhoneFrame-D5fcxJr0.js";
import "@tanstack/react-router";
import "./StatusBar-BF9oOY_G.js";
const initialItems = [{
  id: "RX-7821",
  name: "S. Pradeep Kumar",
  loc: "NH-44 · KM 287",
  time: "08:42",
  status: "pending",
  retry: 0
}, {
  id: "RX-7820",
  name: "M. Lakshmi Reddy",
  loc: "NH-44 · KM 287",
  time: "08:39",
  status: "synced",
  retry: 0
}, {
  id: "RX-7819",
  name: "V. Karthik Rao",
  loc: "NH-48 · KM 112",
  time: "08:35",
  status: "synced",
  retry: 0
}, {
  id: "RX-7818",
  name: "R. Anjali Sharma",
  loc: "NH-44 · KM 287",
  time: "08:31",
  status: "failed",
  retry: 2
}, {
  id: "RX-7817",
  name: "P. Vijay Anand",
  loc: "NH-44 · KM 286",
  time: "08:28",
  status: "pending",
  retry: 0
}, {
  id: "RX-7816",
  name: "K. Divya Iyer",
  loc: "NH-44 · KM 286",
  time: "08:24",
  status: "synced",
  retry: 0
}];
function Queue() {
  const [items, setItems] = useState(initialItems);
  const [syncing, setSyncing] = useState(false);
  const [selected, setSelected] = useState(null);
  const counts = useMemo(() => ({
    pending: items.filter((it) => it.status === "pending").length,
    synced: items.filter((it) => it.status === "synced").length,
    failed: items.filter((it) => it.status === "failed").length
  }), [items]);
  function syncNow() {
    setSyncing(true);
    window.setTimeout(() => {
      setItems((current) => current.map((it) => ({
        ...it,
        status: "synced",
        retry: 0
      })));
      setSyncing(false);
    }, 900);
  }
  function retry(id) {
    setItems((current) => current.map((it) => it.id === id ? {
      ...it,
      status: "pending",
      retry: it.retry + 1
    } : it));
  }
  return /* @__PURE__ */ jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxs("div", { className: "px-5 pt-4 pb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] font-semibold tracking-wider text-muted-foreground", children: "DATALAKE QUEUE" }),
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold tracking-tight", children: "Offline Records" })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "button", onClick: syncNow, disabled: syncing || counts.pending + counts.failed === 0, className: "flex items-center gap-1.5 rounded-xl bg-gradient-primary px-3 py-2 text-[11px] font-bold text-white shadow-primary disabled:opacity-60", children: [
          /* @__PURE__ */ jsx(RefreshCw, { className: `h-3.5 w-3.5 ${syncing ? "animate-spin" : ""}` }),
          " ",
          syncing ? "Syncing" : "Sync Now"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-2xl border border-border bg-card p-4 shadow-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Database, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: "Encrypted Storage" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold", children: "142 records · 28.4 MB / 500 MB" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 h-2 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx("div", { className: "h-full w-[6%] rounded-full bg-gradient-primary" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center justify-between text-[11px] text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: syncing ? "Uploading encrypted records" : counts.pending + counts.failed === 0 ? "All records synced" : "Next sync: when online" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-success", children: syncing ? "Active" : "Healthy" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-3 gap-2", children: [
        /* @__PURE__ */ jsx(MiniStat, { label: "Pending", value: String(counts.pending), tone: "warning" }),
        /* @__PURE__ */ jsx(MiniStat, { label: "Synced", value: String(counts.synced), tone: "success" }),
        /* @__PURE__ */ jsx(MiniStat, { label: "Failed", value: String(counts.failed), tone: "destructive" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 space-y-2", children: items.map((it) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setSelected(it), className: "flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-3 text-left shadow-card active:scale-[0.99]", children: [
        /* @__PURE__ */ jsx(StatusDot, { status: it.status }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "truncate text-sm font-semibold", children: it.name }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-muted-foreground", children: it.id })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "truncate", children: it.loc }),
            /* @__PURE__ */ jsx("span", { children: "·" }),
            /* @__PURE__ */ jsx("span", { children: it.time }),
            it.retry > 0 && /* @__PURE__ */ jsxs("span", { className: "text-destructive", children: [
              "· ",
              it.retry,
              " retries"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(StatusBadge, { status: it.status }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
      ] }, it.id)) })
    ] }),
    selected && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-end bg-black/30 px-3 pb-3", children: /* @__PURE__ */ jsxs("div", { className: "w-full rounded-3xl border border-border bg-card p-4 shadow-elevated", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: selected.id }),
          /* @__PURE__ */ jsx("h2", { className: "text-base font-bold", children: selected.name })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setSelected(null), className: "flex h-8 w-8 items-center justify-center rounded-xl bg-secondary", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsx(Detail, { label: "Location", value: selected.loc }),
        /* @__PURE__ */ jsx(Detail, { label: "Capture time", value: `${selected.time} IST` }),
        /* @__PURE__ */ jsx(Detail, { label: "Payload", value: "Face vector, liveness score, GPS, device attestation" }),
        /* @__PURE__ */ jsx(Detail, { label: "Encryption", value: "AES-256-GCM, SHA-512 signed" })
      ] }),
      selected.status === "failed" ? /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
        retry(selected.id);
        setSelected(null);
      }, className: "mt-4 w-full rounded-2xl bg-gradient-accent py-3 text-sm font-bold text-white shadow-glow", children: "Retry Upload" }) : /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setSelected(null), className: "mt-4 w-full rounded-2xl bg-secondary py-3 text-sm font-semibold", children: "Close" })
    ] }) })
  ] });
}
function MiniStat({
  label,
  value,
  tone
}) {
  const tones = {
    warning: "bg-warning/10 text-warning-foreground",
    success: "bg-success/10 text-success",
    destructive: "bg-destructive/10 text-destructive"
  };
  return /* @__PURE__ */ jsxs("div", { className: `rounded-xl border border-border p-3 ${tones[tone]}`, children: [
    /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: value }),
    /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider opacity-80", children: label })
  ] });
}
function StatusDot({
  status
}) {
  if (status === "synced") return /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-success/10 text-success", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }) });
  if (status === "failed") return /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-destructive/10 text-destructive", children: /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-warning/10 text-warning-foreground", children: /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }) });
}
function StatusBadge({
  status
}) {
  const map = {
    pending: "bg-warning/15 text-warning-foreground",
    synced: "bg-success/15 text-success",
    failed: "bg-destructive/15 text-destructive"
  };
  return /* @__PURE__ */ jsx("div", { className: `rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${map[status]}`, children: status });
}
function Detail({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-secondary/60 p-3", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-0.5 font-semibold", children: value })
  ] });
}
export {
  Queue as component
};
