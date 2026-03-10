/**
 * Path Utilities
 *
 * This module provides utility functions for path manipulation and resolution,
 * ensuring cross-platform compatibility.
 */

import path from 'path';

/**
 * Resolves a path to an absolute path
 */
export function resolvePath(...segments: string[]): string {
  return path.resolve(...segments);
}

/**
 * Joins path segments using the platform-specific separator
 */
export function joinPath(...segments: string[]): string {
  return path.join(...segments);
}

/**
 * Gets the base name of a path
 */
export function getBaseName(filePath: string): string {
  return path.basename(filePath);
}

/**
 * Gets the directory name of a path
 */
export function getDirName(filePath: string): string {
  return path.dirname(filePath);
}

/**
 * Gets the extension of a file
 */
export function getExtension(filePath: string): string {
  return path.extname(filePath);
}

/**
 * Checks if a path is absolute
 */
export function isAbsolute(filePath: string): boolean {
  return path.isAbsolute(filePath);
}

/**
 * Normalizes a path
 */
export function normalizePath(filePath: string): string {
  return path.normalize(filePath);
}
