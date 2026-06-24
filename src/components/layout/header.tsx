import UserAvatarButton from "@/features/user/user-avatar-button";
import * as React from "react";

interface HeaderProps {
  title: string;
  leftActions?: React.ReactNode;
  rightActions?: React.ReactNode;
}

export default function Header({ title, rightActions }: HeaderProps) {
  return (
    <header className="p-page flex items-center justify-between shrink-0 border-b-2 border-text-primary">
      <div className="flex flex-1 items-center justify-start gap-4">
        <UserAvatarButton />
      </div>
      
      <h1 className="header-main shrink-0 text-center px-4">
        {title}
      </h1>
      
      <div className="flex flex-1 items-center justify-end gap-4">
        {rightActions}
      </div>
    </header>
  );
}