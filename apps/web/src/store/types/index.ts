import { StateCreator } from "zustand";
import { getState, setState } from "..";
import { IProductState } from "../slices/createProductViewSlice";

export type IGetState = typeof getState;
export type ISetState = typeof setState;

export type IState = IProductState;

export type StoreSlice<T> = StateCreator<
  IState,
  [["zustand/devtools", never]],
  [],
  T
>;

export type ValueOf<T> = T[keyof T];
