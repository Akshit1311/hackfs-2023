"use client";

import React from "react";
import Button from "../../../../components/common/Button";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="md:w-72 w-full md:border-white md:border-r h-screen">
      <div className="md:block hidden">
        <div className="p-[69px] border-b border-white">
          <h1 className="text-2xl font-bold">GumroaD</h1>
        </div>

        <div className="p-5 flex flex-col items-start gap-4">
          <Button onClick={() => ""} type="button">
            Products
          </Button>

          <Button onClick={() => ""} type="button">
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
