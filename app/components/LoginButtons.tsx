"use client";

import { Button } from "@/app/components/ui/button";
import { CiLogin } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa6";
import useAuthModal from "@/hooks/useAuthModal";

export default function LoginButtons() {
	const authModal = useAuthModal();

	return (
		<>
			<Button onClick={authModal.onOpen}>
				<CiLogin className="mr-2 h-4 w-4" /> Log In.
			</Button>
			<Button onClick={authModal.onOpen}>
				<FaUserPlus className="mr-2 h-4 w-4" /> Create Account.
			</Button>
		</>
	);
}
