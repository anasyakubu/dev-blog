import React from "react";
import "./page.scss";
import Nav from "../../../components/shared/Nav";

const Create = () => {
  return (
    <div className="Create">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Nav />
        <div className="p-20 lg:py-10"></div>
      </div>
    </div>
  );
};

export default Create;
