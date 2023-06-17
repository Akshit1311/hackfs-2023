"use client";
import { useEffect } from "react";
import { Polybase } from "@polybase/client";
import { useAccount, usePublicClient } from "wagmi";

import { ethPersonalSign } from "@polybase/eth";

const page = () => {
  // const publicClient = usePublicClient();
  const { address } = useAccount();

  const db = new Polybase({
    defaultNamespace: process.env.NEXT_PUBLIC_NAMESPACE,
  });

  db.signer((data) => {
    // console.log({ publicClient });
    console.log();
    return {
      h: "eth-personal-sign",
      sig: ethPersonalSign(process.env.NEXT_PUBLIC_PRIVATE_KEY, data),
    };
  });

  const createResponse = async () => {
    await db.applySchema(
      `
    @public
    collection CollectionName {
      id: string;
      name?: string;
      publicKey?: PublicKey;
  
      constructor (id: string, name: string) {
        this.id = id;
        this.name = name;
  
        // Assign the public key of the user making the request to this record
        if (ctx.publicKey)
          this.publicKey = ctx.publicKey;
      }
    }
  `,
      "Filroad"
    );
  };
  const creatAnotherResponse = async () => {
    await db.applySchema(
      `
      @public
      collection AnjanaRandom{
        id: string;
        name: string;
        city: string;
        publicKey?: PublicKey;

        constructor(id: string, name: string, city: string){
          this.id = id;
          this.name = name;
          this.city = city;
          if(ctx.publicKey){
            this.publicKey = ctx.publicKey;
          }
        }
        updateName(name: string){
          this.name = name;
        }
      }
      `,
      "Filroad"
    );
  };
  const collectionReference = db.collection("CollectionName");
  const anotherCollectionReference = db.collection("AnjanaRandom");

  useEffect(() => {
    createResponse();
    creatAnotherResponse();
  }, []);
  const createRecord = async () => {
    const recordData = await collectionReference.create([
      "akshit",
      "Akshit Gupta",
    ]);
  };
  const anotherCreateRecord = async () => {
    const recordData = await anotherCollectionReference.create([
      "aks",
      "Akshit",
      "Delhi",
    ]);
  };
  const updateRecord = async () => {
    const recordData = await collectionReference
      .record("akshit")
      .call("updateName", ["Akshit Gupta"]);
  };
  const record = async () => {
    const name = await collectionReference.get();
    console.log({ name });
    const { data } = name;
    console.log({ data });
  };
  return (
    <div>
      <button onClick={() => createRecord()} className="text-white">
        create record
      </button>
      <button onClick={() => anotherCreateRecord()} className="text-white">
        create another record
      </button>
      <button onClick={() => updateRecord()} className="text-white p-2">
        Update record
      </button>
      <button onClick={() => record()} className="text-white p-2">
        Read record
      </button>
    </div>
  );
};

export default page;
