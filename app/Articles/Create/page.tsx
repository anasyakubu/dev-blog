"use client";
import React, { useState } from "react";
import "./page.scss";
import Nav from "../../../components/shared/Nav";
import { UploadDropzone } from "../../../utils/uploadthing";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
//import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";
// import { useUser } from "@clerk/nextjs";

const Create = () => {
  // const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string>("");

  const { user } = useUser();

  //console.log(user);
  // console.log(user?.emailAddresses[0].emailAddress);
  // console.log(user?.id[1]);
  // console.log(user?.fullName);
  // console.log(user?.username);
  // console.log(user?.imageUrl);

  const userID = user?.id;
  const authorName = user?.fullName;
  const authorUsername = user?.username;
  const authorEmail = user?.emailAddresses[0].emailAddress;
  const authorImage = user?.imageUrl;
  console.log(authorImage);

  // datas
  const [data, setData] = useState({
    title: "",
    article: "",
    tag: "",
    articleImage: imageUrl,
    authorImage: user?.imageUrl,
    authorName: authorName,
    authorUsername: authorUsername,
    authorEmail: authorEmail,
    userID: userID,
  });

  const handleSubmite = async (e: any) => {
    e.preventDefault();
    const {
      title,
      article,
      tag,
      articleImage,
      userID,
      authorImage,
      authorName,
      authorEmail,
      authorUsername,
    } = data;

    console.log(data);

    try {
      const { data } = await axios.post("http://localhost:9000/createArticle", {
        title,
        article,
        tag,
        articleImage,
        userID,
        authorImage,
        authorName,
        authorEmail,
        authorUsername,
      });
      if (data.error) {
        // toast.error(data.error);
        alert(data.error);
      } else {
        setData({
          title: "",
          article: "",
          tag: "",
          articleImage: imageUrl,
          authorImage: user?.imageUrl,
          authorName: user?.fullName,
          authorUsername: user?.username,
          authorEmail: user?.emailAddresses[0].emailAddress,
          userID: user?.id,
        });
        alert("Post Created Successfully");
        // router.push("/");
        window.location.href = "/";
        //setData({}); // Correct way to clear the data state
        // toast.success("Post Created Successfully");
        // alert("Post Created Successfully");
        // // router.push("/");
        // window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Create">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Nav />
        <div className="p-20 lg:py-10">
          <form onSubmit={handleSubmite}>
            <h1 className="p-3 w-full border outline-none rounded-lg">
              {imageUrl}
            </h1>

            <div className="">
              <UploadDropzone
                className="bg-white text-black"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
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
              {/* <FileUpload imageUrl={setImageUrl} setImageUrl={setImageUrl} /> */}
              <input type="hidden" value={imageUrl} name={imageUrl} />
            </div>
            <div className="mt-5">
              <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <div className="">
                  <input
                    className="p-3 w-full border outline-none rounded-lg"
                    type="text"
                    name="title"
                    placeholder="Post Title Here"
                    value={data.title}
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                  />
                </div>
                <div className="">
                  <select
                    className="p-3 w-full border outline-none rounded-lg"
                    name="tag"
                    value={data.tag}
                    onChange={(e) => setData({ ...data, tag: e.target.value })}
                  >
                    <option selected>Select a tag</option>
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
                placeholder="Write your Article Here....."
                id=""
                cols={30}
                rows={15}
                value={data.article}
                onChange={(e) => setData({ ...data, article: e.target.value })}
              ></textarea>
            </div>
            <div className="mt-5">
              <Button type="submit">Post</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
