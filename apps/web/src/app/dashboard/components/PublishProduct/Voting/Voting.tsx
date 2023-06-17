"use client";

import React from "react";
import Button from "../../../../../components/common/Button";
import Image from "next/image";

type VotingProps = {};

const Voting: React.FC<VotingProps> = () => {
  return (
    <section className="p-4 h-full flex items-center justify-start flex-col">
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <VotingCard key={i} src="/images/one.webp" onUpVoteClick={() => ""} />
        ))}
      </div>
    </section>
  );
};
export default React.memo(Voting);

interface Props {
  src: string;
  onUpVoteClick: () => void;
}

const VotingCard: React.FC<Props> = ({ src, onUpVoteClick }) => (
  <div className="flex items-center p-6 border border-slate-100 rounded-lg bg-black gap-4 hover:bg-white hover:text-black transition-all duration-700 ease-in-out text-white hover:border hover:border-black">
    <Image
      src={src}
      alt="Voting-img"
      width={200}
      height={200}
      className="object-contain"
    />
    <div className="flex items-center gap-2 flex-col">
      <Button
        onClick={onUpVoteClick}
        type="button"
        size="sm"
        className="bg-pink-400"
      >
        Up Vote
      </Button>
      <Button
        onClick={() => ""}
        type="button"
        size="sm"
        className="bg-pink-400"
      >
        Up Vote
      </Button>
      <Button
        onClick={() => ""}
        type="button"
        size="sm"
        className="bg-pink-400"
      >
        Up Vote
      </Button>
    </div>
  </div>
);
