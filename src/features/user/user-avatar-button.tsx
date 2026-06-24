"use client";

import { IconButton } from "@/components/ui/icon-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "../theme/theme-toggle";
import { Label } from "@/components/ui/label";

export default function UserAvatarButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton 
          onClick={() => console.log("clicked")}
          aria-label="Open User Settings Menu"
        >
          AV
        </IconButton>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="ml-4 border-none bg-[var(--foreground)] text-[var(--primary)] shadow-lg"
      >
        <DropdownMenuItem 
          onClick={() => console.log("Account Settings clicked")}
          className="focus:bg-[var(--background)]/20 focus:text-[var(--primary)]"
        >
           <Label className="cursor-pointer" htmlFor="accountSettings">Account Settings</Label>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onSelect={(e) => e.preventDefault()}
          className="focus:bg-transparent focus:text-[var(--primary)]"
        >
          <ThemeToggle />
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="mx-2 bg-[var(--accent)]" />
        
        <DropdownMenuItem 
          onClick={() => console.log("Logout clicked")}
          className="text-[var(--error)] focus:bg-[var(--error)]/10 focus:text-[var(--error)]"
        >
           <Label className="cursor-pointer" htmlFor="logout">Log out</Label>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}