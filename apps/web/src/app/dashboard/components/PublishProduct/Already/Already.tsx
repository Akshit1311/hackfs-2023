import Image from "next/image";
import React from "react";
import Button from "../../../../../components/common/Button";
import useDataStore from "../../../../../store";

const Already = () => {
  const setView = useDataStore((state) => state.setView);
  return (
    <section className="p-20">
      <div className="border border-white border-dashed p-5 rounded-lg w-fit">
        <Image
          alt="product-nudge"
          src="images/product/product-nudge-1.svg"
          width={1200}
          height={400}
          className="object-contain"
        />
        <div className="text-center mt-6">
          <h5>We&apos;ve never met an idea we didn&apos;t like.</h5>
          <p>
            Your first product doesn&apos;t needs to be perfect. Just put it out
            there and see if it sticks.
          </p>
          <Button
            size="sm"
            onClick={() => setView("new-product")}
            type="button"
            className="bg-pink-400 hover:bg-pink-500 text-black border-black mx-auto mt-3"
          >
            New Product
          </Button>
        </div>
      </div>
    </section>
  );
};
export default React.memo(Already);
