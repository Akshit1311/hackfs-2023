import Image from "next/image";
import React from "react";

type HorizontalCardProps = {
  title: string;
  url: string;
  desc: string;
};

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  desc,
  title,
  url,
}) => {
  return (
    <button
      type="button"
      className="flex items-start py-10 px-8 border border-slate-100 cursor-default rounded-lg bg-black gap-4 hover:bg-white hover:text-black transition-all duration-700 ease-in-out text-white hover:border hover:border-black"
    >
      <Image
        src={`/images/Svg/${url}.svg`}
        alt={title}
        width={110}
        height={110}
        className="object-contain"
        loading="lazy"
        quality={100}
      />
      <div className=" flex flex-col items-start justify-start">
        <div className="text-2xl">{title}</div>
        <div className="text-base font-mabry-normal text-left">{desc}</div>
      </div>
    </button>
  );
};
export default React.memo(HorizontalCard);
