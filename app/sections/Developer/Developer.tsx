import React from "react";
import Image from "next/image";
import User from "../../assets/dev-blog-logo-trans.png";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import "./Developer.scss";

const Developer = () => {
  return (
    <div className="Developer">
      <div className="p-20">
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* Text */}
          <div className="">
            <div className="">
              <h6 className="text-sm font-bold text-[#2563EB]">
                <Link href="/">Industry</Link>
              </h6>
              <h2 className="mt-5 text-black font-extrabold text-2xl">
                <Link href="/">
                  The future is arriving fast in the insurance industry
                </Link>
              </h2>

              <p className="mt-10 text-sm">
                <Link href="/">
                  Startups and innovative enterprises are revolutionizing the
                  way insurance policies are sold. Stripe provides the financial
                  infrastructure that makes it possible.
                </Link>
              </p>
              <div className="mt-10">
                <Button>
                  <Link href="/">Read More</Link>
                </Button>
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
                  className="w-16 h-16 rounded-full"
                  src={User}
                  alt="User"
                />
                <span className="text-md font-bold">
                  <Link href="/">
                    <span className="flex gap-2">
                      {" "}
                      Anas Yakubu{" "}
                      <span className="text-blue-600">
                        <FaCheckCircle />
                      </span>{" "}
                      <br />
                    </span>{" "}
                    <span className="font-light">Software Engineer</span>
                  </Link>
                </span>
              </div>
            </div>
            {/*  */}
            <div className="mt-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
