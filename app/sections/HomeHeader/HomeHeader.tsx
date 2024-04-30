import React from "react";
import "./HomeHeader.scss";
import Nav from "../../../components/shared/Nav";
import Banner from "../../assets/Banner-1.svg";
import User from "../../assets/user-1.jpg";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <Nav />
      <div className="p-20 lg:py-10">
        <div className="">
          <h6 className="text-[#2563EB] text-2xl font-bold">Blog</h6>
        </div>
        <div className="my-10 p-6 border shadow-lg rounded-xl bg-white">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* text */}
            <div className="">
              <div className="">
                <h6 className="text-sm font-bold">Cooperation</h6>
                <h2 className="mt-5 text-black font-extrabold text-2xl">
                  Our biggest product updates from Sessions 2024
                </h2>
                <div className="mt-10 flex gap-5">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={User}
                    alt="User"
                  />
                  <span className="text-md">
                    Anas Yakubu <br />{" "}
                    <span className="font-light">Software Engineer</span>
                  </span>
                </div>
                <p className="mt-10 text-sm">
                  We announced AI-powered payments, our biggest-ever upgrades to
                  Stripe Connect, new support for usage-based billing, increased
                  interoperability, and a lot more.
                </p>
                <div className="mt-10">
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>
            {/* image */}
            <div className="flex justify-center img">
              <Image className="w-96" src={Banner} alt="Article" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
