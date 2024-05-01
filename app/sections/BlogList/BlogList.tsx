import React from "react";
import "./BlogList.scss";
import BlogListCard from "../../../components/shared/BlogListCard";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

const BlogList = () => {
  return (
    <div className="BlogList">
      <div className="p-20 lg:py-10">
        <div className="">
          <h6 className="text-[#2563EB] text-2xl font-bold">All Post</h6>
        </div>
        <div className="mt-10">
          <BlogListCard />
          <BlogListCard />
          <BlogListCard />
          <BlogListCard />
          <BlogListCard />
        </div>
        <div className="mt-20 flex justify-center">
          <Button>
            <Link href="/Articles">View all Post</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
