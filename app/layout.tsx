import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/app/styles/globals.css";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import Navbar from "./components/Navbar";

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
			<body className={font.className}>
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Navbar>{children}</Navbar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
