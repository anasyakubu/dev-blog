import FeedbackCards from "../../../components/shared/FeedbackCards/FeedbackCards";
import Nav from "../../../components/shared/Nav";
import React from "react";

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
          <div className="mt-10">
            <FeedbackCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackHeader;
