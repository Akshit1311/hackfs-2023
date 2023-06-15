"use client";

import React, { useCallback } from "react";

// Helpers
import { cn } from "../../../../utils/helpers";

// Assets
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineHowToVote } from "react-icons/md";

// Store
import useDataStore from "../../../../store";

// Components
import Button from "../../../../components/common/Button";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const view = useDataStore(useCallback((state) => state.view, []));

  const setView = useDataStore(useCallback((state) => state.setView, []));

  return (
    <aside className="md:w-[22rem] w-full md:border-white md:border-r h-screen">
      <div className="md:block hidden h-[75%] w-full">
        <div className="h-44 border-b border-white flex items-center justify-center">
          <h1 className="text-6xl font-bold">GumroaD</h1>
        </div>

        <div className="flex flex-col items-start h-full justify-between w-full">
          <div className="w-full">
            <Strip
              isActive={view === "product"}
              onClick={() => setView("product")}
              text="Product"
              icon={<RiProductHuntLine size={35} />}
            />

            <Strip
              isActive={view === "voting"}
              onClick={() => setView("voting")}
              text="Votings"
              icon={<MdOutlineHowToVote size={35} />}
            />
          </div>

          <Button
            onClick={() => alert("todo")}
            type="button"
            size="sm"
            className="hover:bg-gray-500 bg-gray-600 transition-all duration-300 ease-in-out ml-4"
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
export default React.memo(Sidebar);

interface Props {
  isActive: boolean;
  icon: JSX.Element;
  text: string;
  onClick: () => void;
}

const Strip: React.FC<Props> = ({ onClick, text, icon, isActive }) => (
  <div
    className={cn(
      "flex items-center border-b border-white w-full px-4 py-2 ",
      isActive ? "text-pink-400" : "text-white"
    )}
  >
    <div>{icon}</div>
    <Button size="md" onClick={onClick} type="button">
      {text}
    </Button>
  </div>
);
