import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "gov.nhai.edgefacelite",
  appName: "EdgeFace Lite",
  webDir: "dist/client",
  ios: {
    contentInset: "automatic",
  },
};

export default config;
