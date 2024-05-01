"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./HighlightSlides.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Button } from "../../ui/button";
import Link from "next/link";

export default function HighlightSlides({ id }: any) {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Adjust slidesPerView based on viewport width
      const newSlidesPerView = window.innerWidth >= 768 ? 4 : 1;
      setSlidesPerView(newSlidesPerView);
    };

    // Initial adjustment
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="w-full "
      >
        <SwiperSlide
          className="bg-white text-black py-10 p-3 m-2 shadow-xl rounded-2xl border"
          style={{ width: "0px !important" }}
        >
          <div className="mobile">
            <h6 className="text-lg font-bold">Adapting Chronon</h6>
            <p className="mt-3">May 1st 2024</p>
            <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
              In a previous blog post, we described how ML powers Stripe Radar,
              which allows good charges through while blocking bad ones. Fraud
              detection is adversarial, and Stripe needs to improve models
              quickly—fraud patterns change as malicious actors evolve their
              attacks, and Stripe needs to move even faster.
            </p>
            <div className="mt-5">
              <Button className="text-sm">
                <Link href={`/Highlights/${id}`}>Learn More</Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white text-black py-10 p-3 m-3 shadow-xl rounded-2xl border">
          <h6 className="text-lg font-bold">Adapting Chronon</h6>
          <p className="mt-3">May 1st 2024</p>
          <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
            In a previous blog post, we described how ML powers Stripe Radar,
            which allows good charges through while blocking bad ones. Fraud
            detection is adversarial, and Stripe needs to improve models
            quickly—fraud patterns change as malicious actors evolve their
            attacks, and Stripe needs to move even faster.
          </p>
          <div className="mt-5">
            <Button className="text-sm">
              <Link href={`/Highlights/${id}`}>Learn More</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white text-black py-10 p-3 m-3 shadow-xl rounded-2xl border">
          <h6 className="text-lg font-bold">Adapting Chronon</h6>
          <p className="mt-3">May 1st 2024</p>
          <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
            In a previous blog post, we described how ML powers Stripe Radar,
            which allows good charges through while blocking bad ones. Fraud
            detection is adversarial, and Stripe needs to improve models
            quickly—fraud patterns change as malicious actors evolve their
            attacks, and Stripe needs to move even faster.
          </p>
          <div className="mt-5">
            <Button className="text-sm">
              <Link href={`/Highlights/${id}`}>Learn More</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white text-black py-10 p-3 m-3 shadow-xl rounded-2xl border">
          <h6 className="text-lg font-bold">Adapting Chronon</h6>
          <p className="mt-3">May 1st 2024</p>
          <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
            In a previous blog post, we described how ML powers Stripe Radar,
            which allows good charges through while blocking bad ones. Fraud
            detection is adversarial, and Stripe needs to improve models
            quickly—fraud patterns change as malicious actors evolve their
            attacks, and Stripe needs to move even faster.
          </p>
          <div className="mt-5">
            <Button className="text-sm">
              <Link href={`/Highlights/${id}`}>Learn More</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white text-black py-10 p-3 m-3 shadow-xl rounded-2xl border">
          <h6 className="text-lg font-bold">Adapting Chronon</h6>
          <p className="mt-3">May 1st 2024</p>
          <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
            In a previous blog post, we described how ML powers Stripe Radar,
            which allows good charges through while blocking bad ones. Fraud
            detection is adversarial, and Stripe needs to improve models
            quickly—fraud patterns change as malicious actors evolve their
            attacks, and Stripe needs to move even faster.
          </p>
          <div className="mt-5">
            <Button className="text-sm">
              <Link href={`/Highlights/${id}`}>Learn More</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white text-black py-10 p-3 m-3 shadow-xl rounded-2xl border">
          <h6 className="text-lg font-bold">Adapting Chronon</h6>
          <p className="mt-3">May 1st 2024</p>
          <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
            In a previous blog post, we described how ML powers Stripe Radar,
            which allows good charges through while blocking bad ones. Fraud
            detection is adversarial, and Stripe needs to improve models
            quickly—fraud patterns change as malicious actors evolve their
            attacks, and Stripe needs to move even faster.
          </p>
          <div className="mt-5">
            <Button className="text-sm">
              <Link href={`/Highlights/${id}`}>Learn More</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white text-black py-10 p-3 m-3 shadow-xl rounded-2xl border">
          <h6 className="text-lg font-bold">Adapting Chronon</h6>
          <p className="mt-3">May 1st 2024</p>
          <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
            In a previous blog post, we described how ML powers Stripe Radar,
            which allows good charges through while blocking bad ones. Fraud
            detection is adversarial, and Stripe needs to improve models
            quickly—fraud patterns change as malicious actors evolve their
            attacks, and Stripe needs to move even faster.
          </p>
          <div className="mt-5">
            <Button className="text-sm">
              <Link href={`/Highlights/${id}`}>Learn More</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white text-black py-10 p-3 m-3 shadow-xl rounded-2xl border">
          <h6 className="text-lg font-bold">Adapting Chronon</h6>
          <p className="mt-3">May 1st 2024</p>
          <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
            In a previous blog post, we described how ML powers Stripe Radar,
            which allows good charges through while blocking bad ones. Fraud
            detection is adversarial, and Stripe needs to improve models
            quickly—fraud patterns change as malicious actors evolve their
            attacks, and Stripe needs to move even faster.
          </p>
          <div className="mt-5">
            <Button className="text-sm">
              <Link href={`/Highlights/${id}`}>Learn More</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white text-black py-10 p-3 m-3 shadow-xl rounded-2xl border">
          <h6 className="text-lg font-bold">Adapting Chronon</h6>
          <p className="mt-3">May 1st 2024</p>
          <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
            In a previous blog post, we described how ML powers Stripe Radar,
            which allows good charges through while blocking bad ones. Fraud
            detection is adversarial, and Stripe needs to improve models
            quickly—fraud patterns change as malicious actors evolve their
            attacks, and Stripe needs to move even faster.
          </p>
          <div className="mt-5">
            <Button className="text-sm">
              <Link href={`/Highlights/${id}`}>Learn More</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white text-black py-10 p-3 m-3 shadow-xl rounded-2xl border">
          <h6 className="text-lg font-bold">Adapting Chronon</h6>
          <p className="mt-3">May 1st 2024</p>
          <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
            In a previous blog post, we described how ML powers Stripe Radar,
            which allows good charges through while blocking bad ones. Fraud
            detection is adversarial, and Stripe needs to improve models
            quickly—fraud patterns change as malicious actors evolve their
            attacks, and Stripe needs to move even faster.
          </p>
          <div className="mt-5">
            <Button className="text-sm">
              <Link href={`/Highlights/${id}`}>Learn More</Link>
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
