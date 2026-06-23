"use client";

import { IconButton } from "@/components/ui/icon-button";

export default function UserAvatarButton() {
  return (
    <IconButton
      onClick={() => console.log("Avatar clicked")}
      aria-label="Open User Settings Menu"
    >
      AV
    </IconButton>
  );
}