import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, ShieldAlert, Clock, Users, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/analytics")({
  component: Analytics,
});

function Analytics() {
  const [period, setPeriod] = useState<"7D" | "30D" | "90D">("7D");
  const data = {
    "7D": {
      bars: [62, 78, 55, 88, 92, 70, 95],
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      total: "18,492",
      trend: "8.2%",
      success: "99.7%",
      spoofs: "148",
      recognition: "612 ms",
      officers: "2,847",
    },
    "30D": {
      bars: [72, 66, 81, 75, 88, 91, 86],
      labels: ["W1", "W2", "W3", "W4", "Now", "", ""],
      total: "74,318",
      trend: "11.4%",
      success: "99.5%",
      spoofs: "531",
      recognition: "641 ms",
      officers: "3,102",
    },
    "90D": {
      bars: [58, 64, 70, 77, 82, 89, 93],
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Now"],
      total: "219,870",
      trend: "16.9%",
      success: "99.2%",
      spoofs: "1,604",
      recognition: "688 ms",
      officers: "3,418",
    },
  }[period];

  return (
    <AppShell>
      <div className="px-5 pt-4 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold tracking-wider text-muted-foreground">
              COMMAND CENTER
            </div>
            <h1 className="text-xl font-bold tracking-tight">Analytics</h1>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1 text-[11px] font-semibold">
            {(["7D", "30D", "90D"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod(p)}
                className={`rounded-lg px-2.5 py-1 ${period === p ? "bg-primary text-white" : "text-muted-foreground"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <KPI
            icon={TrendingUp}
            label="Success Rate"
            value={data.success}
            delta="+0.4%"
            tone="success"
          />
          <KPI
            icon={ShieldAlert}
            label="Spoofs Blocked"
            value={data.spoofs}
            delta="+12"
            tone="destructive"
          />
          <KPI
            icon={Clock}
            label="Avg Recognition"
            value={data.recognition}
            delta="-48ms"
            tone="primary"
          />
          <KPI
            icon={Users}
            label="Active Officers"
            value={data.officers}
            delta="+143"
            tone="accent"
          />
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-3xl border border-border bg-card p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold">Daily Authentications</div>
              <div className="text-[11px] text-muted-foreground">
                Window: {period} · NH-44 sector
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">{data.total}</div>
              <div className="text-[10px] font-semibold text-success">▲ {data.trend}</div>
            </div>
          </div>
          <div className="mt-4 flex h-36 items-end justify-between gap-2">
            {data.bars.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="relative flex h-full w-full items-end">
                  <div
                    className={`w-full rounded-t-md ${i === 6 ? "bg-gradient-accent shadow-glow" : "bg-gradient-primary"}`}
                    style={{ height: `${h}%` }}
                  />
                </div>
                <div className="text-[10px] font-semibold text-muted-foreground">
                  {data.labels[i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pie / Sync */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Sync Status
            </div>
            <div className="mt-3 flex items-center justify-center">
              <Donut />
            </div>
            <div className="mt-3 space-y-1.5 text-[11px]">
              <Legend color="bg-success" label="Synced" value="89%" />
              <Legend color="bg-warning" label="Pending" value="9%" />
              <Legend color="bg-destructive" label="Failed" value="2%" />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Threat Map
            </div>
            <div className="mt-2 text-2xl font-bold">148</div>
            <div className="text-[11px] text-muted-foreground">Spoof attempts blocked</div>
            <div className="mt-3 space-y-1.5">
              <ThreatRow label="Photo replay" v={62} />
              <ThreatRow label="Mask spoof" v={48} />
              <ThreatRow label="Video replay" v={38} />
            </div>
          </div>
        </div>

        <Link
          to="/security"
          className="mt-4 flex items-center justify-between rounded-2xl border border-border bg-gradient-primary p-4 text-white shadow-primary"
        >
          <div>
            <div className="text-sm font-bold">Open Security Center</div>
            <div className="text-[11px] text-white/80">
              Encryption · device trust · model integrity
            </div>
          </div>
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </AppShell>
  );
}

function KPI({
  icon: Icon,
  label,
  value,
  delta,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  delta: string;
  tone: "success" | "destructive" | "primary" | "accent";
}) {
  const tones = {
    success: "bg-success/10 text-success",
    destructive: "bg-destructive/10 text-destructive",
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
  } as const;
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
      <div className="flex items-center justify-between">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${tones[tone]}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="text-[10px] font-bold text-success">{delta}</div>
      </div>
      <div className="mt-3 text-lg font-bold tracking-tight">{value}</div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function Donut() {
  // 89/9/2
  const r = 32,
    c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 80 80" className="h-24 w-24 -rotate-90">
      <circle cx="40" cy="40" r={r} fill="none" stroke="oklch(0.92 0.008 250)" strokeWidth="10" />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke="oklch(0.62 0.17 155)"
        strokeWidth="10"
        strokeDasharray={`${c * 0.89} ${c}`}
      />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke="oklch(0.78 0.16 80)"
        strokeWidth="10"
        strokeDasharray={`${c * 0.09} ${c}`}
        strokeDashoffset={`${-c * 0.89}`}
      />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke="oklch(0.58 0.24 27)"
        strokeWidth="10"
        strokeDasharray={`${c * 0.02} ${c}`}
        strokeDashoffset={`${-c * 0.98}`}
      />
    </svg>
  );
}

function Legend({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <span className="flex-1 text-muted-foreground">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}

function ThreatRow({ label, v }: { label: string; v: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[10px] font-semibold">
        <span className="text-muted-foreground">{label}</span>
        <span>{v}</span>
      </div>
      <div className="mt-1 h-1 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-gradient-accent" style={{ width: `${v}%` }} />
      </div>
    </div>
  );
}
