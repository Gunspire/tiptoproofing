 "use client";

import React from "react";

import { cn } from "../lib/cn";

type LogoProps = {
  className?: string;
  alt?: string;
  variant?: "default" | "inverse";
};

export function Logo({ className, alt = "tiptoproofing", variant = "default" }: LogoProps) {
  const [src, setSrc] = React.useState("/22b8ce99-43e6-49ed-97ec-728ef4c7.jpg");

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        // Intentionally small by default (header/footer override as needed).
        "h-9 w-auto",
        // New logo is full-colour; don't invert for dark backgrounds.
        // Keep `variant` for API stability.
        variant === "inverse" ? undefined : undefined,
        className
      )}
      loading="eager"
      decoding="async"
      onError={() => setSrc("/eliteguard-roofing-logo.svg")}
    />
  );
}


