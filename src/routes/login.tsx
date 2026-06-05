import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Fingerprint, WifiOff, Lock, User } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <AppShell hideNav>
      <div className="flex min-h-full flex-col px-6 pt-6 pb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
              <ShieldCheck className="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">NHAI</div>
              <div className="text-sm font-bold leading-tight">EdgeFace Lite</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-2.5 py-1 text-[10px] font-semibold text-warning-foreground">
            <WifiOff className="h-3 w-3" /> OFFLINE
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Sign in to your NHAI field operations account
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-surface-elevated p-5 shadow-card">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Employee ID
          </label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-input bg-background px-3.5 py-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <input
              defaultValue="NHAI-IN-4827"
              className="flex-1 bg-transparent text-sm font-medium outline-none"
            />
            <ShieldCheck className="h-4 w-4 text-success" />
          </div>

          <label className="mt-4 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Password
          </label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-input bg-background px-3.5 py-3">
            <Lock className="h-4 w-4 text-muted-foreground" />
            <input
              type="password"
              defaultValue="••••••••••"
              className="flex-1 bg-transparent text-sm font-medium outline-none tracking-widest"
            />
          </div>

          <Link
            to="/home"
            className="mt-5 flex w-full items-center justify-center rounded-xl bg-gradient-primary py-3.5 text-sm font-semibold text-white shadow-primary active:scale-[0.99]"
          >
            Sign In Securely
          </Link>

          <div className="my-4 flex items-center gap-3 text-[10px] font-semibold tracking-wider text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> OR <div className="h-px flex-1 bg-border" />
          </div>

          <Link
            to="/scan"
            className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-accent/20 bg-accent/5 py-3.5 text-sm font-semibold text-accent active:scale-[0.99]"
          >
            <Fingerprint className="h-5 w-5" /> Biometric Sign-In
          </Link>
        </div>

        <div className="mt-auto pt-8">
          <div className="flex items-center justify-center gap-2 rounded-2xl border border-success/20 bg-success/5 px-4 py-3 text-xs">
            <ShieldCheck className="h-4 w-4 text-success" />
            <span className="font-medium text-foreground">Secure Encrypted Device</span>
            <span className="text-muted-foreground">· TPM 2.0</span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
