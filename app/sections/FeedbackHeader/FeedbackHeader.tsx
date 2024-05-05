import FeedbackCards from "../../../components/shared/FeedbackCards/FeedbackCards";
import Nav from "../../../components/shared/Nav";
import React from "react";
import "./FeedbackHeader.scss";
import Link from "next/link";

const FeedbackHeader = () => {
  return (
    <div className="FeedbackHeader">
      <div className="bg-[#dce6ee]">
        <Nav />
        <div className="p-20 lg:py-10">
          <div className="">
            <h6
              className="text-[#2563EB] text-3xl font-extrabold"
              style={{ fontSize: "3rem" }}
            >
              Contact us
            </h6>
            <p className="mt-5 text-xl ">
              Get in touch and let us know how we can help.
            </p>
          </div>
          <div className="mt-10 py-5">
            <FeedbackCards />
          </div>
          <div className="mt-10">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {/*  */}
              <div className="">
                <h6 className="font-semibold text-sm">Join us on Whatsapp</h6>
                <p className="mt-3 text-sm">
                  If you have technical questions, chat live with developers in
                  the official{" "}
                  <Link className="text-blue-600" href="/">
                    {" "}
                    Dev Blog Whatsapp Group
                  </Link>
                </p>
              </div>
              {/*  */}
              <div className="">
                <h6 className="font-semibold text-sm">
                  General communications
                </h6>
                <p className="mt-3 text-sm">
                  For general queries, including partnership opportunities,
                  please{" "}
                  <Link className="text-blue-600" href="/">
                    {" "}
                    contact support for help
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackHeader;
