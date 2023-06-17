import type { StoreSlice } from "../types";

export type TViewType = "product" | "new-product" | "voting";

export interface IProductState {
  view: TViewType;
  setView: (view: TViewType) => void;
}

const createProductViewSlice: StoreSlice<IProductState> = (set) => ({
  view: "product",
  setView(view) {
    set(() => ({ view }));
  },
});

export default createProductViewSlice;
