import { create } from "zustand";

export type Store = {
  value: string;
  setValue: (newValue: string) => void;
};

const useStore = create<Store>((set) => ({
  value: "",
  setValue: (newValue) => set(() => ({ value: newValue })),
}));

export default useStore;
