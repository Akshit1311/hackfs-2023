import React from "react";

// Common
import Title from "../common/Title";
import ContentWrapper from "../common/ContentWrapper";
import VerticalCard from "../common/VerticalCard";
import HorizontalCard from "../common/HorizontalCard";

type ShowcaseProps = {};

const Showcase: React.FC<ShowcaseProps> = () => {
  return (
    <ContentWrapper className="md:py-10 py-8">
      <Title title="Staff Picks" className="text-2xl mb-2" />
      <div className="grid md:grid-cols-5 place-items-center gap-4 grid-cols-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <VerticalCard key={i} />
        ))}
      </div>

      <Title title="Products by Category" className="my-6 text-2xl" />

      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <HorizontalCard key={i} />
        ))}
      </div>
    </ContentWrapper>
  );
};
export default Showcase;
