import React from "react";

// Common
import MainWrapper from "../common/MainWrapper";
import Title from "../common/Title";
import VerticalCard from "../common/VerticalCard";

type ShowcaseProps = {};

const Showcase: React.FC<ShowcaseProps> = () => {
  return (
    <MainWrapper className="py-[3%] px-6">
      <Title title="Stuff Picks" className="text-2xl mb-2" />
      <div className="grid md:grid-cols-5 place-items-center gap-4 grid-cols-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <VerticalCard />
        ))}
      </div>
    </MainWrapper>
  );
};
export default Showcase;
