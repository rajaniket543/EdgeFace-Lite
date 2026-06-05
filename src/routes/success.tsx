import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin, Clock, Smartphone, CloudUpload, ShieldCheck, Sparkles } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/success")({
  component: Success,
});

function Success() {
  return (
    <AppShell hideNav>
      <div className="flex min-h-full flex-col px-5 pt-2 pb-8">
        {/* Hero */}
        <div className="relative mt-2 overflow-hidden rounded-3xl bg-gradient-success p-6 text-white shadow-elevated">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col items-center text-center">
            <div className="relative flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-white/40" />
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-success shadow-elevated">
                <CheckCircle2 className="h-12 w-12" strokeWidth={2.5} />
              </div>
            </div>
            <div className="mt-4 text-[11px] font-semibold tracking-[0.25em] text-white/80">AUTHENTICATION SUCCESS</div>
            <h1 className="mt-1 text-2xl font-bold">Welcome, Er. Arjun</h1>
            <p className="mt-1 text-sm text-white/90">Attendance recorded for NH-44 sector</p>

            <div className="mt-4 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-[11px] font-bold tracking-wider">CONFIDENCE 97.4%</span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mt-4 rounded-3xl border border-border bg-card p-4 shadow-card">
          <Row icon={Clock} label="Timestamp" value="30 May 2026 · 08:42:17 IST" />
          <Divider />
          <Row icon={MapPin} label="GPS Location" value="28.4595° N, 77.0266° E · ±3m" />
          <Divider />
          <Row icon={Smartphone} label="Device ID" value="NHAI-EDG-7742-A · TPM verified" />
          <Divider />
          <Row icon={ShieldCheck} label="Encryption" value="AES-256-GCM · SHA-512 signed" />
        </div>

        {/* Sync */}
        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-warning/30 bg-warning/5 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-warning/15 text-warning-foreground">
            <CloudUpload className="h-4.5 w-4.5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold">Queued for sync</div>
            <div className="text-[11px] text-muted-foreground">Will upload to NHAI Datalake when online</div>
          </div>
          <div className="rounded-full bg-warning/20 px-2 py-0.5 text-[10px] font-bold text-warning-foreground">12</div>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
          <Link to="/trust-score" className="rounded-2xl border border-border bg-surface-elevated py-3.5 text-center text-sm font-semibold active:scale-[0.99]">
            View Trust Score
          </Link>
          <Link to="/home" className="rounded-2xl bg-gradient-primary py-3.5 text-center text-sm font-bold text-white shadow-primary active:scale-[0.99]">
            Done
          </Link>
        </div>
      </div>
    </AppShell>
  );
}

function Row({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="my-1 h-px bg-border" />;
}
