import React, { useState } from "react";
import { UploadDropzone } from "../../utils/uploadthing";

const FileUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <div className="FileUpload">
      <UploadDropzone
        className="bg-white text-black"
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          // Do something with the response
          console.log("Files: ", res);
          setImageUrl(res[0].url);
          alert("Upload Completed");
          console.log(res[0].url);
          console.log(imageUrl);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert("something went wrong");
        }}
        // value={imageUrl}
      />
    </div>
  );
};

export default FileUpload;
