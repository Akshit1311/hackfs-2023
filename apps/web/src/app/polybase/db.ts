import { Polybase } from "@polybase/client";
import { ethPersonalSign } from "@polybase/eth";

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

export const createProductCollection = async () => {
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

export const createDAOCollection = async () => {
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

export const productCollection = db.collection("Product");
export const daoCollection = db.collection("DAO");

// Record Creation
export const createNewDAO = async (
  id: string,
  name: string,
  products,
  image: string
) => {
  try {
    const recordData = await daoCollection.create([id, name, products, image]);

    return recordData;
  } catch (error) {
    console.log({ error });
  }
};

export const createNewProduct = async (
  id: string,
  name: string,
  dao: string,
  price: number,
  author: string,
  ipfs: string,
  votingStatus: string
) => {
  try {
    const recordData = await productCollection.create([
      id,
      dao,
      name,
      price,
      ipfs,
      author,
      votingStatus,
    ]);

    return recordData;
  } catch (error) {
    console.log({ error });
  }
};

// Getters
export const getAllProducts = async () => {
  const allPrducts = await productCollection.get();
  const { data } = allPrducts;
  console.log("getAllProducts", { data });
  return data;
};

export const getAllDAOs = async () => {
  const allPrducts = await daoCollection.get();
  const { data } = allPrducts;
  console.log("getAllDAOs", { data });

  return data;
};

export const getProductsByDAO = async (daoName: string) => {
  const allPrducts = await productCollection.where("dao", "==", daoName).get();
  const { data } = allPrducts;
  console.log("getProductsByDAO", { data });

  return data;
};
