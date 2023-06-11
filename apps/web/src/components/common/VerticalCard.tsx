import Image from "next/image";
import React from "react";

type VerticalCardProps = {};

const VerticalCard: React.FC<VerticalCardProps> = () => {
  return (
    <div className="border border-slate-100 rounded-lg md:h-[35rem] h-full w-full text-white bg-black">
      <div className="w-full h-fit flex items-center justify-center">
        <Image
          src="/one.webp"
          alt="Test"
          width={240}
          height={240}
          className="object-contain"
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="border-b border-slate-100 border-t h-[16.5rem] flex flex-col items-start justify-between p-3">
        <div>TitleOne</div>

        <div>
          <div>INsideone</div>
          <div>Two</div>
        </div>
      </div>

      <div></div>
    </div>
  );
};
export default React.memo(VerticalCard);
