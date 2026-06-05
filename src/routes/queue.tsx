import { createFileRoute } from "@tanstack/react-router";
import {
  CloudUpload,
  RefreshCw,
  Database,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronRight,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/queue")({
  component: Queue,
});

type QueueStatus = "pending" | "synced" | "failed";
type QueueItem = {
  id: string;
  name: string;
  loc: string;
  time: string;
  status: QueueStatus;
  retry: number;
};

const initialItems: QueueItem[] = [
  {
    id: "RX-7821",
    name: "S. Pradeep Kumar",
    loc: "NH-44 · KM 287",
    time: "08:42",
    status: "pending",
    retry: 0,
  },
  {
    id: "RX-7820",
    name: "M. Lakshmi Reddy",
    loc: "NH-44 · KM 287",
    time: "08:39",
    status: "synced",
    retry: 0,
  },
  {
    id: "RX-7819",
    name: "V. Karthik Rao",
    loc: "NH-48 · KM 112",
    time: "08:35",
    status: "synced",
    retry: 0,
  },
  {
    id: "RX-7818",
    name: "R. Anjali Sharma",
    loc: "NH-44 · KM 287",
    time: "08:31",
    status: "failed",
    retry: 2,
  },
  {
    id: "RX-7817",
    name: "P. Vijay Anand",
    loc: "NH-44 · KM 286",
    time: "08:28",
    status: "pending",
    retry: 0,
  },
  {
    id: "RX-7816",
    name: "K. Divya Iyer",
    loc: "NH-44 · KM 286",
    time: "08:24",
    status: "synced",
    retry: 0,
  },
];

function Queue() {
  const [items, setItems] = useState(initialItems);
  const [syncing, setSyncing] = useState(false);
  const [selected, setSelected] = useState<QueueItem | null>(null);
  const counts = useMemo(
    () => ({
      pending: items.filter((it) => it.status === "pending").length,
      synced: items.filter((it) => it.status === "synced").length,
      failed: items.filter((it) => it.status === "failed").length,
    }),
    [items],
  );

  function syncNow() {
    setSyncing(true);
    window.setTimeout(() => {
      setItems((current) => current.map((it) => ({ ...it, status: "synced", retry: 0 })));
      setSyncing(false);
    }, 900);
  }

  function retry(id: string) {
    setItems((current) =>
      current.map((it) => (it.id === id ? { ...it, status: "pending", retry: it.retry + 1 } : it)),
    );
  }

  return (
    <AppShell>
      <div className="px-5 pt-4 pb-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[11px] font-semibold tracking-wider text-muted-foreground">
              DATALAKE QUEUE
            </div>
            <h1 className="text-xl font-bold tracking-tight">Offline Records</h1>
          </div>
          <button
            type="button"
            onClick={syncNow}
            disabled={syncing || counts.pending + counts.failed === 0}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-primary px-3 py-2 text-[11px] font-bold text-white shadow-primary disabled:opacity-60"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${syncing ? "animate-spin" : ""}`} />{" "}
            {syncing ? "Syncing" : "Sync Now"}
          </button>
        </div>

        {/* Storage */}
        <div className="mt-4 rounded-2xl border border-border bg-card p-4 shadow-card">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Database className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Encrypted Storage
              </div>
              <div className="text-sm font-bold">142 records · 28.4 MB / 500 MB</div>
            </div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[6%] rounded-full bg-gradient-primary" />
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>
              {syncing
                ? "Uploading encrypted records"
                : counts.pending + counts.failed === 0
                  ? "All records synced"
                  : "Next sync: when online"}
            </span>
            <span className="font-semibold text-success">{syncing ? "Active" : "Healthy"}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <MiniStat label="Pending" value={String(counts.pending)} tone="warning" />
          <MiniStat label="Synced" value={String(counts.synced)} tone="success" />
          <MiniStat label="Failed" value={String(counts.failed)} tone="destructive" />
        </div>

        {/* List */}
        <div className="mt-5 space-y-2">
          {items.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => setSelected(it)}
              className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-3 text-left shadow-card active:scale-[0.99]"
            >
              <StatusDot status={it.status} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="truncate text-sm font-semibold">{it.name}</div>
                  <div className="text-[10px] font-mono text-muted-foreground">{it.id}</div>
                </div>
                <div className="mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="truncate">{it.loc}</span>
                  <span>·</span>
                  <span>{it.time}</span>
                  {it.retry > 0 && <span className="text-destructive">· {it.retry} retries</span>}
                </div>
              </div>
              <StatusBadge status={it.status} />
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/30 px-3 pb-3">
          <div className="w-full rounded-3xl border border-border bg-card p-4 shadow-elevated">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {selected.id}
                </div>
                <h2 className="text-base font-bold">{selected.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <Detail label="Location" value={selected.loc} />
              <Detail label="Capture time" value={`${selected.time} IST`} />
              <Detail
                label="Payload"
                value="Face vector, liveness score, GPS, device attestation"
              />
              <Detail label="Encryption" value="AES-256-GCM, SHA-512 signed" />
            </div>
            {selected.status === "failed" ? (
              <button
                type="button"
                onClick={() => {
                  retry(selected.id);
                  setSelected(null);
                }}
                className="mt-4 w-full rounded-2xl bg-gradient-accent py-3 text-sm font-bold text-white shadow-glow"
              >
                Retry Upload
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-4 w-full rounded-2xl bg-secondary py-3 text-sm font-semibold"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </AppShell>
  );
}

function MiniStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "warning" | "success" | "destructive";
}) {
  const tones = {
    warning: "bg-warning/10 text-warning-foreground",
    success: "bg-success/10 text-success",
    destructive: "bg-destructive/10 text-destructive",
  } as const;
  return (
    <div className={`rounded-xl border border-border p-3 ${tones[tone]}`}>
      <div className="text-lg font-bold">{value}</div>
      <div className="text-[10px] font-semibold uppercase tracking-wider opacity-80">{label}</div>
    </div>
  );
}

function StatusDot({ status }: { status: "pending" | "synced" | "failed" }) {
  if (status === "synced")
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-success/10 text-success">
        <CheckCircle2 className="h-4 w-4" />
      </div>
    );
  if (status === "failed")
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
        <XCircle className="h-4 w-4" />
      </div>
    );
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-warning/10 text-warning-foreground">
      <Clock className="h-4 w-4" />
    </div>
  );
}

function StatusBadge({ status }: { status: "pending" | "synced" | "failed" }) {
  const map = {
    pending: "bg-warning/15 text-warning-foreground",
    synced: "bg-success/15 text-success",
    failed: "bg-destructive/15 text-destructive",
  } as const;
  return (
    <div
      className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${map[status]}`}
    >
      {status}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-secondary/60 p-3">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 font-semibold">{value}</div>
    </div>
  );
}
