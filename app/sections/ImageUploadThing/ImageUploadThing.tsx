import React, { useState } from "react";
import { generateUploadDropzone } from "../../../utils/uploadthing";

const ImageUploadThing = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <div className="ImageUploadThing">
      {" "}
      <generateUploadDropzone
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
  );
};

export default ImageUploadThing;
