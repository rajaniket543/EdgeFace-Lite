import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ScanFace,
  MapPin,
  WifiOff,
  Activity,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  ChevronRight,
  Bell,
  CloudUpload,
  TrendingUp,
  X,
  Clock,
  Navigation,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  const [panel, setPanel] = useState<"notifications" | "attendance" | "status" | null>(null);

  return (
    <AppShell>
      <div className="px-5 pt-4 pb-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-medium text-muted-foreground">Good morning</div>
            <div className="text-lg font-bold tracking-tight">Er. Arjun Mehta</div>
          </div>
          <button
            type="button"
            onClick={() => setPanel("notifications")}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated active:scale-[0.98]"
            aria-label="Open notifications"
          >
            <Bell className="h-4.5 w-4.5 text-foreground" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
          </button>
        </div>

        {/* Welcome card */}
        <div className="relative mt-5 overflow-hidden rounded-3xl bg-gradient-hero p-5 text-white shadow-elevated">
          <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />

          <div className="relative flex items-start gap-4">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur ring-2 ring-accent/40">
              <span className="text-xl font-bold">AM</span>
              <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-success ring-2 ring-[oklch(0.32_0.13_255)]">
                <CheckCircle2 className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-white/70">
                EMPLOYEE ID · NHAI-IN-4827
              </div>
              <div className="mt-0.5 truncate text-base font-bold">Highway Field Engineer</div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
                <MapPin className="h-3 w-3" /> NH-44, Sector 17 · Gurugram
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setPanel("attendance")}
            className="relative mt-5 flex w-full items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-left backdrop-blur active:scale-[0.99]"
          >
            <div>
              <div className="text-[10px] font-semibold tracking-wider text-white/60">
                TODAY'S ATTENDANCE
              </div>
              <div className="mt-0.5 flex items-center gap-2 text-sm font-bold">
                <CheckCircle2 className="h-4 w-4 text-success" /> Checked-in · 08:42 IST
              </div>
            </div>
            <div className="rounded-full bg-success/20 px-2.5 py-1 text-[10px] font-bold tracking-wider text-success">
              VERIFIED
            </div>
          </button>
        </div>

        {/* Scan CTA */}
        <Link
          to="/scan"
          className="mt-4 flex items-center gap-4 rounded-3xl border border-accent/20 bg-gradient-accent p-4 text-white shadow-glow active:scale-[0.99]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
            <ScanFace className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold">Run Face Authentication</div>
            <div className="text-[11px] text-white/80">
              AI liveness · spoof detection · &lt; 800ms
            </div>
          </div>
          <ChevronRight className="h-5 w-5" />
        </Link>

        {/* Quick stats */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <StatCard
            icon={CloudUpload}
            tint="primary"
            label="Offline Records"
            value="12"
            sub="Pending sync"
            to="/queue"
          />
          <StatCard
            icon={Activity}
            tint="success"
            label="Sync Status"
            value="98.4%"
            sub="Last: 2m ago"
            to="/queue"
          />
          <StatCard
            icon={TrendingUp}
            tint="accent"
            label="Auth Success"
            value="99.7%"
            sub="Past 30 days"
            to="/analytics"
          />
          <StatCard
            icon={Cpu}
            tint="primary"
            label="Device Health"
            value="Optimal"
            sub="Model v3.2.1"
            to="/security"
          />
        </div>

        {/* Status strip */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1">
          <button type="button" onClick={() => setPanel("status")}>
            <Chip icon={WifiOff} text="Offline Mode" tone="warning" />
          </button>
          <button type="button" onClick={() => setPanel("status")}>
            <Chip icon={MapPin} text="GPS Locked" tone="success" />
          </button>
          <Link to="/security">
            <Chip icon={ShieldCheck} text="AES-256" tone="primary" />
          </Link>
        </div>

        {/* Activity */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold tracking-tight">Recent Activity</h3>
            <Link to="/queue" className="text-[11px] font-semibold text-primary">
              View all
            </Link>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { t: "Face Authentication", s: "Verified · NH-44 KM 287", time: "8:42 AM", ok: true },
              { t: "Sync to Datalake", s: "12 records transmitted", time: "8:30 AM", ok: true },
              { t: "Liveness Challenge", s: "Blink + Head turn", time: "8:42 AM", ok: true },
            ].map((it, i) => (
              <Link
                key={i}
                to={i === 0 ? "/trust-score" : "/queue"}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-card active:scale-[0.99]"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${it.ok ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold">{it.t}</div>
                  <div className="truncate text-[11px] text-muted-foreground">{it.s}</div>
                </div>
                <div className="text-[10px] font-medium text-muted-foreground">{it.time}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {panel && <HomePanel panel={panel} onClose={() => setPanel(null)} />}
    </AppShell>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  tint,
  to,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  sub: string;
  tint: "primary" | "success" | "accent";
  to: string;
}) {
  const tints = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    accent: "bg-accent/10 text-accent",
  } as const;
  return (
    <Link
      to={to}
      className="rounded-2xl border border-border bg-card p-4 shadow-card active:scale-[0.99]"
    >
      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${tints[tint]}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 text-xl font-bold tracking-tight">{value}</div>
      <div className="text-[11px] text-muted-foreground">{sub}</div>
    </Link>
  );
}

function Chip({
  icon: Icon,
  text,
  tone,
}: {
  icon: LucideIcon;
  text: string;
  tone: "warning" | "success" | "primary";
}) {
  const tones = {
    warning: "border-warning/30 bg-warning/10 text-warning-foreground",
    success: "border-success/30 bg-success/10 text-success",
    primary: "border-primary/20 bg-primary/5 text-primary",
  } as const;
  return (
    <div
      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold ${tones[tone]}`}
    >
      <Icon className="h-3 w-3" /> {text}
    </div>
  );
}

function HomePanel({
  panel,
  onClose,
}: {
  panel: "notifications" | "attendance" | "status";
  onClose: () => void;
}) {
  const content = {
    notifications: {
      title: "Notifications",
      rows: [
        ["Sync available", "12 offline records can upload when network returns."],
        ["Model check passed", "EdgeFace v3.2.1 signature verified 2 min ago."],
        ["Shift reminder", "NH-44 sector patrol checkpoint due at 11:30 IST."],
      ],
    },
    attendance: {
      title: "Attendance Details",
      rows: [
        ["Check-in", "08:42:17 IST · Confidence 97.4%"],
        ["Location", "NH-44, Sector 17 · Gurugram · GPS ±3m"],
        ["Verification", "Face match, liveness, anti-spoof and device trust passed."],
      ],
    },
    status: {
      title: "Live Device Status",
      rows: [
        ["Network", "Offline capture enabled. Queue is encrypted locally."],
        ["GPS", "Locked at 28.4595 N, 77.0266 E with ±3m accuracy."],
        ["Storage", "28.4 MB used of 500 MB secure device allocation."],
      ],
    },
  }[panel];

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/30 px-3 pb-3">
      <div className="w-full rounded-3xl border border-border bg-card p-4 shadow-elevated">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold">{content.title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 space-y-2">
          {content.rows.map(([title, body]) => (
            <div key={title} className="flex gap-3 rounded-2xl bg-secondary/60 p-3">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {panel === "attendance" ? (
                  <Clock className="h-4 w-4" />
                ) : panel === "status" ? (
                  <Navigation className="h-4 w-4" />
                ) : (
                  <Bell className="h-4 w-4" />
                )}
              </div>
              <div>
                <div className="text-sm font-semibold">{title}</div>
                <div className="text-[11px] text-muted-foreground">{body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
