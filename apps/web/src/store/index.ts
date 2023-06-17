import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IState } from "./types";

// Slices
import createProductViewSlice from "./slices/createProductViewSlice";
import createDomainSlice from "./slices/createDomainSlice";

const useDataStore = create<IState>()(
  devtools(
    (...a) => ({
      ...createProductViewSlice(...a),
      ...createDomainSlice(...a),
    }),
    { name: "store" }
  )
);

const { getState, setState } = useDataStore;
export { getState, setState };

export default useDataStore;
