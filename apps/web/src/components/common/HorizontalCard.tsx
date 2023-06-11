import Image from "next/image";
import React from "react";

type HorizontalCardProps = {};

const HorizontalCard: React.FC<HorizontalCardProps> = () => {
  return (
    <button
      type="button"
      className="flex items-center py-10 px-8 border border-slate-100 rounded-lg bg-black gap-4"
    >
      <Image
        src="/images/Svg/3d.svg"
        alt=""
        width={110}
        height={110}
        className="object-contain"
        loading="lazy"
        quality={100}
      />
      <div className="text-white">
        <div className="text-xl">Title</div>
        <div className="text-base ">Desc</div>
      </div>
    </button>
  );
};
export default React.memo(HorizontalCard);
