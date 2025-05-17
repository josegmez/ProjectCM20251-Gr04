import { type ClassNameValue, twMerge } from "tailwind-merge";

/**
 * Utility function to merge CSS classes.
 */
export function cn(...classes: (ClassNameValue | undefined)[]): string {
  return twMerge(...classes);
}
