"use client";

import React from "react";
import Button from "../../../../components/common/Button";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="md:w-[22rem] w-full md:border-white md:border-r h-screen">
      <div className="md:block hidden">
        <div className="h-44 border-b border-white flex items-center justify-center">
          <h1 className="text-6xl font-bold">GumroaD</h1>
        </div>

        <div className="p-5 flex flex-col items-start gap-4">
          <Button
            size="sm"
            onClick={() => ""}
            type="button"
            className="bg-pink-400 text-black border-black"
          >
            Products
          </Button>

          <Button
            onClick={() => alert("todo")}
            type="button"
            size="sm"
            className="hover:bg-gray-500 bg-gray-600 transition-all duration-300 ease-in-out"
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="md:hidden  text-center p-4 flex items-center justify-evenly gap-4 border-b border-white">
        <div>logo</div>
        <h2 className="text-sm">What are u creating??</h2>
        <div>mob</div>
      </div>
    </aside>
  );
};
export default Sidebar;
