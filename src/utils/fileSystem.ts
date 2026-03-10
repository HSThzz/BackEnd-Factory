import fs from 'fs-extra';
import path from 'path';

/**
 * Ensures a directory exists, creating it if necessary
 * @param {string} dirPath - Directory path
 * @returns {Promise<void>}
 */
export async function ensureDir(dirPath: string): Promise<void> {
  await fs.ensureDir(dirPath);
}

/**
 * Copies a file or directory from source to destination
 * @param {string} src - Source path
 * @param {string} dest - Destination path
 * @returns {Promise<void>}
 */
export async function copyFile(src: string, dest: string): Promise<void> {
  await fs.copy(src, dest);
}

/**
 * Writes content to a file, creating parent directories if necessary
 * @param {string} filePath - File path
 * @param {string} content - File content
 * @returns {Promise<void>}
 */
export async function writeFile(
  filePath: string,
  content: string
): Promise<void> {
  await fs.ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content, 'utf-8');
}

/**
 * Reads the contents of a file
 * @param {string} filePath - File path
 * @returns {Promise<string>} File content
 */
export async function readFile(filePath: string): Promise<string> {
  return await fs.readFile(filePath, 'utf-8');
}

/**
 * Checks if a file or directory exists
 * @param {string} filePath - File or directory path
 * @returns {Promise<boolean>} True if exists
 */
export function exists(filePath: string): Promise<boolean> {
  return fs.pathExists(filePath);
}

/**
 * Checks if a file or directory exists (synchronous)
 * @param {string} filePath - File or directory path
 * @returns {boolean} True if exists
 */
export function existsSync(filePath: string): boolean {
  return fs.existsSync(filePath);
}

/**
 * Removes a file or directory
 * @param {string} filePath - File or directory path
 * @returns {Promise<void>}
 */
export async function remove(filePath: string): Promise<void> {
  await fs.remove(filePath);
}

/**
 * Reads a directory and returns the list of items
 * @param {string} dirPath - Directory path
 * @returns {Promise<string[]>} Array of item names
 */
export async function readDir(dirPath: string): Promise<string[]> {
  return await fs.readdir(dirPath);
}

/**
 * Gets file stats
 * @param {string} filePath - File path
 * @returns {Promise<fs.Stats>} File stats
 */
export async function getStats(filePath: string): Promise<fs.Stats> {
  return await fs.stat(filePath);
}

/**
 * Checks if a path is a directory
 * @param {string} filePath - Path to check
 * @returns {Promise<boolean>} True if directory
 */
export async function isDirectory(filePath: string): Promise<boolean> {
  try {
    const stats = await getStats(filePath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Checks if a path is a file
 * @param {string} filePath - Path to check
 * @returns {Promise<boolean>} True if file
 */
export async function isFile(filePath: string): Promise<boolean> {
  try {
    const stats = await getStats(filePath);
    return stats.isFile();
  } catch {
    return false;
  }
}
