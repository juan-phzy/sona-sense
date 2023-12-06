import { create } from "zustand";

interface LibraryStore {
    isOpen: boolean;
    openLib: () => void;
    closeLib: () => void;
};

const useLibrary = create<LibraryStore>((set) => ({
    isOpen: false,
    openLib: ()=> set({isOpen:true}),
    closeLib: () => set({isOpen: false}),
}));

export default useLibrary;