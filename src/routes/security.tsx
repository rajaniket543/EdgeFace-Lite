import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, FileCheck2, Cpu, Eye, AlertTriangle, ChevronRight, ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/security")({
  component: Security,
});

function Security() {
  return (
    <AppShell>
      <div className="px-5 pt-4 pb-6">
        <div className="flex items-center gap-3">
          <Link to="/home" className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <div className="text-[11px] font-semibold tracking-wider text-muted-foreground">SECURITY CENTER</div>
            <h1 className="text-lg font-bold tracking-tight">Device & Model Trust</h1>
          </div>
        </div>

        {/* Hero status */}
        <div className="mt-4 overflow-hidden rounded-3xl bg-gradient-hero p-5 text-white shadow-elevated">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-white/70">
              <ShieldCheck className="h-3.5 w-3.5 text-success" /> SECURITY STATUS
            </div>
            <div className="rounded-full bg-success/20 px-2.5 py-0.5 text-[10px] font-bold text-success">SECURE</div>
          </div>
          <div className="mt-3 flex items-end gap-4">
            <div>
              <div className="text-5xl font-bold tracking-tight">A+</div>
              <div className="text-[11px] text-white/70">Trust Grade</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-white/80">All systems verified · last check 2 min ago</div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[98%] rounded-full bg-gradient-accent shadow-glow" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <SecRow icon={Lock} title="AES-256 Encryption" sub="GCM mode · TPM-backed key · v3.2" status="active" />
          <SecRow icon={FileCheck2} title="Model Integrity" sub="SHA-512 verified · signed by NHAI CA" status="active" />
          <SecRow icon={Cpu} title="Device Trust Score" sub="98 / 100 · TPM 2.0 attested" status="active" />
          <SecRow icon={Eye} title="Threat Detection" sub="Live · 148 spoofs blocked today" status="active" />
          <SecRow icon={ShieldCheck} title="Last Security Audit" sub="30 May 2026 · 06:00 IST · Passed" status="active" />
          <SecRow icon={AlertTriangle} title="Outstanding Alerts" sub="No critical issues detected" status="ok" />
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-card p-4 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold">Compliance</div>
              <div className="text-[11px] text-muted-foreground">CERT-In · ISO 27001 · MeitY</div>
            </div>
            <div className="flex gap-1">
              <Pill>CERT-In</Pill>
              <Pill>ISO</Pill>
              <Pill>MeitY</Pill>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function SecRow({ icon: Icon, title, sub, status }: { icon: any; title: string; sub: string; status: "active" | "ok" }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-card">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold">{title}</div>
        <div className="truncate text-[11px] text-muted-foreground">{sub}</div>
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
        {status === "active" ? "ACTIVE" : "OK"}
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md bg-secondary px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-secondary-foreground">{children}</span>;
}
