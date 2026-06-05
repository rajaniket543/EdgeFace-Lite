import { useEffect } from "react";

export function RegisterServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const isSecure = window.location.protocol === "https:";

    if (!isLocalhost && !isSecure) return;

    navigator.serviceWorker.register("/sw.js").catch(() => {
      // The app still works if service worker registration is unavailable.
    });
  }, []);

  return null;
}
