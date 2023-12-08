import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/app/styles/globals.css";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/SideBar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SonaSense",
  description: "Student Project for Music Web Player",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Navbar>
              <Sidebar>{children}</Sidebar>
            </Navbar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
