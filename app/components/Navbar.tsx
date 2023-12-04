"use client";

import Link from "next/link";
import {
	BsCollectionFill,
	BsCollection,
	BsHouseDoor,
	BsHouseDoorFill,
	BsSearch,
	BsPersonCircle,
} from "react-icons/bs";
import { Button } from "@/app/components/ui/button";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Navbar() {
	const supabaseClient = useSupabaseClient();
	const { user } = useUser();
	const router = useRouter();

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();
		//todo reset any playing songs

		router.push("/");
		router.refresh();

		if (error) {
			toast.error(error.message);
		} else {
			toast.success("Logged out!");
		}
	};

	return (
		<>
			<nav className=" NavContainer ">
				<div className=" ThreeNavButtons ">
					{/* Insert Icons Here Instead of Names */}
					<Button variant="ghost">
						<BsCollectionFill className="w-[1.4rem] h-[1.4rem]" />
					</Button>
					<Button variant="ghost">
						<BsHouseDoorFill className="w-[1.4rem] h-[1.4rem]" />
					</Button>
					<Button variant="ghost">
						<BsSearch className="w-[1.4rem] h-[1.4rem]" />
					</Button>
				</div>

				<div className=" Logo-Name h-auto w-auto text-3xl">SonaSense</div>

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
		</>
	);
}
