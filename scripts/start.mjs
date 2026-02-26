import { execSync } from "node:child_process";

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

try {
  console.log("🔧 Prisma generate (startup)...");
  run("npx prisma generate");
} catch (e) {
  console.warn("⚠️ Prisma generate failed (startup). Continuing anyway...");
}

console.log("✅ Starting: build/server.js");
run("node ./node_modules/@remix-run/serve/dist/cli.js ./build/server.js");