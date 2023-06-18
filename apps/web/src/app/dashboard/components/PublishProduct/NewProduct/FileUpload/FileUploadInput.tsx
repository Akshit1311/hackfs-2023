"use client";
import { upload } from "@spheron/browser-upload";
import { ChangeEvent, useState } from "react";

interface Props {
  onImageUpload: (imageUrl: string) => void;
}

const FileUploadInput = ({ onImageUpload }: Props) => {
  const [browserUpload, setBrowserUpload] = useState({
    uploadId: "",
    bucketId: "",
    protocolLink: "",
    dynamicLinks: [""],
  });

  // const [file, setFile] = useState(null);
  const getResponse = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log({ stored: e.target.files[0] });
    // setFile(e.target.files[0]);

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
        protocolLink: `${protocolLink}/${e.target.files[0].name}`,
        dynamicLinks: dynamicLinks,
      });

      onImageUpload(`${protocolLink}/${e.target.files[0].name}`);

      console.log({
        uploadId,
        bucketId,
        protocolLink,
        dynamicLinks,
      });
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div>
      <input type="file" onChange={(e) => getResponse(e)} />

      {browserUpload.protocolLink && <img src={browserUpload.protocolLink} />}
    </div>
  );
};

export default FileUploadInput;
