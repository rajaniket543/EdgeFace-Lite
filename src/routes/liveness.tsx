import { createFileRoute, Link } from "@tanstack/react-router";
import { X, Eye, RotateCw, Smile, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";

export const Route = createFileRoute("/liveness")({
  component: Liveness,
});

function Liveness() {
  const [step, setStep] = useState(0);
  const challenges = [
    { label: "Please Blink Twice", icon: Eye, stepLabel: "Blink Detection" },
    { label: "Turn Head Left", icon: RotateCw, stepLabel: "Turn Head Left" },
    { label: "Smile Confirmation", icon: Smile, stepLabel: "Smile Confirmation" },
  ];
  const progress = Math.round((Math.min(step + 1, challenges.length) / challenges.length) * 100);
  const current = challenges[Math.min(step, challenges.length - 1)];
  const CurrentIcon = current.icon;
  const complete = step >= challenges.length;

  return (
    <PhoneFrame>
      <div className="relative flex flex-1 flex-col bg-[oklch(0.14_0.04_258)] text-white">
        <StatusBar dark />
        <div className="flex items-center justify-between px-5 py-3">
          <Link
            to="/scan"
            className="flex h-9 w-9 items-center justify-center rounded-xl glass-dark"
          >
            <X className="h-4 w-4" />
          </Link>
          <div className="text-center">
            <div className="text-[10px] font-semibold tracking-[0.25em] text-white/60">
              STEP 2 / 3
            </div>
            <div className="text-sm font-bold">Dynamic Liveness</div>
          </div>
          <div className="h-9 w-9" />
        </div>

        <div className="flex flex-1 flex-col items-center px-5 pb-5">
          {/* Challenge card */}
          <div className="w-full rounded-3xl bg-gradient-accent p-5 text-white shadow-glow">
            <div className="text-[10px] font-semibold tracking-[0.2em] text-white/80">
              CURRENT CHALLENGE
            </div>
            <div className="mt-1 flex items-center justify-between">
              <div className="text-2xl font-bold">
                {complete ? "Liveness Complete" : current.label}
              </div>
              {complete ? (
                <CheckCircle2 className="h-7 w-7" />
              ) : (
                <CurrentIcon className="h-7 w-7" />
              )}
            </div>
            <div className="mt-2 text-[11px] text-white/80">
              Random challenge prevents replay attacks
            </div>
          </div>

          {/* Gauge */}
          <div className="relative mt-6 flex h-56 w-56 items-center justify-center">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke="oklch(1 0 0 / 0.08)"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke="url(#gg)"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${(progress / 100) * 326.7} 326.7`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gg" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.7 0.21 45)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.18 250)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-6 rounded-full border border-white/10 grid-mesh" />
            <div className="absolute inset-10 flex flex-col items-center justify-center rounded-full glass-dark">
              <div className="text-[10px] font-semibold tracking-wider text-white/60">
                TRUST SCORE
              </div>
              <div className="text-4xl font-bold tracking-tight">
                {complete ? "96" : String(88 + step * 4)}
              </div>
              <div className="text-[10px] text-success">
                / 100 {complete ? "VERIFIED" : "ANALYZING"}
              </div>
            </div>
            <div className="absolute -top-2 right-2 rounded-full glass-dark px-2.5 py-1 text-[10px] font-bold text-accent">
              {progress}% complete
            </div>
          </div>

          {/* Steps */}
          <div className="mt-6 w-full space-y-2">
            {challenges.map((challenge, index) => (
              <Step
                key={challenge.stepLabel}
                icon={challenge.icon}
                label={challenge.stepLabel}
                done={index < step || complete}
                active={!complete && index === step}
              />
            ))}
          </div>

          {complete ? (
            <Link
              to="/success"
              className="mt-auto w-full rounded-2xl bg-gradient-accent py-3.5 text-center text-sm font-bold text-white shadow-glow active:scale-[0.99]"
            >
              Continue to Trust Score
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setStep((value) => value + 1)}
              className="mt-auto w-full rounded-2xl bg-white/10 py-3.5 text-center text-sm font-semibold backdrop-blur active:scale-[0.99]"
            >
              Mark Challenge Complete
            </button>
          )}
        </div>
      </div>
    </PhoneFrame>
  );
}

function Step({
  icon: Icon,
  label,
  done,
  active,
}: {
  icon: LucideIcon;
  label: string;
  done?: boolean;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 ${
        done
          ? "border-success/30 bg-success/10"
          : active
            ? "border-accent/40 bg-accent/10"
            : "border-white/10 bg-white/5"
      }`}
    >
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          done
            ? "bg-success text-white"
            : active
              ? "bg-accent text-white"
              : "bg-white/10 text-white/60"
        }`}
      >
        {done ? <CheckCircle2 className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
      </div>
      <div className="flex-1 text-sm font-semibold">{label}</div>
      {active && <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />}
    </div>
  );
}
