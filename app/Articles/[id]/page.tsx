import Nav from "../../../components/shared/Nav";
import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import BlogImage from "../../assets/starter-code.png";
import RecentHighlights from "../../sections/RecentHighlights/RecentHighlights";
import Connected from "../../sections/Connected/Connected";
import Footer from "../../sections/Footer/Footer";
import User from "../../assets/user-1.jpg";
import Link from "next/link";
import "./page.scss";

const Read = async ({ params: { id } }: any) => {
  console.log(id);
  return (
    <div className="Read">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Nav />
        <div className="p-20 lg:py-10">
          <div className="">
            <div className="">
              <h6 className="text-[#2563EB] text-2xl font-bold">Engineering</h6>
            </div>
            <div className="mt-10">
              <h1
                className="text-black font-bold text-3xl"
                style={{ fontSize: "32px" }}
              >
                Shepherd: How Stripe adapted Chronon to scale ML feature
                development
              </h1>
              <p className="mt-5">April 15, 2024</p>
            </div>
            <div className="mt-10 flex justify-center">
              <Image
                className="rounded-2xl shadow-xl"
                src={BlogImage}
                alt="Blog Image"
                style={{ width: "600px" }}
              />
            </div>
            <div className="mt-10">
              <p>
                Machine learning (ML) is a foundation underlying nearly every
                facet of Stripe’s global operations, optimizing everything from
                backend processing to user interfaces. Applications of ML at
                Stripe add hundreds of millions of dollars to the internet
                economy each year, benefiting millions of businesses and
                customers worldwide. Developing and deploying ML models is a
                complex multistage process, and one of the hardest steps is
                feature engineering. Before a feature—an input to an ML
                model—can be deployed into production, it typically goes through
                multiple iterations of ideation, prototyping, and evaluation.
                This is particularly challenging at Stripe’s scale, where
                features have to be identified among hundreds of terabytes of
                raw data. As an engineer on the ML Features team, my goal is to
                build infrastructure and tooling to streamline ML feature
                development. The ideal platform needs to power ML feature
                development across huge datasets while meeting strict latency
                and freshness requirements. In 2022 we began a partnership with
                Airbnb to adapt and implement its platform, Chronon, as the
                foundation for Shepherd—our next-generation ML feature
                engineering platform—with a view to open sourcing it. We’ve
                already used it to build a new production model for fraud
                detection with over 200 features, and so far the
                Shepherd-enabled model has outperformed our previous model,
                blocking tens of millions of dollars of additional fraud per
                year. While our work building Shepherd was specific to Stripe,
                we are generalizing the approach by contributing optimizations
                and new functionality to Chronon that anyone can use. This blog
                discusses the technical details of how we built Shepherd and how
                we are expanding the capabilities of Chronon to meet Stripe’s
                scale.
              </p>
            </div>
            <div className="mt-10">
              <div className="flex gap-5">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={User}
                  alt="User"
                />
                <span className="text-md font-bold">
                  <Link href={`/Articles/${id}`}>
                    Anas Yakubu <br />{" "}
                    <span className="font-light">Software Engineer</span>
                  </Link>
                </span>
              </div>
            </div>
            <div className="mt-10 flex justify-between">
              <Button>Read More</Button>
              <Button>Share Post</Button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <RecentHighlights />
          <Connected />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Read;
