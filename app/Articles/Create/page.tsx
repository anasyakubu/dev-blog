"use client";
import React, { useState } from "react";
import "./page.scss";
import Nav from "../../../components/shared/Nav";
import { UploadDropzone } from "../../../utils/uploadthing";

const Create = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <div className="Create">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Nav />
        <div className="p-20 lg:py-10">
          <div className="">
            <UploadDropzone
              className="bg-white text-black"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setImageUrl(res[0].url);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
