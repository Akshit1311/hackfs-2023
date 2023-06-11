"use client";

import React from "react";

// Common
import Input from "../common/Input";
import MainWrapper from "../common/MainWrapper";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  // Handlers
  const handleOnChange = () => {};

  return (
    <header className="md:py-6 border-b-2 border-slate-100">
      <MainWrapper className="w-full">
        <div className="flex items-center gap-4 md:flex-row flex-col">
          <div className="text-5xl font-bold text-white font-mabry">
            GumroaD
          </div>
          <div className="flex items-center gap-2 md:w-full w-fit">
            <div className="text-base text-white bg-black w-full rounded-lg border border-white p-4">
              <Input
                onChange={handleOnChange}
                placeholder="Search products"
                value=""
                className="bg-transparent placeholder:text-slate-300 text-white"
              />
            </div>

            <div className="md:hidden block text-white">mobile</div>
          </div>
        </div>
        <div className="md:flex hidden mt-6 text-white">List</div>
      </MainWrapper>
    </header>
  );
};
export default Navbar;
