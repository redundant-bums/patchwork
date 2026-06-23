import type { Metadata } from "next";
import { Quicksand } from "next/font/google"; // 1. Removed Figtree
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

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
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}