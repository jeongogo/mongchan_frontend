import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  user: null,
  category: null,
  setUser: (user) => set(() => ({ user: user })),
  setCategory: (category) => set(() => ({ category: category })),
  removeUser: () => set({ user: null }),
});

store = devtools(store);
store = persist(store, { name: "user" });

const useStore = create(store);

export default useStore;
