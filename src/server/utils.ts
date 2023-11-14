import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function tw_presets() {
  return { 
    wrapper: "mx-auto w-full max-w-screen-xl px-2.5 md:px-20"
  }
}