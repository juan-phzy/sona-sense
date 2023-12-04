"use client";

import { Button } from "@/app/components/ui/button";
import { CiLogin } from "react-icons/ci";
import { BsPersonPlusFill, BsPersonPlus } from "react-icons/bs";
import useAuthModal from "@/hooks/useAuthModal";

export default function LoginButtons() {
	const authModal = useAuthModal();

	return (
		<>
			<Button onClick={authModal.onOpen}>
				<CiLogin className="mr-2 h-4 w-4" /> Log In.
			</Button>
			<Button onClick={authModal.onOpen}>
				<BsPersonPlusFill className="mr-2 h-4 w-4" /> Create Account.
			</Button>
		</>
	);
}
