import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import PublishProduct from "./components/PublishProduct/PublishProduct";

const Page = () => {
  return (
    <section className="min-h-screen w-full flex items-start text-white md:flex-row flex-col">
      <Sidebar />
      <PublishProduct />
    </section>
  );
};
export default Page;
