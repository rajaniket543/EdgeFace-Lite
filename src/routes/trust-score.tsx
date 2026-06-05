import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Sparkles, CheckCircle2, Cpu, Activity } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/trust-score")({
  component: TrustScore,
});

const SCORES = [
  { label: "Face Match", value: 97, color: "oklch(0.55 0.18 250)" },
  { label: "Liveness", value: 95, color: "oklch(0.7 0.21 45)" },
  { label: "Lighting Quality", value: 92, color: "oklch(0.62 0.17 155)" },
  { label: "Spoof Detection", value: 100, color: "oklch(0.62 0.17 155)" },
];

function TrustScore() {
  const final = 96;
  const r = 80;
  const c = 2 * Math.PI * r;
  return (
    <AppShell>
      <div className="relative flex min-h-full flex-col bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
        <div className="absolute inset-0 grid-mesh opacity-30" />

        <div className="relative z-10 flex items-center justify-between px-5 pt-4">
          <Link to="/success" className="flex h-9 w-9 items-center justify-center rounded-xl glass-dark">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="text-center">
            <div className="text-[10px] font-semibold tracking-[0.25em] text-white/60">EDGEFACE AI</div>
            <div className="text-sm font-bold">Trust Score Engine</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-glow">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>

        <div className="relative z-10 px-5 pb-6 pt-4">
          {/* Main gauge */}
          <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
            <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
              <defs>
                <linearGradient id="trustG" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.7 0.21 45)" />
                  <stop offset="60%" stopColor="oklch(0.55 0.18 250)" />
                  <stop offset="100%" stopColor="oklch(0.62 0.17 155)" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r={r} fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="10" />
              <circle
                cx="100" cy="100" r={r} fill="none" stroke="url(#trustG)" strokeWidth="10"
                strokeDasharray={`${(final / 100) * c} ${c}`} strokeLinecap="round"
              />
              {/* tick marks */}
              {Array.from({ length: 40 }).map((_, i) => {
                const a = (i / 40) * Math.PI * 2;
                const x1 = 100 + Math.cos(a) * 92;
                const y1 = 100 + Math.sin(a) * 92;
                const x2 = 100 + Math.cos(a) * 98;
                const y2 = 100 + Math.sin(a) * 98;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(1 0 0 / 0.2)" strokeWidth="1" />;
              })}
            </svg>
            <div className="absolute inset-12 flex flex-col items-center justify-center rounded-full glass-dark">
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/60">FINAL TRUST</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-6xl font-bold tracking-tight">{final}</span>
                <span className="text-lg text-white/60">/100</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 rounded-full bg-success/20 px-2.5 py-0.5 text-[10px] font-bold text-success">
                <CheckCircle2 className="h-3 w-3" /> AUTHENTICATED
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 animate-orbit">
              <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-glow" />
            </div>
          </div>

          {/* Score rows */}
          <div className="mt-6 space-y-2.5">
            {SCORES.map((s) => (
              <div key={s.label} className="rounded-2xl glass-dark p-3.5">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/70">{s.label}</div>
                  <div className="text-sm font-bold">
                    {s.value}{s.label === "Spoof Detection" ? "" : "%"}
                    {s.label === "Spoof Detection" && <span className="ml-1 text-success">· PASSED</span>}
                  </div>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full shadow-glow" style={{ width: `${s.value}%`, background: s.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* AI meta */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <MetaPill icon={Cpu} label="Model" value="v3.2.1" />
            <MetaPill icon={Activity} label="Latency" value="612ms" />
            <MetaPill icon={ShieldCheck} label="Channel" value="AES-256" />
          </div>

          <Link to="/home" className="mt-5 flex w-full items-center justify-center rounded-2xl bg-accent py-3.5 text-sm font-bold text-accent-foreground shadow-glow active:scale-[0.99]">
            Complete Authentication
          </Link>
        </div>
      </div>
    </AppShell>
  );
}

function MetaPill({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-2xl glass-dark p-3 text-center">
      <Icon className="mx-auto h-3.5 w-3.5 text-accent" />
      <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-white/60">{label}</div>
      <div className="text-xs font-bold">{value}</div>
    </div>
  );
}
