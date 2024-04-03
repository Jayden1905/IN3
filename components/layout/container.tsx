import { cn } from "@/utils";
import React from "react";
export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 md:px-1", className)}>
      {children}
    </div>
  );
}
