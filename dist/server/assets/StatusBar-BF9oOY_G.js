import { jsxs, jsx } from "react/jsx-runtime";
import { Signal, Wifi, BatteryFull } from "lucide-react";
function StatusBar({ dark = false }) {
  const color = dark ? "text-white" : "text-foreground";
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold ${color}`, children: [
    /* @__PURE__ */ jsx("span", { children: "9:41" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsx(Signal, { className: "h-3.5 w-3.5" }),
      /* @__PURE__ */ jsx(Wifi, { className: "h-3.5 w-3.5" }),
      /* @__PURE__ */ jsx(BatteryFull, { className: "h-4 w-4" })
    ] })
  ] });
}
export {
  StatusBar as S
};
