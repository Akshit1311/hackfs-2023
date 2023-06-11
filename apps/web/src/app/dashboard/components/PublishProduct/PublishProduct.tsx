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
          className="bg-pink-500 text-black"
        >
          New Product
        </Button>
      </ButtonStrip>
    ),
    "new-product": (
      <ButtonStrip>
        <Button
          size="sm"
          onClick={() => setView("product")}
          type="button"
          className="border border-white "
        >
          Cancel
        </Button>
        <Button
          size="sm"
          onClick={() => alert("todo")}
          type="button"
          className=" bg-pink-500 text-black "
        >
          Customize
        </Button>
      </ButtonStrip>
    ),
  } as const;

  return (
    <section className="overflow-y-auto h-full w-full">
      <header className="p-4 border-b border-white flex items-center justify-between w-full">
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
