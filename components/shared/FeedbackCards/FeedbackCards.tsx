import Link from "next/link";
import { Button } from "../../ui/button";
import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";

const FeedbackCards = () => {
  return (
    <div className="FeedbackCards">
      <div className="">
        <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {/*  */}
          <div className="">
            <div className="bg-white text-black rounded-lg shadow-xl p-5">
              <div className="flex gap-1">
                <span style={{ fontSize: "3rem" }}>
                  <IoMdNotifications />
                </span>

                <span className="font-bold py-3">Notifications</span>
              </div>
              <p className="mt-5">
                We`d love to talk about how we can work together.
              </p>
              <div className="mt-5">
                <Link href="/">
                  {" "}
                  <Button>Contact us</Button>
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="">
            <div className="bg-white text-black rounded-lg shadow-xl p-5">
              <div className="flex gap-1">
                <span style={{ fontSize: "3rem" }}>
                  <BiSupport />
                </span>

                <span className="font-bold py-3">Help & support</span>
              </div>
              <p className="mt-5">
                Get in touch and let us know how we can help.
              </p>
              <div className="mt-5">
                <Link href="/">
                  {" "}
                  <Button>Get support</Button>
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="">
            <div className="bg-white text-black rounded-lg shadow-xl p-5">
              <div className="flex gap-1">
                <span style={{ fontSize: "3rem" }}>
                  <FaRegNewspaper />
                </span>

                <span className="font-bold py-3">Media & Press</span>
              </div>
              <p className="mt-5">
                Get Dev Blog news, company info, and media resources.
              </p>
              <div className="mt-5">
                <Link href="/">
                  {" "}
                  <Button>View Channel</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCards;
