"use client";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Navbar from "@/app/components/Navbar";
import { useSessionContext } from "@supabase/auth-helpers-react";
import Link from "next/link";

export default function Page() {
	const { user } = useUser();
	const router = useRouter();
	const { session } = useSessionContext();

	if (!session && !user) {
		router.replace("/");
		toast.error("Please Sign In");
	}

	return (
		<>
			<div className="h-screen w-screen flex flex-col">
				<Navbar />

				{user ? (
					<div className="flex h-full justify-center items-center bg-neutral-700 text-xl text-white">
						Welcome, you are logged in
					</div>
				) : (
					<div className="flex h-full justify-center items-center bg-neutral-700 text-xl text-white">
						<Link href={"/"}>Log In</Link>
					</div>
				)}
			</div>
		</>
	);
}
