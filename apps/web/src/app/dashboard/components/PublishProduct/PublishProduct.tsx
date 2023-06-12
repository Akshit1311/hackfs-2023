"use client";

import React from "react";
import dynamic from "next/dynamic";

// Store
import useDataStore from "../../../../store";

// Common
import Button from "../../../../components/common/Button";
import Input from "../../../../components/common/Input";

const Already = dynamic(() => import("./Already/Already"));
const NewProduct = dynamic(() => import("./NewProduct/NewProduct"));

type PublishProductProps = {};

const PublishProduct: React.FC<PublishProductProps> = () => {
  const view = useDataStore((state) => state.view);
  const setView = useDataStore((state) => state.setView);

  const View = {
    product: <Already />,
    "new-product": <NewProduct />,
  } as const;

  const ViewText = {
    product: "Product",
    "new-product": "Publish your first Project",
  } as const;

  const ViewHeader = {
    product: (
      <ButtonStrip>
        <Input
          onChange={() => ""}
          placeholder="Search"
          value=""
          className="bg-white p-2 rounded-lg"
        />
        <Button
          onClick={() => setView("new-product")}
          type="button"
          size="sm"
          className="bg-pink-400 text-black border border-pink-400"
        >
          New Product
        </Button>
      </ButtonStrip>
    ),
    "new-product": (
      <ButtonStrip>
        <Button
          onClick={() => setView("product")}
          type="button"
          size="sm"
          className="border border-white text-white"
        >
          Cancel
        </Button>
        <Button
          onClick={() => alert("todo")}
          type="button"
          size="sm"
          className="bg-pink-400 text-black border border-pink-400"
        >
          Next: Customize
        </Button>
      </ButtonStrip>
    ),
  } as const;

  return (
    <section className="overflow-y-auto h-screen w-full">
      <header className="p-16 border-b border-white flex items-center justify-between w-full sticky top-0 z-10 backdrop-blur-md">
        <h1 className="text-2xl">{ViewText[view]}</h1>
        {ViewHeader[view]}
      </header>

      {View[view]}
    </section>
  );
};
export default React.memo(PublishProduct);

interface props {
  children: React.ReactNode;
}

const ButtonStrip: React.FC<props> = ({ children }) => (
  <div className="flex items-center gap-4">{children}</div>
);
