import { createFileRoute, Link } from "@tanstack/react-router";
import { X, Zap, ShieldCheck, Eye, ScanLine, CheckCircle2 } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";

export const Route = createFileRoute("/scan")({
  component: Scan,
});

function Scan() {
  return (
    <PhoneFrame>
      <div className="relative flex flex-1 flex-col bg-[oklch(0.14_0.04_258)] text-white">
        <StatusBar dark />

        {/* Top bar */}
        <div className="relative z-20 flex items-center justify-between px-5 py-3">
          <Link to="/home" className="flex h-9 w-9 items-center justify-center rounded-xl glass-dark">
            <X className="h-4 w-4" />
          </Link>
          <div className="text-center">
            <div className="text-[10px] font-semibold tracking-[0.25em] text-white/60">EDGEFACE AI</div>
            <div className="text-sm font-bold">Face Authentication</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-glow">
            <Zap className="h-4 w-4" />
          </div>
        </div>

        {/* Camera viewport */}
        <div className="relative mx-4 flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[oklch(0.22_0.06_258)] to-[oklch(0.16_0.04_258)]">
          <div className="absolute inset-0 grid-mesh opacity-50" />

          {/* Face silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <svg viewBox="0 0 200 240" className="h-72 w-60 opacity-90">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.7 0.21 45)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.18 250)" />
                  </linearGradient>
                </defs>
                <ellipse cx="100" cy="115" rx="78" ry="98" fill="none" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="4 6" />
                {/* mesh dots */}
                {Array.from({ length: 60 }).map((_, i) => {
                  const a = (i / 60) * Math.PI * 2;
                  const r = 60 + (i % 3) * 8;
                  const cx = 100 + Math.cos(a) * r * 0.85;
                  const cy = 115 + Math.sin(a) * r;
                  return <circle key={i} cx={cx} cy={cy} r="1.3" fill="oklch(0.7 0.21 45)" opacity="0.7" />;
                })}
                {/* Landmarks */}
                <circle cx="78" cy="100" r="3" fill="oklch(0.7 0.21 45)" />
                <circle cx="122" cy="100" r="3" fill="oklch(0.7 0.21 45)" />
                <path d="M 85 150 Q 100 162 115 150" stroke="oklch(0.7 0.21 45)" strokeWidth="1.5" fill="none" />
                <line x1="100" y1="110" x2="100" y2="135" stroke="oklch(0.55 0.18 250)" strokeWidth="1.2" />
              </svg>
              <div className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-accent/40" />
            </div>
          </div>

          {/* Corner brackets */}
          {[
            "top-4 left-4 border-l-2 border-t-2",
            "top-4 right-4 border-r-2 border-t-2",
            "bottom-4 left-4 border-l-2 border-b-2",
            "bottom-4 right-4 border-r-2 border-b-2",
          ].map((c, i) => (
            <div key={i} className={`absolute h-8 w-8 rounded-md border-accent ${c}`} />
          ))}

          {/* Scan line */}
          <div className="absolute inset-x-8 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-accent to-transparent shadow-glow animate-scan-line" />

          {/* Guidance pill */}
          <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full glass-dark px-3.5 py-1.5 text-[11px] font-semibold text-white">
            <span className="text-success">●</span> Face Centered · Hold Still
          </div>

          {/* Confidence */}
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl glass-dark p-3">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider">
              <span className="text-white/60">Match Confidence</span>
              <span className="text-accent">97.4%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[97%] rounded-full bg-gradient-accent shadow-glow" />
            </div>
          </div>
        </div>

        {/* AI status panel */}
        <div className="px-4 pb-3 pt-4">
          <div className="rounded-2xl glass-dark p-3">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-semibold tracking-[0.2em] text-white/60">LIVE AI PIPELINE</div>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-success">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> RUNNING
              </div>
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              <AIRow icon={Eye} label="Face Detected" status="ok" />
              <AIRow icon={ScanLine} label="Recognition" status="ok" />
              <AIRow icon={CheckCircle2} label="Liveness" status="run" />
              <AIRow icon={ShieldCheck} label="Anti-Spoof" status="ok" />
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-4 pb-5">
          <Link
            to="/liveness"
            className="flex-1 rounded-2xl bg-white/10 py-3.5 text-center text-sm font-semibold backdrop-blur active:scale-[0.99]"
          >
            Liveness Check
          </Link>
          <Link
            to="/success"
            className="flex-1 rounded-2xl bg-gradient-accent py-3.5 text-center text-sm font-bold text-white shadow-glow active:scale-[0.99]"
          >
            Authenticate
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}

function AIRow({ icon: Icon, label, status }: { icon: any; label: string; status: "ok" | "run" }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/5 px-2.5 py-2">
      <div className={`flex h-6 w-6 items-center justify-center rounded-md ${status === "ok" ? "bg-success/20 text-success" : "bg-accent/20 text-accent"}`}>
        <Icon className="h-3 w-3" />
      </div>
      <div className="flex-1 text-[11px] font-medium">{label}</div>
      {status === "ok" ? (
        <CheckCircle2 className="h-3.5 w-3.5 text-success" />
      ) : (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
      )}
    </div>
  );
}
