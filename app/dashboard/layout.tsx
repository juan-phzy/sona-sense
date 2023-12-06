import type { Metadata } from "next";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "User Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Sidebar>{children}</Sidebar>
		</>
	);
}
