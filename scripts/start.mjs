import { execSync } from "node:child_process";
import { webcrypto } from "crypto";

// Polyfill Web Crypto API for Shopify OAuth
globalThis.crypto ??= webcrypto;

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

try {
  console.log("🔧 Prisma generate (startup)...");
  run("npx prisma generate");
  // apply schema changes before the server starts; use migrate in prod
  if (process.env.NODE_ENV === "production" && process.env.DATABASE_URL && !process.env.DATABASE_URL.startsWith("file:")) {
    console.log("🔧 Running migrations (production)...");
    run("npx prisma migrate deploy");
  } else {
    console.log("🔧 Pushing database schema (startup)...");
    run("npx prisma db push");
  }
} catch (e) {
  console.warn("⚠️ Prisma setup failed (startup). Continuing anyway...");
}

console.log("✅ Starting: build/server.js");
// preload crypto polyfill in the server process
run("node -r ./polyfill-crypto.cjs ./node_modules/@remix-run/serve/dist/cli.js ./build/server.js");