import React from "react";
import HomeHeader from "../sections/HomeHeader/HomeHeader";
import RecentBlogs from "../sections/RecentBlogs/RecentBlogs";
import RecentHighlights from "../sections/RecentHighlights/RecentHighlights";
import Developer from "../sections/Developer/Developer";
import Connected from "../sections/Connected/Connected";
import Footer from "../sections/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <HomeHeader />
        <RecentBlogs />
        <RecentHighlights />
        <Developer />
        <Connected />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
