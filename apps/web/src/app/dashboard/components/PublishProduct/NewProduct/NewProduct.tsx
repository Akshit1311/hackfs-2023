import React, { useState } from "react";

import Image from "next/image";

// Helpers
import { cn } from "../../../../../utils/helpers";
import { createNewProduct } from "../../../../polybase/db";

// Data
import { ProductData } from "../../../../../Data/data";

// Components
import FileUploadInput from "./FileUpload/FileUploadInput";
import Input from "../../../../../components/common/Input";
import Title from "../../../../../components/common/Title";
import Button from "../../../../../components/common/Button";
import { propose } from "../../../../../config/viem/governor";
import { useAccount } from "wagmi";

type NewProductProps = {};

const NewProduct: React.FC<NewProductProps> = () => {
  const [form, setForm] = useState({
    productName: "",
    activeDataDAO: "membership",
    price: 0,
    ipfsUrl: "",
    votingStatus: "approval",
    customDataDAO: "",
  });

  const { address } = useAccount();

  const onSubmit = async () => {
    try {
      if (form.activeDataDAO === "membership") {
        await propose();
      }
      createNewProduct(
        form.ipfsUrl,
        form.productName,
        ProductData.find(({ url }) => url === form.activeDataDAO).title,
        form.price,
        address,
        form.ipfsUrl,
        form.votingStatus
      );
    } catch (error) {
      console.log("Error in form submission");
    }
  };

  return (
    <section className="p-20 ">
      <div>
        <p className="font-mabry-normal text-5xl">
          Make some selections,fill in some boxes, and go live in minutes.
        </p>
      </div>
      <br />
      <div>
        <div className="">
          <Title title="Name" />
          <Input
            onChange={(e) =>
              setForm((prev) => ({ ...prev, productName: e.target.value }))
            }
            placeholder="Name of Product"
            value={form.productName}
            className="mt-1 bg-black border border-white p-4 rounded-lg text-white"
          />
        </div>

        <div className="mt-8">
          <Title title="File Upload" />
          <FileUploadInput
            onImageUpload={(url) =>
              setForm((prev) => ({ ...prev, ipfsUrl: url }))
            }
          />
        </div>
        <div className="mt-8">
          <Title title="Data DAO / Category" />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-4">
            <Card
              desc={"Create your own Data DAO"}
              title={"Custom Data DAO"}
              url={"membership"}
              active={form.activeDataDAO === "membership"}
              onClick={() =>
                setForm((prev) => ({ ...prev, activeDataDAO: "membership" }))
              }
            />
            {ProductData.map(({ desc, title, url }, i) => (
              <Card
                key={i}
                desc={desc}
                title={title}
                url={url}
                onClick={() =>
                  setForm((prev) => ({ ...prev, activeDataDAO: url }))
                }
                active={form.activeDataDAO === url}
              />
            ))}
          </div>
        </div>
        {form.activeDataDAO === "membership" && (
          <div className="mt-8">
            <Title title="DataDAO Name" />
            <Input
              onChange={(e) =>
                setForm((prev) => ({ ...prev, customDataDAO: e.target.value }))
              }
              placeholder="Name of your new DataDAO"
              value={form.productName}
              className="mt-1 bg-black border border-white p-4 rounded-lg text-white"
            />
          </div>
        )}
        <div className="mt-8">
          <Title title="Price" />

          <Input
            type="number"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, price: parseInt(e.target.value) }))
            }
            placeholder="Price in $Fil"
            value={form.price.toString()}
            className="mt-1 bg-black border border-white p-4 rounded-lg text-white"
          />
        </div>
      </div>
      <br />

      <Button
        onClick={onSubmit}
        type="button"
        size="sm"
        className="bg-pink-400 text-black border border-black hover:bg-pink-500"
      >
        Next: Customize
      </Button>
    </section>
  );
};
export default React.memo(NewProduct);

interface Props {
  title: string;
  desc: string;
  url: string;
  active?: boolean;
  onClick?: () => void;
}

const Card: React.FC<Props> = ({ title, desc, url, active, onClick }) => (
  <div
    onClick={onClick}
    className={cn(
      "border-2  rounded-lg h-full w-full text-white bg-black p-4 flex flex-col items-start justify-start hover:scale-105 transition-all duration-100 ease-linear",
      active ? "border-blue-400" : "border-slate-100"
    )}
  >
    <Image
      src={`/images/product/${url}.webp`}
      alt=""
      width={80}
      height={80}
      className="object-contain"
    />
    <div className="mt-4">
      <h5 className="text-lg">{title}</h5>
      <p className="text-sm mt-1 font-mabry-normal">{desc}</p>
    </div>
  </div>
);
