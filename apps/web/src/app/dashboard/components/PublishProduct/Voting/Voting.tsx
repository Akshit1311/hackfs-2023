import React from "react";
import Button from "../../../../../components/common/Button";

type VotingProps = {};

const Voting: React.FC<VotingProps> = () => {
  return (
    <section className="p-4  h-full flex items-center justify-center flex-col ">
      <Button
        size="xl"
        onClick={() => alert("todo")}
        type="button"
        className="bg-white text-black  mb-5"
      >
        Cast Vote
      </Button>

      <Button
        size="xl"
        onClick={() => alert("todo")}
        type="button"
        className="bg-pink-400 text-black border-black"
      >
        Todo
      </Button>
    </section>
  );
};
export default React.memo(Voting);
