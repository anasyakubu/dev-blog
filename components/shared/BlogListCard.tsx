import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import BlogImage from "../../app/assets/starter-code.png";
import User from "../../app/assets/user-1.jpg";
import Link from "next/link";

const BlogListCard = ({
  id,
  title,
  post,
  tag,
  articleImage,
  authorImage,
  authorName,
  authorUsername,
  createdAt,
}: any) => {
  return (
    <div className="BlogListCard">
      <div className="mt-20">
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* Text */}
          <div className="">
            <div className="">
              <h6 className="text-sm font-bold text-[#2563EB]">
                <Link href={`/Articles/${id}`}>{tag}</Link>
              </h6>
              <h2 className="mt-5 text-black font-extrabold text-2xl">
                <Link href={`/Articles/${id}`}>{title}</Link>
              </h2>

              <p className="mt-10 text-sm">
                <Link href={`/Articles/${id}`}>{post}</Link>
              </p>
              <div className="mt-10">
                <Button>
                  <Link href={`/Articles/${id}`}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Img */}
          <div className="my-10">
            {/*  */}
            <div className="">
              <p>{createdAt}</p>
              <div className="mt-5 flex gap-5">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={authorImage}
                  alt="User"
                />
                <span className="text-md font-bold">
                  <Link href={`/Articles/${id}`}>
                    {authorName} <br />{" "}
                    <span className="font-light">{authorUsername}</span>
                  </Link>
                </span>
              </div>
            </div>
            {/*  */}
            <div className="mt-12">
              <Image
                className="rounded-xl shadow-2xl"
                src={articleImage}
                alt="Blog Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
