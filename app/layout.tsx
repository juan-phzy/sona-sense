import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SonaSense",
  description: "Student Project for Music Web Player",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        <Navbar />
      </header>
      <body className={font.className}>{children}</body>
    </html>
  );
}
