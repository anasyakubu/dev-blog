import React from "react";
import "./RecentHighlights.scss";
import HighlightSlides from "../../../components/shared/HighlightSlides/HighlightSlides";

const RecentHighlights = () => {
  return (
    <div className="RecentHighlights">
      <div className="p-20 lg:py-10">
        <div className="">
          <h6 className="text-[#2563EB] text-2xl font-bold">
            Recent Highlights
          </h6>
        </div>
        <div className="mt-10">
          <HighlightSlides />
        </div>
      </div>
    </div>
  );
};

export default RecentHighlights;
