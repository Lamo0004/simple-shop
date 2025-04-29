import { create } from "zustand";
import { persist } from "zustand/middleware";

const cartStore = create(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          // Tjek om produktet allerede er i kurven
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            // Hvis produktet findes, opdater antallet
            return {
              items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)),
            };
          } else {
            // Hvis produktet ikke findes, tilføj det til kurven
            return {
              items: state.items.concat({ ...item, quantity: 1 }),
            };
          }
        }),

      removeItem: (itemToRemove) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemToRemove.id),
        })),

      updateItemQuantity: (id, newQuantity) =>
        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)),
        })),
    }),
    { name: "storage" }
  )
);

export default cartStore;
