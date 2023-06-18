import Image from "next/image";
import React from "react";

// Assets
import { RiStarSFill } from "react-icons/ri";

type VerticalCardProps = {
  rating: string;
  name: string;
  desc?: string;
  url?: string;
  price: number;
  onClick?: () => void;
  onProfileClick: () => void;
};

const VerticalCard: React.FC<VerticalCardProps> = ({
  rating,
  price,
  name,
  url,
  desc,
  onClick,
  onProfileClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="border border-slate-100 rounded-lg h-full w-full text-white bg-black hover:bg-white hover:text-black hover:border hover:border-gray-950 transition-all duration-700 ease-in-out hover:scale-105"
    >
      <div className="w-full h-fit flex items-center justify-center">
        <img
          src={url}
          alt="Test"
          width={200}
          height={200}
          className="object-contain"
          // quality={100}
          loading="lazy"
        />
      </div>

      <div className="border-b border-slate-100 border-t flex flex-col items-start justify-between p-3 hover:border-b hover:border-gray-950 transition-all duration-75 ease-in-out">
        <div className="text-left pb-6 font-mabry-normal">{desc}</div>

        <div
          className="mb-4 flex items-center gap-2"
          role="presentation"
          onClick={(e) => {
            e.stopPropagation();
            onProfileClick();
          }}
        >
          <Image
            src="/images/one.webp"
            alt=""
            width={50}
            height={50}
            className="object-contain rounded-full"
          />
          <div className="text-sm font-mabry-normal">{name}I</div>
        </div>

        <div className="font-mabry-normal flex gap-1">
          <RiStarSFill size={20} />
          <div>{rating}</div>
        </div>
      </div>

      <div className="py-2">{price}</div>
    </button>
  );
};
export default React.memo(VerticalCard);
