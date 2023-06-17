"use client";

import React, { useCallback } from "react";
import dynamic from "next/dynamic";

// Store
import useDataStore from "../../../../store";

// Common
import Button from "../../../../components/common/Button";
import Input from "../../../../components/common/Input";
import Voting from "./Voting/Voting";

const Already = dynamic(() => import("./Already/Already"));
const NewProduct = dynamic(() => import("./NewProduct/NewProduct"));

type PublishProductProps = {};

const PublishProduct: React.FC<PublishProductProps> = () => {
  const view = useDataStore(useCallback((state) => state.view, []));

  const setView = useDataStore(useCallback((state) => state.setView, []));

  const View = {
    product: <Already />,
    "new-product": <NewProduct />,
    voting: <Voting />,
  } as const;

  const ViewText = {
    product: "Product",
    "new-product": "Publish your first Project",
    voting: "Voting",
  } as const;

  const ViewHeader = {
    product: (
      <ButtonStrip>
        <Input
          onChange={() => ""}
          placeholder="Search"
          value=""
          className="bg-black border border-white text-white  p-2 rounded-lg"
        />
        <Button
          onClick={() => setView("new-product")}
          type="button"
          size="sm"
          className="bg-pink-400 text-black border border-black"
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
          className="bg-pink-400 text-black border border-black"
        >
          Next: Customize
        </Button>
      </ButtonStrip>
    ),
  } as const;

  return (
    <section className="overflow-y-auto h-screen w-full">
      <header className="h-44 px-4 border-b border-white flex flex-col items-center justify-center w-full sticky top-0 z-10 backdrop-blur-md">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-4xl">{ViewText[view]}</h1>
          {ViewHeader[view]}
        </div>
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
