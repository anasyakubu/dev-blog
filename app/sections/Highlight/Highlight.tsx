import React from "react";
import "./Highlight.scss";
import HighlightCards from "../../../components/shared/HighlightCards";

const Highlight = () => {
  return (
    <div className="Highlight">
      <div className="p-20 lg:py-10">
        <div className="">
          <div className="">
            <h6 className="text-[#2563EB] text-2xl font-bold">Highlights</h6>
          </div>
          <div className="mt-10 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <HighlightCards />
            <HighlightCards />
            <HighlightCards />
            <HighlightCards />
            <HighlightCards />
            <HighlightCards />
            <HighlightCards />
            <HighlightCards />
            <HighlightCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
