import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sun,
  Globe,
  ShieldCheck,
  Cpu,
  HardDrive,
  Info,
  LifeBuoy,
  ChevronRight,
  LogOut,
  ArrowLeft,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/settings")({
  component: Settings,
});

function Settings() {
  const [theme, setTheme] = useState("System");
  const [language, setLanguage] = useState("English (India)");
  const [detail, setDetail] = useState<{
    title: string;
    body: string;
    actions?: React.ReactNode;
  } | null>(null);

  return (
    <AppShell>
      <div className="px-5 pt-4 pb-6">
        <div className="flex items-center gap-3">
          <Link
            to="/home"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <h1 className="text-lg font-bold tracking-tight">Settings</h1>
        </div>

        {/* Profile */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-card">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-white">
            AM
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold">Er. Arjun Mehta</div>
            <div className="text-[11px] text-muted-foreground">NHAI-IN-4827 · Field Engineer</div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>

        <Section title="Preferences">
          <Item
            icon={Sun}
            label="Theme"
            value={theme}
            onClick={() =>
              setDetail({
                title: "Theme",
                body: "Choose the interface appearance for field use.",
                actions: (
                  <ChoiceGroup
                    options={["System", "Light", "Dark"]}
                    value={theme}
                    onChange={setTheme}
                  />
                ),
              })
            }
          />
          <Item
            icon={Globe}
            label="Language"
            value={language}
            onClick={() =>
              setDetail({
                title: "Language",
                body: "This changes labels and prompts used during authentication.",
                actions: (
                  <ChoiceGroup
                    options={["English (India)", "Hindi", "Kannada"]}
                    value={language}
                    onChange={setLanguage}
                  />
                ),
              })
            }
          />
        </Section>

        <Section title="Privacy & Security">
          <Item icon={ShieldCheck} label="Privacy Controls" value="Strict" to="/security" />
          <Item
            icon={Cpu}
            label="AI Model Version"
            value="EdgeFace v3.2.1"
            onClick={() =>
              setDetail({
                title: "AI Model Version",
                body: "EdgeFace v3.2.1 is signed by the NHAI CA and verified locally before each session.",
              })
            }
          />
          <Item
            icon={HardDrive}
            label="Storage Usage"
            value="28.4 / 500 MB"
            onClick={() =>
              setDetail({
                title: "Storage Usage",
                body: "142 encrypted attendance records are stored locally. Pending records are uploaded from the Queue screen.",
              })
            }
          />
        </Section>

        <Section title="About">
          <Item
            icon={Info}
            label="About EdgeFace Lite"
            value="Build 2026.05.30"
            onClick={() =>
              setDetail({
                title: "About EdgeFace Lite",
                body: "Secure offline biometric authentication for NHAI highway field workers.",
              })
            }
          />
          <Item
            icon={LifeBuoy}
            label="Support & Helpdesk"
            value="1800-NHAI"
            onClick={() =>
              setDetail({
                title: "Support & Helpdesk",
                body: "Call 1800-NHAI or raise a field support ticket with your employee ID NHAI-IN-4827.",
              })
            }
          />
        </Section>

        <Link
          to="/"
          className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/5 py-3.5 text-sm font-semibold text-destructive"
        >
          <LogOut className="h-4 w-4" /> Sign Out
        </Link>

        <div className="mt-6 text-center text-[10px] text-muted-foreground">
          NHAI Datalake 3.0 · Ministry of Road Transport & Highways
          <div className="mt-1 font-mono">© 2026 · Government of India</div>
        </div>
      </div>
      {detail && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/30 px-3 pb-3">
          <div className="w-full rounded-3xl border border-border bg-card p-4 shadow-elevated">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold">{detail.title}</h2>
              <button
                type="button"
                onClick={() => setDetail(null)}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{detail.body}</p>
            {detail.actions && <div className="mt-4">{detail.actions}</div>}
            <button
              type="button"
              onClick={() => setDetail(null)}
              className="mt-4 w-full rounded-2xl bg-gradient-primary py-3 text-sm font-bold text-white shadow-primary"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </AppShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <div className="mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        {children}
      </div>
    </div>
  );
}

function Item({
  icon: Icon,
  label,
  value,
  to,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  to?: string;
  onClick?: () => void;
}) {
  const inner = (
    <div className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-secondary/50">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 text-sm font-semibold">{label}</div>
      <div className="text-[11px] font-medium text-muted-foreground">{value}</div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </div>
  );
  if (to) return <Link to={to}>{inner}</Link>;
  return (
    <button type="button" onClick={onClick} className="w-full text-left">
      {inner}
    </button>
  );
}

function ChoiceGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-xl border px-2 py-2 text-[11px] font-bold ${value === option ? "border-primary bg-primary text-white" : "border-border bg-secondary text-foreground"}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
