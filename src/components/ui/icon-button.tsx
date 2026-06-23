import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label": string;
}

export function IconButton({ className, children, ...props }: IconButtonProps) {
  return (
    <Button
      size="icon"
      className={cn(
        "rounded-full bg-foreground text-text-primary hover:bg-accent hover:text-white transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}