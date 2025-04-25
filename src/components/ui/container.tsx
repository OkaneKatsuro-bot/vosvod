import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto w-full max-w-7xl px-4 md:px-6", className)}
      {...props}
    />
  )
);
Container.displayName = "Container";