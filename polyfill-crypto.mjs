import { webcrypto } from 'crypto';

// ensure Web Crypto API is available globally
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}
