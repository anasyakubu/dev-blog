"use client";
import React, { useState, useEffect } from "react";
import "./BlogList.scss";
import BlogListCard from "../../../components/shared/BlogListCard";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  tag: string;
  article: string;
  articleImage: string;
  authorImage: string;
  authorName: string;
  authorUsername: string;
  createdAt: string;
}

const BlogList: React.FC = () => {
  const { user } = useUser();
  const userID = user?.id;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<Post[]>("http://localhost:9000/articleList")
      .then((result) => {
        console.log(result);
        const fetchPost = result.data.reverse();
        console.log(userID);
        setPosts(fetchPost);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="BlogList">
      <div className="p-20 lg:py-10">
        <div className="">
          <h6 className="text-[#2563EB] text-2xl font-bold">All Post</h6>
        </div>
        <div className="mt-10">
          {posts.map((post) => (
            <BlogListCard
              key={post._id}
              id={post._id}
              title={post.title}
              tag={post.tag}
              post={post.article}
              articleImage={post.articleImage}
              authorImage={post.authorImage}
              authorName={post.authorName}
              authorUsername={post.authorUsername}
              createdAt={post.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
