import path from 'path';

/**
 * Resolves path segments to an absolute path
 * @param {...string} segments - Path segments to resolve
 * @returns {string} Absolute path
 */
export function resolvePath(...segments: string[]): string {
  return path.resolve(...segments);
}

/**
 * Joins path segments using platform-specific separator
 * @param {...string} segments - Path segments to join
 * @returns {string} Joined path
 */
export function joinPath(...segments: string[]): string {
  return path.join(...segments);
}

/**
 * Gets the base name of a file path
 * @param {string} filePath - File path
 * @returns {string} Base name
 */
export function getBaseName(filePath: string): string {
  return path.basename(filePath);
}

/**
 * Gets the directory name of a file path
 * @param {string} filePath - File path
 * @returns {string} Directory name
 */
export function getDirName(filePath: string): string {
  return path.dirname(filePath);
}

/**
 * Gets the file extension
 * @param {string} filePath - File path
 * @returns {string} File extension
 */
export function getExtension(filePath: string): string {
  return path.extname(filePath);
}

/**
 * Checks if a path is absolute
 * @param {string} filePath - File path to check
 * @returns {boolean} True if path is absolute
 */
export function isAbsolute(filePath: string): boolean {
  return path.isAbsolute(filePath);
}

/**
 * Normalizes a path
 * @param {string} filePath - File path to normalize
 * @returns {string} Normalized path
 */
export function normalizePath(filePath: string): string {
  return path.normalize(filePath);
}
