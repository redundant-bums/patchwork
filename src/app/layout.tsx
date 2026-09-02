import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/providers/QueryProvider";
import { Toaster } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  CancelCircleIcon,
} from "@hugeicons/core-free-icons";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Patchwork",
  description: "Create photo boards with friends and family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased font-sans", quicksand.variable)}
      suppressHydrationWarning
    >
      <body className="page-root">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster
              position="top-center"
              icons={{
                success: (
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 text-success"
                  />
                ),
                error: (
                  <HugeiconsIcon
                    icon={CancelCircleIcon}
                    className="size-4 text-error"
                  />
                ),
              }}
              toastOptions={{
                unstyled: true,
                classNames: {
                  toast:
                    "w-[325px] flex items-center gap-3 rounded-xl border border-input bg-surface px-4 py-3.5 shadow-lg text-text-primary",

                  title: "text-[14px] font-semibold",
                  description: "text-[14px] opacity-80",
                },
              }}
            />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
