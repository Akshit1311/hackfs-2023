import Image from "next/image";
import React from "react";

type VerticalCardProps = {
  desc?: string;
  url?: string;
  onClick?: () => void;
};

const VerticalCard: React.FC<VerticalCardProps> = ({ url, desc, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="border border-slate-100 rounded-lg h-full w-full text-white bg-black"
    >
      <div className="w-full h-fit flex items-center justify-center">
        <Image
          src={`/images/${url}.webp`}
          alt="Test"
          width={200}
          height={200}
          className="object-contain"
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="border-b border-slate-100 border-t flex flex-col items-start justify-between p-3">
        <div className="text-left pb-10 font-mabry-normal">{desc}</div>

        <div className="font-mabry-normal">
          <div>one</div>
          <div>Two</div>
        </div>
      </div>

      <div className="py-2">Price</div>
    </button>
  );
};
export default React.memo(VerticalCard);