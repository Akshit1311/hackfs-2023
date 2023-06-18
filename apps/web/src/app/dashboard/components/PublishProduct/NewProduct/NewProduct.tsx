import React, { useState } from "react";
import Input from "../../../../../components/common/Input";
import Title from "../../../../../components/common/Title";
import Image from "next/image";
import { cn } from "../../../../../utils/helpers";
import FileUploadInput from "./FileUpload/FileUploadInput";

type NewProductProps = {};

const NewProduct: React.FC<NewProductProps> = () => {
  const [activeDataDao, setActiveDataDao] = useState("digital");

  const ProductData = [
    {
      url: "digital",
      title: "Digital Product",
      desc: "Any set of files to download or to stream.",
    },
    {
      url: "audiobook",
      title: "Digital Product",
      desc: "Any set of files to download or to stream.",
    },
    {
      url: "course",
      title: "Digital Product",
      desc: "Any set of files to download or to stream.",
    },
    {
      url: "ebook",
      title: "Digital Product",
      desc: "Any set of files to download or to stream.",
    },
    // {
    //   url: "membership",
    //   title: "Digital Product",
    //   desc: "Any set of files to download or to stream.",
    // },
    {
      url: "newsletter",
      title: "Digital Product",
      desc: "Any set of files to download or to stream.",
    },
    {
      url: "physical",
      title: "Digital Product",
      desc: "Any set of files to download or to stream.",
    },
    {
      url: "podcast",
      title: "Digital Product",
      desc: "Any set of files to download or to stream.",
    },
  ];

  return (
    <section className="p-20 grid md:grid-cols-[0.6fr_1fr]">
      <div className="max-w-sm">
        <p className="font-mabry-normal text-base">
          Make some selections,fill in some boxes, and go live in minutes.
        </p>
      </div>
      <div>
        <div className="">
          <Title title="Name" />
          <Input
            onChange={() => ""}
            placeholder="Name of Product"
            value=""
            className="mt-1 bg-black border border-white p-4 rounded-lg text-white"
          />
        </div>
        <div className="mt-8">
          <Title title="File Upload" />
          <FileUploadInput onImageUpload={(url) => console.log(url)} />
        </div>
        <div className="mt-8">
          <Title title="Data DAO / Category" />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-4">
            <Card
              desc={"Create your own Data DAO"}
              title={"Custom Data DAO"}
              url={"membership"}
              active={activeDataDao === "membership"}
              onClick={() => setActiveDataDao("membership")}
            />
            {ProductData.map(({ desc, title, url }, i) => (
              <Card
                key={i}
                desc={desc}
                title={title}
                url={url}
                onClick={() => setActiveDataDao(url)}
                active={activeDataDao === url}
              />
            ))}
          </div>
        </div>

        <Input
          type="number"
          onChange={() => ""}
          placeholder="Fill Price"
          value=""
          className="mt-4 bg-black border border-white p-4 rounded-lg text-white"
        />
      </div>
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
