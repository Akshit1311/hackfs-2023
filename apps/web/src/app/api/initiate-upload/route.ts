import { NextResponse } from "next/server";
import { SpheronClient, ProtocolEnum } from "@spheron/storage";
import { headers } from "next/headers";

export const GET = async () => {
  const headersList = headers();
  const referer = headersList.get("referer");
  try {
    const bucketName = "Filroad"; // use your preferred name
    const protocol = ProtocolEnum.IPFS;
    const token = process.env.SPHERON_TOKEN;
    const client = new SpheronClient({ token });

    const { uploadToken } = await client.createSingleUploadToken({
      name: bucketName,
      protocol,
    });
    return new Response(JSON.stringify({ uploadToken }), {
      status: 200,
      headers: { referer: referer },
    });
  } catch (error) {
    console.log({ error });
  }
};
