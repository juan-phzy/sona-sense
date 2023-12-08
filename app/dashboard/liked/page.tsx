"use client";

import Image from "next/image";
import PlaylistHeader from "@/app/components/PlaylistHeader";
import LikedContent from "./components/LikedContent";
import { useState, useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import fetchLikedSongs from "@/utils/fetchLikedSongs";

const Liked = () => {
	const [songs, setSongs] = useState<Song[]>([]);
	const { user } = useUser();

	useEffect(() => {
		if (user) {
			fetchLikedSongs(user.id)
				.then((fetchedSongs) => {
					setSongs(fetchedSongs);
				})
				.catch((error) => {
					console.error("Error fetching songs:", error);
				});
		}
	}, [user]);

	return (
		<div
			className="
            bg-neutral-500 
            rounded
            h-full 
            w-full 
            overflow-hidden 
            overflow-y-auto"
		>
			<PlaylistHeader>
				<div>
					<div
						className="
                        flex  
                        flex-row 
                        items-center 
                        gap-x-5"
					>
						<div className="relative h-32 w-32 lg:h-44 lg:w-44">
							<Image
								className="object-cover"
								fill
								src="/images/liked.png"
								alt="Playlist"
							/>
						</div>
						<div className="flex flex-col gap-y-2 mt-0">
							<p className="block font-semibold text-sm">Playlist</p>
							<h1
								className="
                                text-white 
                                text-4xl 
                                sm:text-5xl 
                                lg:text-7xl 
                                font-bold"
							>
								Liked Songs
							</h1>
						</div>
					</div>
				</div>
			</PlaylistHeader>
			<LikedContent songs={songs} />
		</div>
	);
};

export default Liked;
