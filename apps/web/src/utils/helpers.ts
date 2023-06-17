import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const sliceAddress = (add: string) => {
  return `${add?.slice(0, 5)}...${add?.slice(-5)}`;
};
