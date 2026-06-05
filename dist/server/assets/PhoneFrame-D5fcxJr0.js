import { jsx } from "react/jsx-runtime";
function PhoneFrame({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "min-h-[100dvh] w-full bg-background md:bg-gradient-hero md:grid-mesh", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex min-h-[100dvh] w-full max-w-none flex-col bg-background md:my-6 md:min-h-[calc(100vh-3rem)] md:max-w-[420px] md:overflow-hidden md:rounded-[2.5rem] md:border md:border-white/10 md:shadow-elevated", children }) });
}
export {
  PhoneFrame as P
};
