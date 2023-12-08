"use client";

import useUploadModal from "@/hooks/useUploadModal";
import { BsMusicNoteList, BsPlusSquare } from "react-icons/bs";
import { useUser } from "@/hooks/useUser";
import { toast } from "react-hot-toast";
import { Song } from "@/types";
import MediaItem from "@/app/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const uploadModal = useUploadModal();
  const { userDetails } = useUser();
  let isArtist: boolean;
  if (userDetails) {
    isArtist = userDetails.is_artist;
  }
  const onPlay = useOnPlay(songs);

  const onClick = () => {
    if (isArtist) {
      return uploadModal.openModal();
    } else {
      toast.error("Only artists may upload music");
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div
          className="
                       flex
                       items-center
                       justify-between
                       px-5
                       pt-4"
        >
          <div
            className="
                            inline-flex
                            items-center
                            gap-x-2"
          >
            <BsMusicNoteList className="text-neutral-300 w-[1.4rem] h-[1.4rem]" />
            <p className="text-neutral-300 font-medium text-md">Your Library</p>
          </div>

          <BsPlusSquare
            onClick={onClick}
            size={20}
            className="
                            text-neutral-400
                            cursor-pointer
                            hover:text-white
                            transition"
          />
        </div>
        <div
          className="
                    flex
                    flex-col
                    gap-y-2
                    mt-4
                    px-3"
        >
          <h1>My songs</h1>
          {songs.map((item, index) => (
            <MediaItem
              onClick={(id: string) => onPlay(id)}
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Library;
