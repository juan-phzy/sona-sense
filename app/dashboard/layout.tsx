import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen w-screen flex flex-col justify-center">
			<div>
				<Navbar />
			</div>
			<div className="h-full w-full">{children}</div>
		</div>
	);
}
