"use client";

import Link from "next/link";
import {
	BsHouseDoorFill,
	BsSearch,
	BsPersonCircle,
	BsCollectionPlayFill,
} from "react-icons/bs";
import { Button } from "@/app/components/ui/button";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { toast } from "react-hot-toast";
import { useEffect, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import NavbarItem from "@/app/components/NavbarItem";
import useLibrary from "@/hooks/useLibrary";
import Image from "next/image";
import logoImage from "@/public/images/logoImage.png";
import { lookup } from "dns";
import usePlayer from "@/hooks/usePlayer";

interface NavbarProps {
	children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
	const supabaseClient = useSupabaseClient();
	const { user } = useUser();
	const router = useRouter();
	const { closeLib } = useLibrary();
	const pathname = usePathname();
	const session = useSession();
	const routes = useMemo(
		() => [
			{
				icon: BsCollectionPlayFill,
				label: "Sidebar",
				isToggle: true,
			},
			{
				icon: BsHouseDoorFill,
				label: "Home",
				active: pathname === "/dashboard",
				href: "/dashboard",
			},
			{
				icon: BsSearch,
				label: "Search",
				active: pathname === "/dashboard/search",
				href: "/dashboard/search",
			},
		],
		[pathname]
	);

	useEffect(() => {
		if (!session && pathname === "/dashboard") {
			router.push("/");
			toast.error("Please sign in");
		}
	}, [pathname]);

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();
		//todo reset any playing songs
		closeLib();
		router.push("/");
		router.refresh();

		if (error) {
			toast.error(error.message);
		} else {
			toast.success("Logged out!");
		}
	};

	if (
		!session &&
		(pathname === "/dashboard" || pathname === "/dashboard/search")
	) {
		return (
			<div className="bg-black w-screen h-screen flex justify-center items-center text-white">
				Loading...
			</div>
		);
	}

	return (
		<>
			<div className="flex flex-col justify-center items-center w-screen h-screen min-w-[1111px]">
				<nav className=" NavContainer ">
					<div className=" ThreeNavButtons ">
						{user ? (
							<>
								<div className="flex flex-row justify-between">
									{routes.map((item) => (
										<NavbarItem key={item.label} {...item} />
									))}
								</div>
							</>
						) : null}
					</div>

					<div className=" Logo-Name h-auto w-[290px] text-3xl">
						<Link href={"/"}>
							<Image src={logoImage} alt="SonaSense"></Image>
						</Link>
					</div>

					<div className=" UserSettings ">
						{user ? (
							<div>
								<Button
									onClick={handleLogout}
									variant="ghost"
									className="text-[1.1rem]"
								>
									Logout
								</Button>
							</div>
						) : (
							<Button variant="ghost">
								<BsPersonCircle className="w-[1.4rem] h-[1.4rem]" />
							</Button>
						)}
					</div>
				</nav>

				{/** Page body begins here */}
				<main className="w-full h-full">{children}</main>
			</div>
		</>
	);
};

export default Navbar;
