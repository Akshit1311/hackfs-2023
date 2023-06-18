"use client";
import { upload } from "@spheron/browser-upload";
import { ChangeEvent, useState } from "react";

const page = () => {
  const [browserUpload, setBrowserUpload] = useState({
    uploadId: "",
    bucketId: "",
    protocolLink: "",
    dynamicLinks: [""],
  });
  const [file, setFile] = useState(null);
  const getResponse = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log({ stored: e.target.files[0] });
    setFile(e.target.files[0]);

    const response = await fetch(`http://localhost:3000/api/initiate-upload`);
    console.log({ response_from_backend: response });
    const resJson = await response.json();
    console.log({ resJson: resJson });
    const token = resJson.uploadToken;
    let currentlyUploaded = 0;
    try {
      const { uploadId, bucketId, protocolLink, dynamicLinks } = await upload(
        e.target.files,
        {
          token,
          onChunkUploaded: (uploadedSize, totalSize) => {
            currentlyUploaded += uploadedSize;
            console.log(`Uploaded ${currentlyUploaded} of ${totalSize} Bytes.`);
          },
        }
      );
      setBrowserUpload({
        uploadId: uploadId,
        bucketId: bucketId,
        protocolLink: protocolLink,
        dynamicLinks: dynamicLinks,
      });
      console.log({ uploadId, bucketId, protocolLink, dynamicLinks });
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div>
      <input type="file" onChange={(e) => getResponse(e)} />
      <img src="https://bafybeicd36i7lo4hxi2gghbdkxiyhqowwhuiacby5lxwl57lorv3fgfhfi.ipfs.sphn.link/stored3.jpeg" />
    </div>
  );
};

export default page;
