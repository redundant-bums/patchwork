import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AuthPromptProps {
  message: string;
  actionText: string;
  path: "/login" | "/signup";
}

export function AuthPrompt({ message, actionText, path }: AuthPromptProps) {
  return (
    <div className="flex items-center justify-center text-sm text-muted-foreground">
      <span>{message}</span>
      <Button asChild variant="link" className="ml-1.5 h-auto p-0 font-bold">
        <Link href={path}>{actionText}</Link>
      </Button>
    </div>
  );
}
