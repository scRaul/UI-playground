import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";
import Footer from "@/components/navigation/Footer";
import SeqNav from "@/components/navigation/SeqNav";
import { UIAppNavs, UIAppSeq, footerGroups } from "@/lib/appLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My UI Refrence Guide",
  description: "A reference for all your UI needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scrolly flex flex-col min-h-screen justify-between`}
      >
        <AppLayout navGroups={UIAppNavs} />
        <div className="pt-10">
          <main className="w-full max-w-3xl mx-auto [&>*]:my-2">
            {children}
          </main>
          <SeqNav links={UIAppSeq} />
        </div>
        <Footer groups={footerGroups} />
      </body>
    </html>
  );
}
