import { Toggle } from "@/types/interfaces";
import { create } from "zustand";

const useZustand = create<Toggle>((set) => ({

    toggle: false,
    toggleHandle: () => set((state) => ({toggle: !state.toggle}))
    
}))

export default useZustand