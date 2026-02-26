import fs from "node:fs";

const needRoot = !fs.existsSync("app/root.tsx");
if (!needRoot) {
  console.log("✅ app/root.tsx exists, skip unpack");
  process.exit(0);
}

if (!fs.existsSync("growina-final-platform.zip")) {
  console.error("❌ growina-final-platform.zip not found in repo root");
  process.exit(1);
}

console.log("📦 Unpacking growina-final-platform.zip ...");
import { execSync } from "node:child_process";
execSync("unzip -o growina-final-platform.zip -d .", { stdio: "inherit" });

console.log("✅ Unpacked. Contents now in repo root.");
