import { Button } from "@/components/ui/button";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import Link from "next/link";
import "./Connected.scss";
import { SubscribeButton } from "../../../components/shared/Subscribe";

const Connected = () => {
  return (
    <div className="Connected">
      <div className="p-20 bg-[#f6f9fc]">
        <div className="py-5 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <h6 className="font-bold text-black text-xl">Stay connected</h6>
            <p className="mt-5 text-sm">
              Subscribe to receive new blog posts from Dev Blog in your Email .
            </p>
            <div className="mt-10">
              {/* <Button>Subscribe to Notifications</Button> */}
              <SubscribeButton />
            </div>
          </div>
          <div className="pt-10">
            <div
              className="text-3xl text-blue-600"
              style={{ fontSize: "40px" }}
            >
              <AiFillLike />
            </div>
            <h6 className="text-black mt-5 font-semibold">
              Like this post? Join our team.
            </h6>
            <p className="mt-5 text-sm">
              Dev Blog post about people`s stories tools and infrastructure for
              the internet.
            </p>
            <div className="mt-5">
              <Link
                className="text-blue-600 text-md underline font-bold"
                href="/"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="pt-10">
            <div
              className="text-3xl text-blue-600"
              style={{ fontSize: "40px" }}
            >
              <FaComments />
            </div>
            <h6 className="text-black mt-5 font-semibold">
              Have any feedback or questions?
            </h6>
            <p className="mt-5 text-sm">We’d love to hear from you.</p>
            <div className="mt-5">
              <Link
                className="text-blue-600 text-md underline font-bold"
                href="/"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connected;
