import { create } from "zustand"; // Funktion importeres – opretter en store
import { persist } from "zustand/middleware"; // Funktion importeres – gør at state (messages) kan blive gemt i browserens lokale lagring

const cartStore = create(
  persist(
    (set) => ({
      //Vores tomme array
      items: [],

      addItem: (item) => set((state) => ({ items: state.items.concat(item) })),
    }),
    { name: "storage" }
  )
);
export default cartStore;
