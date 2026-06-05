import { jsx, jsxs } from "react/jsx-runtime";
import { P as PhoneFrame } from "./PhoneFrame-D5fcxJr0.js";
import { useLocation, Link } from "@tanstack/react-router";
import { Home, ScanFace, BarChart3, History, Settings } from "lucide-react";
import { S as StatusBar } from "./StatusBar-BF9oOY_G.js";
const items = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/scan", label: "Scan", icon: ScanFace },
  { to: "/analytics", label: "Stats", icon: BarChart3 },
  { to: "/queue", label: "Queue", icon: History },
  { to: "/settings", label: "Settings", icon: Settings }
];
function BottomNav() {
  const location = useLocation();
  return /* @__PURE__ */ jsx("nav", { className: "sticky bottom-0 z-30 border-t border-border bg-surface-elevated/95 backdrop-blur-xl", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-around px-2 pt-2 pb-3", children: items.map(({ to, label, icon: Icon }) => {
    const active = location.pathname === to;
    return /* @__PURE__ */ jsxs(
      Link,
      {
        to,
        className: "group flex min-w-[56px] flex-col items-center gap-1 rounded-xl px-2 py-1.5 transition-colors",
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `flex h-9 w-12 items-center justify-center rounded-xl transition-all ${active ? "bg-primary text-primary-foreground shadow-primary" : "text-muted-foreground"}`,
              children: /* @__PURE__ */ jsx(Icon, { className: "h-[18px] w-[18px]", strokeWidth: active ? 2.5 : 2 })
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `text-[10px] font-medium tracking-wide ${active ? "text-primary" : "text-muted-foreground"}`,
              children: label
            }
          )
        ]
      },
      to
    );
  }) }) });
}
function AppShell({ children, hideNav = false, darkStatus = false }) {
  return /* @__PURE__ */ jsxs(PhoneFrame, { children: [
    /* @__PURE__ */ jsx(StatusBar, { dark: darkStatus }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto", children }),
    !hideNav && /* @__PURE__ */ jsx(BottomNav, {})
  ] });
}
export {
  AppShell as A
};
