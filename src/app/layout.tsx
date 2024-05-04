import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import { ThemeProvider } from "@/providers/theme-provider";
import ThemeToggle from "@/components/ThemeToggle";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to SubMe",
  description: "Your ultimate platform for bonanza data, airtime and TV subscriptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <body className={clsx(
          'min-h-screen bg-background relative antialiased', 
          '',
          inter.className
          )}>{children}</body>
          <ThemeToggle />
          <Toaster />
      </ThemeProvider>
    </html>
  );
}
