import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import BlogImage from "../../app/assets/starter-code.png";
import User from "../../app/assets/user-1.jpg";

const RecentBlogCard = () => {
  return (
    <div className="RecentBlogCard">
      <div className="mt-20">
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* Text */}
          <div className="">
            <div className="">
              <h6 className="text-sm font-bold text-[#2563EB]">Engineering</h6>
              <h2 className="mt-5 text-black font-extrabold text-2xl">
                Shepherd: How Stripe adapted Chronon to scale ML feature
                development
              </h2>

              <p className="mt-10 text-sm">
                Today, the most innovative changes in marketplaces are about
                providing more value to sellers. Many of them hinge on the kind
                of financial infrastructure Stripe provides. We’ve found leading
                marketplaces increasingly ask us to support them with three main
                types of incentives for sellers: access to a global customer
                base, an easy onboarding experience, and financial tools like
                loans and spend cards available in the marketplace dashboard.
              </p>
              <div className="mt-10">
                <Button>Read More</Button>
              </div>
            </div>
          </div>
          {/* Img */}
          <div className="my-10">
            {/*  */}
            <div className="">
              <p>April 15, 2024</p>
              <div className="mt-5 flex gap-5">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={User}
                  alt="User"
                />
                <span className="text-md font-bold">
                  Anas Yakubu <br />{" "}
                  <span className="font-light">Software Engineer</span>
                </span>
              </div>
            </div>
            {/*  */}
            <div className="mt-12">
              <Image
                className="rounded-xl shadow-2xl"
                src={BlogImage}
                alt="Blog Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;