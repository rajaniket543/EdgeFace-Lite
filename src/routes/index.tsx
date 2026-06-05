import { createFileRoute, Link } from "@tanstack/react-router";
import { ScanFace, ShieldCheck } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EdgeFace Lite — NHAI Datalake 3.0" },
      { name: "description", content: "Secure offline biometric authentication for highway field workers." },
    ],
  }),
  component: Splash,
});

function Splash() {
  return (
    <PhoneFrame>
      <div className="relative flex flex-1 flex-col items-center justify-between overflow-hidden bg-gradient-hero px-8 py-16 text-white">
        <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
        <div className="absolute inset-0 grid-mesh opacity-40" />

        <div className="relative z-10 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-white/70">
          <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
          GOVERNMENT OF INDIA · NHAI
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="relative flex h-44 w-44 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse-ring" />
            <div className="absolute inset-4 rounded-full border border-accent/40 animate-pulse-ring" style={{ animationDelay: "0.6s" }} />
            <div className="absolute inset-0 animate-orbit">
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-glow" />
            </div>
            <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl glass-dark">
              <ScanFace className="h-14 w-14 text-white" strokeWidth={1.5} />
              <div className="absolute inset-x-4 top-1/2 h-px bg-accent shadow-glow animate-scan-line" />
            </div>
          </div>

          <div className="text-center">
            <div className="text-[10px] font-semibold tracking-[0.35em] text-accent">EDGEFACE</div>
            <h1 className="mt-1 text-4xl font-bold tracking-tight">Lite</h1>
            <p className="mt-3 max-w-[260px] text-balance text-sm leading-relaxed text-white/70">
              Secure Offline Biometric Authentication for NHAI Datalake 3.0
            </p>
          </div>
        </div>

        <div className="relative z-10 flex w-full flex-col gap-3">
          <Link
            to="/login"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground shadow-glow transition-transform active:scale-[0.98]"
          >
            Get Started
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <div className="flex items-center justify-center gap-2 text-[11px] text-white/50">
            <ShieldCheck className="h-3.5 w-3.5" />
            AES-256 Encrypted · Device Verified · v3.2.1
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
