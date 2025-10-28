import * as React from "react";

import { cn } from "@/lib/utils";

// Lightweight tooltip primitives (no external dependency)
const TooltipProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>{children}</>
);

const Tooltip: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>{children}</>
);

const TooltipTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<"button">>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn(className)} {...props} />
  )
);
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="tooltip"
      className={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
        className,
      )}
      {...props}
    />
  )
);
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
