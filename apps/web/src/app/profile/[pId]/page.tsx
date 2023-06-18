"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Wagmi
import { useEnsAvatar, useAccount } from "wagmi";

// Assets
import { RiStarSFill } from "react-icons/ri";
import useDataStore from "../../../store";

type pageProps = {};

const Profile: React.FC<pageProps> = ({
  params,
}: {
  params: { pId: string };
}) => {
  const router = useRouter();

  const domainData = useDataStore(useCallback((state) => state.data, []));

  const { address, isConnected } = useAccount();

  const { data } = useEnsAvatar({
    name: domainData.ensName,
  });

  return (
    <section className="text-white bg-[#30335D] w-full min-h-screen">
      <div className="flex items-center justify-between w-full border-b border-white py-5 px-[5%] sticky top-0">
        <div>
          <div className="flex items-center gap-2">
            {data ? (
              <Image
                src={data}
                alt={data}
                width={50}
                height={50}
                className="rounded-full object-contain"
              />
            ) : (
              <Image
                src="/images/avatar.png"
                alt="default-avatar"
                width={50}
                height={50}
                className="rounded-full object-contain"
              />
            )}
            {isConnected ? (
              domainData.ensName
            ) : (
              <div className=" text-center">Please Connect your wallet</div>
            )}
          </div>
          <div className="text-sm font-mabry mt-2">{address}</div>
        </div>
      </div>
      <div className="py-5 px-[5%] text-5xl font-mabry-normal border-b border-white">
        i make comics(:
      </div>
      <div className="py-5 px-[5%] grid grid-cols-3">
        <Card
          src="/images/one.webp"
          onClick={() => router.push(`/product/${params.pId}`)}
          price="2$"
          rating="5.0"
          title="test"
        />
      </div>
    </section>
  );
};
export default React.memo(Profile);

interface Props {
  title: string;
  price: string;
  rating: string;
  src: string;
  onClick: () => void;
}

const Card: React.FC<Props> = ({ onClick, src, title, price, rating }) => (
  <div
    role="presentation"
    className="border border-white rounded-lg flex flex-col w-60 cursor-pointer"
    onClick={onClick}
  >
    <Image
      src={src}
      alt="test"
      width={250}
      height={250}
      className="object-contain"
      priority
      quality={100}
    />
    <div className="text-base font-mabry-normal border-t border-white p-4">
      {title}
    </div>

    <div className="flex items-center justify-between p-3 border-t border-white">
      <div className="flex gap-1">
        <RiStarSFill />
        <div className="text-sm font-mabry-normal">{rating}</div>
      </div>
      <div className="border-l border-white px-2">{price}</div>
    </div>
  </div>
);
