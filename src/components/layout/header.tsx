"use client";

import UserAvatarButton from "@/features/user/user-avatar-button";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Button } from "../ui/button";

interface HeaderProps {
  title: string;
  leftActions?: React.ReactNode;
  rightActions?: React.ReactNode;
}

export default function Header({ title, rightActions }: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header className="p-page flex items-center justify-between shrink-0 border-b-2 border-text-primary">
      <div className="flex flex-1 items-center justify-start gap-4">
        {!isHomePage && (
          <Button asChild className="btn-surface btn-std">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
        )}
      </div>

      <h1 className="header-main shrink-0 text-center px-4">{title}</h1>

      <div className="flex flex-1 items-center justify-end gap-4">
        {rightActions}
        <UserAvatarButton />
      </div>
    </header>
  );
}
