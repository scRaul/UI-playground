import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideLayout from "@/components/Nav/HeaderSideLayout";
import HeaderSideLayout from "@/components/Nav/HeaderSideLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My UI Refrence Guide",
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
        <HeaderSideLayout />
        <main className="min-h-screen flex flex-col items-center pt-20 px-1">
          {children}
        </main>
      </body>
    </html>
  );
}
