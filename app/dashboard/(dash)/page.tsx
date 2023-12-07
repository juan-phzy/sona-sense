"use client";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";
import ListItem from "@/app/components/ListItem";

export const revalidate = 0;

export default function Page() {
	const { user, userDetails } = useUser();
	const supabaseClient = useSupabaseClient();
	let nameDetails: string;
	if (userDetails) {
		nameDetails = userDetails.first_name;
	} else {
		nameDetails = "No User";
	}
	const name = nameDetails.charAt(0).toUpperCase() + nameDetails.slice(1);

	return (
		<>
			<div className="h-full w-full flex flex-col bg-neutral-500">
				{/**Header */}
				<div className="p-6 flex flex-col h-fit w-full bg-gradient-to-b from-neutral-800">
					<p className="w-full h-fit text-4xl font-semibold text-white">
						Welcome back {name}
					</p>

					<div
						className="
						grid
						grid-cols-4
						gap-3
						mt-4"
					>
						<ListItem
							image="/images/liked.png"
							name="Liked Songs"
							href="liked"
						/>
					</div>
				</div>
				{/**body */}
				<div className="mt-2 mb-7 px-6">
					<div className="flex justify-between items-center">
						<h1
							className="
							text-white 
							text-2xl 
							font-semibold"
						>
							Newest Songs
						</h1>
					</div>
					<div className="text-white">List of Songs!</div>
				</div>
			</div>
		</>
	);
}
