"use client";

import useLibrary from "@/hooks/useLibrary";
import Library from "@/app/components/Library";
import { useUser } from "@/hooks/useUser";
import fetchSongs from "@/utils/fetchSongs";
import { useEffect } from "react";
import { useSongs } from "@/providers/SongsProvider";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SidebarProps> = ({ children }) => {
  const { songs, setSongs } = useSongs();
  const player = usePlayer();
  const { isOpen } = useLibrary();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      fetchSongs(user.id)
        .then((fetchedSongs) => {
          setSongs(fetchedSongs);
        })
        .catch((error) => {
          console.error("Error fetching songs:", error);
        });
    }
  }, [user, setSongs]);

  return (
    <>
      <div
        className={twMerge(
          `flex flex-row w-full h-full`,
          player.activeId && "h-[calc(100%-80px)]"
        )}
      >
        {isOpen ? (
          <div className="flex h-full">
            <div
              className="
				flex
				flex-col
				gap-y-2
				bg-neutral-800
				h-full
				w-[350px]
				min-w-[250px]
				p-4
				text-white"
            >
              <Library songs={songs} />
            </div>
          </div>
        ) : null}

        <main className="w-full h-full">{children}</main>
      </div>
    </>
  );
};

export default SideBar;
