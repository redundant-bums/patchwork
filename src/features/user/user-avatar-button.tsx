"use client";

import { Settings, Moon, LogOut } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "../theme/theme-toggle";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Separator = () => (
  <DropdownMenuSeparator className="mx-2 bg-text-primary/30" />
);

export default function UserAvatarButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton aria-label="Open User Settings Menu">AV</IconButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="border border-text-primary bg-foreground text-text-primary shadow-none"
      >
        <DropdownMenuLabel className="flex flex-col space-y-1.5 px-3 py-2.5">
          <Label htmlFor="userFullName">Andie Vester</Label>
          <span className="text-xs leading-none opacity-70">
            avester146@gmail.com
          </span>
        </DropdownMenuLabel>

        <Separator />

        <DropdownMenuItem
          asChild
          className="focus:bg-background/20 focus:text-text-primary"
        >
          <Link
            href="/settings"
            className="flex w-full items-center gap-2 cursor-pointer"
          >
            <Settings className="h-4 w-4" />
            <Label className="cursor-pointer" htmlFor="accountSettings">
              Account Settings
            </Label>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="focus:bg-transparent focus:text-text-primary"
        >
          <Moon className="h-4 w-4" />
          <ThemeToggle />
        </DropdownMenuItem>

        <Separator />

        <DropdownMenuItem
          onClick={() => console.log("Logout clicked")}
          className="text-error focus:bg-error/10 focus:text-error"
        >
          <LogOut className="h-4 w-4" />
          <Label className="cursor-pointer" htmlFor="logout">
            Log out
          </Label>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
