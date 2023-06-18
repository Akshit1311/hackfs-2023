"use client";

// Assets
import { RiStarSFill } from "react-icons/ri";

// Components
import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/common/Button";
import ContentWrapper from "../../../components/common/ContentWrapper";
import Image from "next/image";
import Title from "../../../components/common/Title";

export default function Page({ params }: { params: { pickId: string } }) {
  return (
    <section className="pb-10">
      <Navbar />
      <div className="border-b  border-slate-100 text-white py-6">
        <ContentWrapper className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>Price button</div>
            <div className="font-mabry-normal text-2xl">
              The Illustrator's Guide to Photographing Models
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <RiStarSFill size={28} key={i} />
              ))}
              <div className="font-mabry-normal text-sm mt-1.5">2 ratings</div>
            </div>

            <Button
              size="md"
              onClick={() => alert("add to cart todo")}
              type="button"
              className="bg-transparent border black text-white hover:bg-white hover:text-black"
            >
              Add to cart
            </Button>
          </div>
        </ContentWrapper>
      </div>

      <ContentWrapper className="flex flex-col border border-white mt-6 rounded-lg">
        <Image
          src="/images/one.webp"
          alt="test"
          width={500}
          height={500}
          className="object-contain mx-auto"
        />
        <div className="flex items-start p-5 border-t border-white">
          <div className="border-r border-white h-full flex-1  w-full">
            <Title
              title="The Illustrator's Guide to Photographing Models"
              className="text-7xl mb-6"
            />
            <div className="flex items-center border-t border-white border-b py-8 gap-4">
              <div className="font-mabry-normal text-base">$20</div>
              <Title
                title="Muddy Colos"
                className="font-mabry-normal text-base border-x px-4"
              />
              <Title
                title="0 ratings"
                className="font-mabry-normal text-base"
              />
            </div>
            <div className="mt-4 text-lg font-mabry-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              porro quasi eos nemo. Dignissimos, autem facere quos tempora nam
              suscipit delectus quam eveniet accusamus illo expedita officiis
              cumque? Ipsam enim ipsa totam maiores.
              <br /> Quod modi a, dolor soluta neque cum optio similique
              accusantium molestiae voluptates veniam nobis praesentium ipsum.
              Praesentium earum quam voluptate alias voluptatum nesciunt aliquam
              culpa reiciendis odit veritatis, eius aspernatur molestiae rerum
              optio officia vel? Nisi, tempore numquam incidunt architecto
              quisquam, placeat ad amet praesentium maiores aut porro
              consequuntur illum illo, voluptatibus dignissimos.
              <br /> quo nostrum iste sequi delectus soluta sapiente eaque
              nihil. Praesentium aspernatur architecto dignissimos possimus!
            </div>
          </div>
          <div className="p-5 w-96">
            <RentCard
              price="10"
              title="Rent"
              desc="Your rental will be available for 30 days. Once started, you'll have 72 hours to watch it as much as you'd like!"
            />
            <RentCard
              price="20"
              title="Buy"
              desc="Watch as many times as you want, forever!"
            />
            <Button
              type="button"
              size="md"
              onClick={() => alert("add to cart todo")}
              className="bg-transparent border black text-white hover:bg-white hover:text-black w-full"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}

interface Props {
  price: string;
  title: string;
  desc: string;
}

const RentCard: React.FC<Props> = ({ price, title, desc }) => (
  <div className="p-4 border-white bg-black text-white rounded-lg flex items-start gap-4 mb-4 border">
    <button type="button" className="border-white border rounded-full p-2.5">
      ${price}
    </button>
    <div>
      <Title title={title} />
      <p className="text-sm font-mabry-normal">{desc}</p>
    </div>
  </div>
);
