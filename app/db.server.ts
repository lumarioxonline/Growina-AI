// Polyfill for Web Crypto API in Node.js
import { webcrypto } from "crypto";
(globalThis as any).crypto ??= webcrypto;

import { PrismaClient } from "@prisma/client";

let prismaGlobal = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  prismaGlobal.prisma ??
  new PrismaClient({
    log: ["error", "warn"]
  });

if (process.env.NODE_ENV !== "production") prismaGlobal.prisma = prisma;