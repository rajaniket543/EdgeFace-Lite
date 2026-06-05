import { type ReactNode } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { BottomNav } from "./BottomNav";
import { StatusBar } from "./StatusBar";

export function AppShell({ children, hideNav = false, darkStatus = false }: { children: ReactNode; hideNav?: boolean; darkStatus?: boolean }) {
  return (
    <PhoneFrame>
      <StatusBar dark={darkStatus} />
      <main className="flex-1 overflow-y-auto">{children}</main>
      {!hideNav && <BottomNav />}
    </PhoneFrame>
  );
}
