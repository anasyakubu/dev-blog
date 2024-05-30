"use client";
import React, { useState, useEffect } from "react";
import "./page.scss";
import Nav from "../../../components/shared/Nav";
import { UploadDropzone } from "../../../utils/uploadthing";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { redirect } from "next/navigation";

const Create: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setData({
        title: "",
        article: "",
        tag: "",
        articleImage: imageUrl,
        authorImage: user.imageUrl || "",
        authorName: user.fullName || "",
        authorUsername: user.username || "",
        authorEmail: user.emailAddresses?.[0]?.emailAddress || "",
        userID: user.id || "",
      });
    }
  }, [user, imageUrl]);

  const [data, setData] = useState<{
    title: string;
    article: string;
    tag: string;
    articleImage: string;
    authorImage: string;
    authorName: string;
    authorUsername: string;
    authorEmail: string;
    userID: string;
  }>({
    title: "",
    article: "",
    tag: "",
    articleImage: imageUrl,
    authorImage: "",
    authorName: "",
    authorUsername: "",
    authorEmail: "",
    userID: "",
  });

  const handleSubmite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/createArticle",
        data
      );
      console.log(response.data);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setData({
          ...data,
          title: "",
          article: "",
          tag: "",
          articleImage: "",
        });
        alert("Post Created Successfully");
        // revalidatePath("/");
        redirect("/");
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
            {/* <h1 className="p-3 w-full border outline-none rounded-lg">
              {imageUrl}
            </h1> */}

            <div className="">
              <UploadDropzone
                className="bg-white text-black"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImageUrl(res[0].url);
                  alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  alert("Something went wrong");
                }}
              />
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
                  <input
                    className="p-3 w-full border outline-none rounded-lg"
                    type="text"
                    name="title"
                    placeholder="Post Title Here"
                    value={data.tag}
                    onChange={(e) => setData({ ...data, tag: e.target.value })}
                  />
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
