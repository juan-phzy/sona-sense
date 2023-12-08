"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";

import PlayButton from "@/app/components/PlayButton";

interface SongItemProps {
	data: Song;
	onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
	const imagePath = useLoadImage(data);

	return (
		<div
			onClick={() => onClick(data.id)}
			className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/20
        cursor-pointer 
        hover:bg-neutral-400/40 
        transition 
        p-3
      "
		>
			<div
				className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
			>
				<Image
					className="object-cover"
					src={imagePath || "/images/music-placeholder.png"}
					fill
					alt="Image"
				/>
			</div>
			<div className="flex flex-col items-start w-full pt-4 gap-y-1">
				<p className="font-semibold truncate w-full">
					{data.title.replaceAll("_", " ")}
				</p>
				<p
					className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
				>
					By {data.artist}
				</p>
			</div>
			<div
				className="
          absolute 
          bottom-24 
          right-4
          w-1/3
          h-1/4
          flex
          justify-end
          items-end
        "
			>
				<PlayButton />
			</div>
		</div>
	);
};

export default SongItem;
