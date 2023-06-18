import { StoreSlice } from "../types";

export type TData = {
  ensName: string;
  address: `0x${string}`;
};

export interface IDomainSlice {
  data: TData;
  setData<P extends keyof TData>(type: P, data: TData[P]): void;
}

const createDomainSlice: StoreSlice<IDomainSlice> = (set, get) => ({
  data: {
    ensName: "",
    address: null,
  },
  setData: (type, data) => {
    set(() => ({
      data: {
        ...get().data,
        [type]: data,
      },
    }));
  },
});

export default createDomainSlice;
