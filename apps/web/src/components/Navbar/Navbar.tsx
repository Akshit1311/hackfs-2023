"use client";

import React from "react";
import Input from "../common/Input";
import MainWrapper from "../common/MainWrapper";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  // Handlers
  const handleOnChange = () => {};

  return (
    <header className="md:py-6 border-b-2 border-black">
      <MainWrapper className="w-full flex items-center gap-4  md:flex-row flex-col">
        <div className="text-5xl font-bold text-black font-mabry">GUMroad</div>
        <div className="flex items-center gap-2 md:w-full w-fit">
          <div className="text-base text-black bg-white w-full rounded-lg border border-black p-4">
            <Input
              onChange={handleOnChange}
              placeholder="Search products"
              value=""
              className="bg-transparent"
            />
          </div>

          <div className="md:hidden block text-black">mobile</div>
        </div>
      </MainWrapper>
    </header>
  );
};
export default Navbar;
