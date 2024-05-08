"use client";
import React, { useState } from "react";
import "./page.scss";
import Nav from "../../../components/shared/Nav";
import { UploadDropzone } from "../../../utils/uploadthing";
import FileUpload from "@/components/shared/FileUpload";

const Create = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <div className="Create">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Nav />
        <div className="p-20 lg:py-10">
          <div className="">
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
            {/* <FileUpload imageUrl={setImageUrl} setImageUrl={setImageUrl} /> */}
          </div>
          <div className="mt-5">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="">
                <input
                  className="p-3 w-full border outline-none rounded-lg"
                  type="text"
                  name="title"
                  placeholder="*Post Title Here*"
                />
              </div>
              <div className="">
                <select
                  className="p-3 w-full border outline-none rounded-lg"
                  name="tag"
                >
                  <option selected disabled>
                    Select a tag
                  </option>
                  <option>Engineering</option>
                  <option>Software Development</option>
                  <option>Software Engineer</option>
                  <option>Web Design</option>
                  <option>Web Development</option>
                  <option>Coding</option>
                  <option>Languages</option>
                  <option>Cloud Engineering</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <textarea
              className="p-3 w-full outline-none border rounded-lg"
              id=""
              cols={30}
              rows={15}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
