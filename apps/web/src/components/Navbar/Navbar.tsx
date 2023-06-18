"use client";

import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

// Wagmi
import { useAccount, useDisconnect, useEnsName } from "wagmi";

// Common
import Input from "../common/Input";
import ContentWrapper from "../common/ContentWrapper";
import useDataStore from "../../store";
import { getEnsName, sliceAddress } from "../../utils/helpers";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { push } = useRouter();

  const { address, isConnected } = useAccount();

  const { disconnect } = useDisconnect();

  const data = useDataStore(useCallback((state) => state.data, []));

  const setData = useDataStore(useCallback((state) => state.setData, []));

  // Handlers
  const handleOnChange = () => {};

  useEffect(() => {
    setData("address", address);

    if (isConnected) {
      (async () => {
        const name = await getEnsName(address);
        console.log({ name });
        setData("ensName", name);
      })();
    }
  }, [isConnected, setData]);

  return (
    <header className="md:py-6 border-b-2 border-slate-100 text-white">
      <ContentWrapper className="w-full">
        <div className="flex items-center gap-4 md:flex-row flex-col">
          <button
            onClick={() => {
              disconnect();
              push("/");
            }}
            type="button"
            className="text-5xl font-bold font-mabry"
          >
            GumroaD
          </button>
          <div className="flex items-center gap-2 md:w-full w-fit">
            <div className="text-base bg-black w-full rounded-lg border border-white p-4">
              <Input
                onChange={handleOnChange}
                placeholder="Search products"
                value=""
                className="bg-transparent placeholder:text-slate-300 border-none text-white"
              />
            </div>

            <div className="border border-white rounded-lg p-1.5">
              {isConnected ? (
                data.ensName ?? sliceAddress(address)
              ) : (
                <div className="w-36 text-center">
                  Please Connect your wallet
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex hidden mt-6">List</div>
      </ContentWrapper>
    </header>
  );
};
export default React.memo(Navbar);
