import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IState } from "./types";

// Slices
import createProductViewSlice from "./slices/createProductViewSlice";

const useDataStore = create<IState>()(
  devtools(
    (...a) => ({
      ...createProductViewSlice(...a),
    }),
    { name: "store" }
  )
);

const { getState, setState } = useDataStore;
export { getState, setState };

export default useDataStore;
