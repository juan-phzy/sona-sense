// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<nav className=" NavContainer ">
				<div className=" ThreeNavButtons ">
					{/* Insert Icons Here Instead of Names */}
					<div>Lib</div>
					<div className="mx-[25px]">Home</div>
					<div>Search</div>
				</div>

				<div className=" Logo-Name h-auto w-auto">SonaSense</div>

				<div className=" UserSettings ">Settings</div>
			</nav>
		</>
	);
}
