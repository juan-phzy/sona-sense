"use client";

import { Button } from "@/app/components/ui/button";
import { CiLogin } from "react-icons/ci";
import { BsPersonPlusFill, BsPersonPlus } from "react-icons/bs";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";

export default function LoginButtons() {
	const authModal = useAuthModal();
	const supabaseClient = useSupabaseClient();
	const { user } = useUser();
	const router = useRouter();

	const loginButton = () => {
		authModal.onLogin();
		authModal.onOpen();
	};

	const registerButton = () => {
		authModal.onRegister();
		authModal.onOpen();
	};

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
			{user ? (
				<div>
					<Button
						onClick={handleLogout}
						variant="default"
						className="text-[1.1rem]"
					>
						Logout
					</Button>
				</div>
			) : (
				<>
					<Button onClick={loginButton}>
						<CiLogin className="mr-2 h-4 w-4" /> Log In.
					</Button>
					<Button onClick={registerButton}>
						<BsPersonPlusFill className="mr-2 h-4 w-4" /> Create Account.
					</Button>
				</>
			)}
		</>
	);
}
