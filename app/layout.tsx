import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeneralAPI Docs",
  description: "GeneralAPI's documentation site",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo3-dark.svg",
        href: "/logo3-dark.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo3.svg",
        href: "/logo3.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="docs-key"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
