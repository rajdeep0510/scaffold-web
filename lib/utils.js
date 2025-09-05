import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines Tailwind classes safely
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

