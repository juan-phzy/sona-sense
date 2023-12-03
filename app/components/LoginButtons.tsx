"use client";

import { useState } from "react";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";

export default function Page() {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

	return (
		<>
			{isLoginModalOpen && <LoginModal />}
			{isRegisterModalOpen && <RegisterModal />}

			<button
				onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
				className="bg-white text-indigo-500 px-4 py-2 rounded shadow mb-4"
			>
				Log In.
			</button>

			<button
				onClick={() => setIsRegisterModalOpen(!isLoginModalOpen)}
				className="bg-white text-indigo-500 px-4 py-2 rounded shadow mb-4"
			>
				Create Account.
			</button>
		</>
	);
}
