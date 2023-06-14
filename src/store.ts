import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
type Store = {
  basket: any[];
  params: any;
};
type Actions = {
  addBasket: (newItem: any) => void;
  clearBasket: () => void;
  setParams: (params: any) => void;
};
const useStore = create<Store & Actions>()(
  devtools(
    immer((set) => ({
      basket: [],
      addBasket: (newItem: any) => {
        // const basket = (get() as any).basket;
        set((state) => {
          const oldItem = state.basket.find(
            (item) => item.name === newItem.name
          );
          if (oldItem) {
            oldItem.quantity += 1;
          } else {
            state.basket.push({ ...newItem, quantity: 1 });
          }
        });
      },
      clearBasket: () => {
        set({ basket: [] });
      },
      params: {},
      setParams: (params: any) => {
        set((state) => {
          state.params = params;
        });
      },
    }))
  )
);

export default useStore;
