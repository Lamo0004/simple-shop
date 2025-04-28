import { create } from "zustand"; // Funktion importeres – opretter en store
import { persist } from "zustand/middleware"; // Funktion importeres – gør at state (messages) kan blive gemt i browserens lokale lagring

const cartStore = create(
  persist(
    (set) => ({
      // Vores tomme array
      items: [],

      // Tilføjer et item til arrayet
      addItem: (item) => set((state) => ({ items: state.items.concat(item) })),

      // Fjerner et item baseret på en given betingelse
      removeItem: (itemToRemove) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemToRemove.id), //Vi bruger .filter() for at lave et nyt array, hvor vi kun beholder de produkter, hvis id ikke matcher itemToRemove.id. Dette fjerner det specifikke item fra items-arrayet.
        })),
    }),
    { name: "storage" } // Angiver lokal lagringens navn
  )
);

export default cartStore;
