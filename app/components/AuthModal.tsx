"use client";

import Modal from "@/app/components/Modal";

const AuthModal = () => {
	return (
		<Modal
			title="Welcome back"
			description="Login to your account"
			isOpen
			onChange={() => {}}
		>
			Auth Modal children!
		</Modal>
	);
};

export default AuthModal;
