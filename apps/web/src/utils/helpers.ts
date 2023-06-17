import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Viem
import { normalize } from "viem/ens";

// Client
import { publicClient } from "../client/client";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const sliceAddress = (add: string) => {
  return `${add?.slice(0, 5)}...${add?.slice(-5)}`;
};

export const getEnsName = async (address: `0x${string}`) => {
  try {
    const ensName = await publicClient.getEnsName({
      address,
    });

    return ensName;
  } catch (error) {
    console.log({ error });
    throw error(error);
  }
};

export const getEnsAddress = async (name: string) => {
  try {
    const ensAddress = await publicClient.getEnsAddress({
      name: normalize(name),
    });

    return ensAddress;
  } catch (error) {
    console.log({ error });
    throw error(error);
  }
};
