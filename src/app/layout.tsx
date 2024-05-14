import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["vietnamese"] });
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

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
        <body className={clsx(
          'min-h-screen bg-background relative antialiased',
          roboto.className,
          )}>
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
