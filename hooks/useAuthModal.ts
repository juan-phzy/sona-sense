import { create } from "zustand";

interface AuthModalStore {
    isOpen: boolean;
    isLogin: boolean;
    onLogin: () => void;
    onRegister: () => void;
    onOpen: () => void;
    onClose: () => void;
};

const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false,
    isLogin: false,
    onLogin: ()=> set({isLogin:true}),
    onRegister: () => set({isLogin: false}),
    onOpen: ()=> set({isOpen:true}),
    onClose: () => set({isOpen: false}),
}));

export default useAuthModal;