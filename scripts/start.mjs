import fs from "node:fs";
import { spawn } from "node:child_process";

const candidates = [
  "build/server.js",
  "build/server/index.js",
  "build/index.js",
  "server.js",
  "dist/server.js",
];

const found = candidates.find((p) => fs.existsSync(p));

if (!found) {
  console.error("❌ No server build file found. Checked:", candidates);
  console.error("📁 build dir exists?", fs.existsSync("build"));
  if (fs.existsSync("build")) {
    console.error("📄 build contents:", fs.readdirSync("build"));
  }
  process.exit(1);
}

console.log("✅ Starting:", found);

// Prefer remix-serve if present, otherwise node
const useRemixServe = fs.existsSync("node_modules/.bin/remix-serve");

if (useRemixServe) {
  const p = spawn("npx", ["remix-serve", found], { stdio: "inherit" });
  p.on("exit", (code) => process.exit(code ?? 0));
} else {
  const p = spawn("node", [found], { stdio: "inherit" });
  p.on("exit", (code) => process.exit(code ?? 0));
}
