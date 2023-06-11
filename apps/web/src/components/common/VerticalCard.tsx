import Image from "next/image";
import React from "react";

type VerticalCardProps = {};

const VerticalCard: React.FC<VerticalCardProps> = () => {
  return (
    <button
      type="button"
      className="border border-slate-100 rounded-lg h-full w-full text-white bg-black"
    >
      <div className="w-full h-fit flex items-center justify-center">
        <Image
          src="/images/one.webp"
          alt="Test"
          width={200}
          height={200}
          className="object-contain"
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="border-b border-slate-100 border-t flex flex-col items-start justify-between p-3">
        <div className="text-left pb-10 font-mabry-normal">
          Machato- The Native ChatGPT client for macOs
        </div>

        <div className="font-mabry-normal">
          <div>INsideone</div>
          <div>Two</div>
        </div>
      </div>

      <div className="py-2">Price</div>
    </button>
  );
};
export default React.memo(VerticalCard);
