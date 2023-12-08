"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Song } from "@/types";

type SongsContextType = {
  songs: Song[];
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
};

interface SongsProviderProps {
  children: ReactNode;
}

const initialSongsContext: SongsContextType = {
  songs: [],
  setSongs: () => {},
};

const SongsContext = createContext<SongsContextType>(initialSongsContext);

export const useSongs = () => useContext(SongsContext);

const SongsProvider: React.FC<SongsProviderProps> = ({ children }) => {
  const [songs, setSongs] = useState<Song[]>([]);

  return (
    <SongsContext.Provider value={{ songs, setSongs }}>
      {children}
    </SongsContext.Provider>
  );
};

export default SongsProvider;
