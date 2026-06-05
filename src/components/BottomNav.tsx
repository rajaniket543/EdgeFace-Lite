import { Link, useLocation } from "@tanstack/react-router";
import { Home, ScanFace, History, Settings, BarChart3 } from "lucide-react";

const items = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/scan", label: "Scan", icon: ScanFace },
  { to: "/analytics", label: "Stats", icon: BarChart3 },
  { to: "/queue", label: "Queue", icon: History },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function BottomNav() {
  const location = useLocation();
  return (
    <nav className="sticky bottom-0 z-30 border-t border-border bg-surface-elevated/95 backdrop-blur-xl">
      <div className="flex items-center justify-around px-2 pt-2 pb-3">
        {items.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className="group flex min-w-[56px] flex-col items-center gap-1 rounded-xl px-2 py-1.5 transition-colors"
            >
              <div
                className={`flex h-9 w-12 items-center justify-center rounded-xl transition-all ${
                  active ? "bg-primary text-primary-foreground shadow-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.5 : 2} />
              </div>
              <span
                className={`text-[10px] font-medium tracking-wide ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
