"use client";

import useLibrary from "@/hooks/useLibrary";
import Library from "@/app/components/Library";
import { useUser } from "@/hooks/useUser";
import fetchSongs from "@/utils/fetchSongs";
import { useEffect } from "react";
import { useSongs } from "@/providers/SongsProvider";

interface SidebarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SidebarProps> = ({ children }) => {
  const { songs, setSongs } = useSongs();
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
      <div className="flex flex-row w-full h-full">
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
