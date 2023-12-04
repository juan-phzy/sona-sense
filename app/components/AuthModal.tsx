"use client";

import Modal from "@/app/components/Modal";
import {
	useSupabaseClient,
	useSessionContext,
} from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {
	const supabaseClient = useSupabaseClient();
	const router = useRouter();
	const { session } = useSessionContext();

	return (
		<Modal
			title="Welcome back"
			description="Login to your account"
			isOpen
			onChange={() => {}}
		>
			<Auth
				supabaseClient={supabaseClient}
				appearance={{ theme: ThemeSupa }}
			/>
		</Modal>
	);
};

export default AuthModal;
