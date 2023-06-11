import React from "react";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="w-72 md:border-white md:border-r h-full">
      <div className="md:block hidden p-10 border-b border-white">
        <h1 className="text-2xl">GumroaD</h1>
      </div>
    </aside>
  );
};
export default Sidebar;
