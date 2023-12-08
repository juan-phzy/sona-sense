"use client";

import { twMerge } from "tailwind-merge";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { useUser } from "@/hooks/useUser";
//import usePlayer from "@/hooks/usePlayer";

import { Button } from "@/app/components/ui/button";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	//const player = usePlayer();

	const supabaseClient = useSupabaseClient();
	const { user } = useUser();

	return (
		<div
			className={twMerge(
				`
            w-full
            h-fit 
            bg-gradient-to-b 
            from-neutral-800 
            p-6`,
				className
			)}
		>
			{children}
		</div>
	);
};

export default Header;
