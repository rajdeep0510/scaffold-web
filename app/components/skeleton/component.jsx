import React from "react";
import { cn } from "@/lib/utils"; // if you have cn helper

export default function Skeleton({
  variant = "block",
  className = "",
  width,
  height,
}) {
  const baseClasses =
    "animate-pulse bg-gray-700/40 dark:bg-gray-300/20 rounded-md";

  let variantClasses = "";

  switch (variant) {
    case "text":
      variantClasses = "h-4 w-32 rounded";
      break;
    case "circle":
      variantClasses = "rounded-full h-12 w-12";
      break;
    case "block":
    default:
      variantClasses = "h-24 w-full rounded-md";
  }

  return (
    <div
      className={cn(baseClasses, variantClasses, className)}
      style={{
        width: width,
        height: height,
      }}
    />
  );
}
