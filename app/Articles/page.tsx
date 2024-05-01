import Nav from "../../components/shared/Nav";
import React from "react";
import BlogList from "../sections/BlogList/BlogList";
import Connected from "../sections/Connected/Connected";
import Footer from "../sections/Footer/Footer";

const Articles = () => {
  return (
    <div className="Articles">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Nav />
        <BlogList />
        <Connected />
        <Footer />
      </div>
    </div>
  );
};

export default Articles;
