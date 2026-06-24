import * as React from "react";
import { Button } from "@/components/ui/button";

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label": string;
}

export function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <Button size="icon" className="btn-surface rounded-full" {...props}>
      {children}
    </Button>
  );
}
