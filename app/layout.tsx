import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/app/ui/globals.css";
import Navbar from "@/app/components/Navbar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";

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
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						{children}
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
