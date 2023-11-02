import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import _TopAndSideLayout from "@/components/LAYOUT/_TopAndSideLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <_TopAndSideLayout>{children}</_TopAndSideLayout>
      </body>
    </html>
  );
}
