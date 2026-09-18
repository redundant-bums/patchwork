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
import { useLogout } from "@/app/(auth)/_hooks/useLogout";
import { useUser } from "@/app/(auth)/_hooks/useUser";
const Separator = () => (
  <DropdownMenuSeparator className="mx-2 bg-text-primary/30" />
);

export default function UserAvatarButton() {
  const { mutate: logout, isPending } = useLogout();
  const { data: user } = useUser();

  const username = user?.user_metadata?.username as string | undefined;
  const initial = (username?.[0] || user?.email?.[0] || "").toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton aria-label="Open User Settings Menu">{initial}</IconButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="border border-text-primary bg-foreground text-text-primary shadow-none"
      >
        <DropdownMenuLabel className="flex flex-col space-y-1.5 px-3 py-2.5">
          <Label htmlFor="userFullName">{username || "User"}</Label>
          <span className="text-xs leading-none opacity-70">
            {user?.email || "Loading..."}
          </span>
        </DropdownMenuLabel>
        <Separator />

        <DropdownMenuItem
          asChild
          className="focus:bg-background/20 focus:text-text-primary"
        >
          <Link
            href="/settings"
            className="flex w-full cursor-pointer items-center gap-2"
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
          onClick={() => logout()}
          disabled={isPending}
          className="text-error focus:bg-error/10 focus:text-error cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          <Label className="cursor-pointer" htmlFor="logout">
            {isPending ? "Logging out..." : "Log out"}
          </Label>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
