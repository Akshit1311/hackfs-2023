import type { StoreSlice } from "../types";

export interface IProductState {
  view: "product" | "new-product";
  setView: (view: "product" | "new-product") => void;
}

const createProductViewSlice: StoreSlice<IProductState> = (set) => ({
  view: "product",
  setView(view) {
    set(() => ({ view }));
  },
});

export default createProductViewSlice;
