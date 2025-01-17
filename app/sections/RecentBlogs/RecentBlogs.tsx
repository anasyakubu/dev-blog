import React from "react";
import "./RecentBlogs.scss";
import RecentBlogCard from "../../../components/shared/RecentBlogCard";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

const RecentBlogs = () => {
  return (
    <div className="RecentBlogs">
      <div className="p-20 lg:py-10">
        <div className="">
          <h6 className="text-[#2563EB] text-2xl font-bold">Recent Blogs</h6>
        </div>
        <div className="mt-10">
          <RecentBlogCard />
          <RecentBlogCard />
          <RecentBlogCard />
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

export default RecentBlogs;
