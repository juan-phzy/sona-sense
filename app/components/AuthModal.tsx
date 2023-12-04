"use client";

import Modal from "@/app/components/Modal";
import {
	useSupabaseClient,
	useSessionContext,
} from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
	const supabaseClient = useSupabaseClient();
	const router = useRouter();
	const { session } = useSessionContext();
	const { onClose, isOpen } = useAuthModal();

	useEffect(() => {
		if (session) {
			router.refresh();
			onClose();
		}
	}, [session, router, onClose]);

	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Modal
			title="Welcome back"
			description="Login to your account"
			isOpen={isOpen}
			onChange={onChange}
		>
			<Auth
				supabaseClient={supabaseClient}
				appearance={{ theme: ThemeSupa }}
			/>
		</Modal>
	);
};

export default AuthModal;
