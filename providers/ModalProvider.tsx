"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/app/components/AuthModal";
import UploadModal from "@/app/components/UploadModal";
const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		const handleWindowLoad = () => {
			console.log("Window is loaded!");
			// Your code to run after the window is loaded
		};

		// Attach the event listener when the component is mounted
		window.addEventListener("load", handleWindowLoad);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener("load", handleWindowLoad);
		};
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<AuthModal />
			<UploadModal />
		</>
	);
};

export default ModalProvider;
