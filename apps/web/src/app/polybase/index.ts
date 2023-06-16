import { Polybase } from "@polybase/client";
import { ethPersonalSign } from "@polybase/eth";
const db = new Polybase({
  defaultNamespace:
    "pk/0x6c57e7b82f11fb8eef2c2e146e8b41a6b9042c688acd7f3db3c3ca892cc6b58a87885c1eaa0e0d36b069ffc0254a006479175baacecf100cfd3ca2642bef3668/GUMROAD",
});
// db.signer((data) => {
//     return {
//       h: 'eth-personal-sign',
//       sig: ethPersonalSign(wallet.privateKey()), data)
//     }
//   })
db.signer((data) => {
  return {
    h: "eth-personal-sign",
    sig: ethPersonalSign(process.env.NEXT_PUBLIC_PRIVATE_KEY, data),
  };
});
export const createResponse = async () => {
  await db.applySchema(
    `
  @public
  collection CollectionName {
    id: string;
    name?: string;
    publicKey?: PublicKey;

    constructor (id: string, country: string) {
      this.id = id;
      this.country = country;

      // Assign the public key of the user making the request to this record
      if (ctx.publicKey)
        this.publicKey = ctx.publicKey;
    }
  }
`,
    "GUMROAD"
  );
};
