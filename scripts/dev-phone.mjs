import { spawn } from "node:child_process";
import os from "node:os";
import qrcode from "qrcode-terminal";

const port = process.env.PORT ?? "8080";

function getLanAddress() {
  const interfaces = os.networkInterfaces();
  const addresses = Object.values(interfaces)
    .flat()
    .filter(Boolean)
    .filter((details) => details.family === "IPv4" && !details.internal)
    .map((details) => details.address);

  return (
    addresses.find((address) => address.startsWith("192.168.")) ??
    addresses.find((address) => address.startsWith("10.")) ??
    addresses.find((address) => /^172\.(1[6-9]|2\d|3[0-1])\./.test(address)) ??
    addresses[0] ??
    "localhost"
  );
}

const url = `http://${getLanAddress()}:${port}/`;

console.log(`\nScan this QR on your phone to open the app:\n`);
qrcode.generate(url, { small: true });
console.log(`\n${url}\n`);

const vite = spawn("vite", ["dev", "--host", "0.0.0.0", "--port", port], {
  stdio: "inherit",
  shell: false,
});

process.on("SIGINT", () => {
  vite.kill("SIGINT");
});

vite.on("exit", (code) => {
  process.exit(code ?? 0);
});
