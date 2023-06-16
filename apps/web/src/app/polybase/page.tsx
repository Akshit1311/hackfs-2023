"use client";
import { useEffect } from "react";
import { createResponse } from ".";

const page = () => {
  useEffect(() => {
    createResponse();
  }, []);

  return (
    <div>
      {/* <button onClick={() => createResponse()}>createResponse</button> */}
    </div>
  );
};

export default page;
