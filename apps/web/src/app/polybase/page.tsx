"use client";
import { useEffect } from "react";
import { Polybase } from "@polybase/client";
import { useAccount, usePublicClient } from "wagmi";

import { ethPersonalSign } from "@polybase/eth";

const page = () => {
  const { address } = useAccount();

  const db = new Polybase({
    defaultNamespace: process.env.NEXT_PUBLIC_NAMESPACE,
  });

  db.signer((data) => {
    console.log();
    return {
      h: "eth-personal-sign",
      sig: ethPersonalSign(process.env.NEXT_PUBLIC_PRIVATE_KEY, data),
    };
  });

  const createProduct = async () => {
    await db.applySchema(
      `
      @public
      collection Product {
        id: string;
        dao: string;
        name: string;
        price:number;
        ipfs: string;
        author: string;
        votingStatus:string;
        constructor (id: string, dao:string, name: string, price:number, ipfs:string, author:string, votingStatus:string) {
          this.id = id;
          this.dao = dao;
          this.name = name;
          this.price = price;
          this.ipfs = ipfs;
          this.author = author;
          this.votingStatus = votingStatus;
    
         
        }
        updateDao(dao:string){
          this.dao = dao;
        }
        updateName(name:string){
          this.name = name;
        }
        updatePrice(price:number){
          this.price = price;
        }
        updateIpfs(ipfs:string){
          this.ipfs = ipfs;
        }
      updateAuthor(author:string){
      this.author = author;
      }
        updateVotingStatus(votingStatus:string){
          this.votingStatus= votingStatus;
        }
      }
  `,
      "Filroad"
    );
  };

  const createDAO = async () => {
    await db.applySchema(
      `
    @public
  collection DAO{
    id:string;
    name:string;
    products:Product[];
    image:string;
    constructor(id:string, name:string, products:Product[], image:string){
      this.id = id;
      this.name = name;
      this.products = products;
      this.image = image;
    }
    updateName(name:string){
      this.name = name;
    }
    updateProducts(products: Product[]){
      this.products = products;
    }
    updateImage(image:string){
      this.image=image;
    }
  }
    `,
      "Filroad"
    );
  };

  useEffect(() => {
    createProduct();
    createDAO();
  }, []);
  const collectionProductReference = db.collection("Product");
  const collectionDAOReference = db.collection("DAO");
  const writeProduct = async (
    id: string,
    name: string,
    dao: string,
    price: number,
    author: string,
    ipfs: string,
    votingStatus: string
  ) => {
    const recordData = await collectionProductReference.create([
      id,
      dao,
      name,
      price,
      ipfs,
      author,
      votingStatus,
    ]);
  };
  const writeDAO = async (
    id: string,
    name: string,
    products,
    image: string
  ) => {
    const recordData = await collectionDAOReference.create([
      id,
      name,
      products,
      image,
    ]);
  };

  const updateProductName = async (id: string, name: string) => {
    const recordData = await collectionProductReference
      .record(id)
      .call("updateName", [name]);
  };
  const updateProductDao = async (id: string, dao: string) =>
    await collectionProductReference.record(id).call("updateDao", [dao]);
  const updateProductPrice = async (id: string, price: number) =>
    await collectionProductReference.record(id).call("updatePrice", [price]);
  const updateProductIpfs = async (id: string, ipfs: string) =>
    await collectionProductReference.record(id).call("updateIpfs", [ipfs]);
  const updateProductAuthor = async (id: string, author: string) =>
    await collectionProductReference.record(id).call("updateAuthor", [author]);

  const readAllProducts = async () => {
    const allPrducts = await collectionProductReference.get();
    const { data } = allPrducts;
    console.log({ data });
  };
  const getOneProduct = async (id: string) => {
    const record = await collectionProductReference.record(id).get();
    const { data } = record;
    console.log({ data });
  };
  const readAllDAO = async () => {
    const allPrducts = await collectionDAOReference.get();
    const { data } = allPrducts;
    console.log({ data });
  };
  return (
    <div>
      <button
        onClick={() =>
          writeProduct(
            "1",
            "nftart",
            "artdao",
            0.0003,
            "0xa1bac06d3C3213df5A511F6504807cfbf9b9d402",
            "https://ipfs",
            "done"
          )
        }
        className="text-white"
      >
        create record
      </button>

      <button
        onClick={() =>
          writeDAO(
            "1",
            "development",
            [db.collection("Product").record("1")],
            "https://ipfs"
          )
        }
        className="text-white p-2"
      >
        Write to DAO
      </button>
      <button onClick={() => readAllDAO()} className="text-white">
        Read All DAO
      </button>
    </div>
  );
};
export default page;
