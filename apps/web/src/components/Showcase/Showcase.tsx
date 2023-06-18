"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Common
import Title from "../common/Title";
import ContentWrapper from "../common/ContentWrapper";
import VerticalCard from "../common/VerticalCard";
import HorizontalCard from "../common/HorizontalCard";
import { getAllProducts } from "../../app/polybase/db";
import { ProductData } from "../../Data/data";

type ShowcaseProps = {};

const Showcase: React.FC<ShowcaseProps> = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  // Data
  const VerticalData = [
    { url: "one", desc: "Machato- The Native ChatGPT client for macOs" },
    { url: "one", desc: "Machato- The Native ChatGPT client for macOs" },
    { url: "one", desc: "Machato- The Native ChatGPT client for macOs" },
    { url: "one", desc: "Machato- The Native ChatGPT client for macOs" },
    { url: "one", desc: "Machato- The Native ChatGPT client for macOs" },
  ];

  const HorizontalData = [
    {
      title: "3D",
      url: "3d",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Design",
      url: "Design",
      desc: "Code, desing and ship your product with these technical resources.",
    },
    {
      title: "Drawing & Painting",
      url: "Drawing",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Software Development",
      url: "Dev",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Self Improvement",
      url: "Self",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Fitness & Health",
      url: "Fitness",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Music & Sound Design",
      url: "Music",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Photography",
      url: "Photo",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Writing & Publishing",
      url: "Publish",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Business & Money",
      url: "Money",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Education",
      url: "Education",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Comics & Graphic Novels",
      url: "Comics",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Fiction Books",
      url: "Publish",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Audio",
      url: "Audio",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Recorded Music",
      url: "Recorded",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Films",
      url: "Films",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
    {
      title: "Gaming",
      url: "Gaming",
      desc: "Perfect your craft with the same tools used at Dreamworks & Pixers.",
    },
  ];

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      console.log({ products: products.map(({ data }) => data) });
      setData(products.map(({ data }) => data));
    })();
  }, []);

  return (
    <ContentWrapper className="md:py-10 py-8">
      <Title title="Staff Picks" className="text-2xl mb-2" />
      <div className="grid md:grid-cols-5 place-items-center gap-4 grid-cols-1">
        {data.map((product, i) => (
          <VerticalCard
            key={i}
            url={product.ipfsUrl}
            rating={product.votingStatus}
            price={product.price}
            name={product.name}
            onProfileClick={() => router.push(`/profile/${product.author}`)}
            onClick={() => router.push(`/product/${product.name}`)}
          />
        ))}
      </div>

      <Title title="Data DAOs / Category" className="my-6 text-2xl" />

      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        {ProductData.map(({ desc, title, url }, i) => (
          <HorizontalCard
            key={`horizontal-card-${title}-${i + 1}`}
            title={title}
            desc={desc}
            url={url}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};
export default Showcase;
