import React from "react";
import HomeHeader from "../sections/HomeHeader/HomeHeader";

const Home = () => {
  return (
    <div className="Home">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <HomeHeader />
      </div>
    </div>
  );
};

export default Home;
