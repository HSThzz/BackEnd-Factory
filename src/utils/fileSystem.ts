/**
 * File System Utilities
 *
 * This module provides utility functions for file and directory operations,
 * such as copying files, creating directories, and reading/writing files.
 */

import fs from 'fs-extra';
import path from 'path';

/**
 * Ensures a directory exists, creating it if necessary
 */
export async function ensureDir(dirPath: string): Promise<void> {
  await fs.ensureDir(dirPath);
}

/**
 * Copies a file or directory from source to destination
 */
export async function copyFile(src: string, dest: string): Promise<void> {
  await fs.copy(src, dest);
}

/**
 * Writes content to a file, creating parent directories if necessary
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
 */
export async function readFile(filePath: string): Promise<string> {
  return await fs.readFile(filePath, 'utf-8');
}

/**
 * Checks if a file or directory exists
 */
export function exists(filePath: string): Promise<boolean> {
  return fs.pathExists(filePath);
}

/**
 * Checks if a file or directory exists (synchronous)
 */
export function existsSync(filePath: string): boolean {
  return fs.existsSync(filePath);
}

/**
 * Removes a file or directory
 */
export async function remove(filePath: string): Promise<void> {
  await fs.remove(filePath);
}

/**
 * Reads a directory and returns the list of items
 */
export async function readDir(dirPath: string): Promise<string[]> {
  return await fs.readdir(dirPath);
}

/**
 * Gets file stats
 */
export async function getStats(filePath: string): Promise<fs.Stats> {
  return await fs.stat(filePath);
}

/**
 * Checks if a path is a directory
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
 */
export async function isFile(filePath: string): Promise<boolean> {
  try {
    const stats = await getStats(filePath);
    return stats.isFile();
  } catch {
    return false;
  }
}
