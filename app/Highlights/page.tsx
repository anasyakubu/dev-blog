import React from "react";
import Highlight from "../sections/Highlight/Highlight";
import Nav from "../../components/shared/Nav";
import Connected from "../sections/Connected/Connected";
import Footer from "../sections/Footer/Footer";

const Highlights = () => {
  return (
    <div className="Highlights">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Nav />
        <Highlight />
        <Connected />
        <Footer />
      </div>
    </div>
  );
};

export default Highlights;
