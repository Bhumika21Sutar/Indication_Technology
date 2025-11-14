import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Dynamically loads images from /assets
 * without bundling them into the main bundle.
 *
 * Usage:
 * <img src={loadImage("my-image.webp")} loading="lazy" />
 */
export function loadImage(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).toString();
}
