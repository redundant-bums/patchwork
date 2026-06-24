"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="flex w-full items-center justify-between"
      suppressHydrationWarning
    >
      <Label htmlFor="darkMode">Dark Mode</Label>
      <div className="pl-4">
        <Switch
          checked={isDark}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          aria-label="Toggle dark mode"
        />
      </div>
    </div>
  );
}
