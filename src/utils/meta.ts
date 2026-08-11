import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Resolves `__dirname` equivalent for ESM modules
 */
export function dirnameFromMeta(importMetaUrl: string): string {
  return path.dirname(fileURLToPath(importMetaUrl));
}
