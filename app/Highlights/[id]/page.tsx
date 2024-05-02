import Nav from "../../../components/shared/Nav";
import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import HighlightImage from "../../assets/Notes-cuate.svg";
import RecentHighlights from "../../sections/RecentHighlights/RecentHighlights";
import Connected from "../../sections/Connected/Connected";
import Footer from "../../sections/Footer/Footer";
import User from "../../assets/user-1.jpg";
import Link from "next/link";
import "./page.scss";
import HighlightBlog from "../../sections/HighlightBlog/HighlightBlog";

const Read = async ({ params: { id } }: any) => {
  console.log(id);
  return (
    <div className="Read">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Nav />
        <div className="p-20 lg:py-10">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <h1
                className="text-black font-bold text-3xl"
                style={{ fontSize: "32px" }}
              >
                Amazon Pay
              </h1>
              <p className="mt-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                eius ab voluptate officia itaque quae, repudiandae, quod
                laboriosam deleniti tenetur, expedita in nobis facere dicta
                cupiditate impedit nulla distinctio recusandae eveniet autem
                ipsa esse. Provident unde exercitationem hic minus ad molestias
                sed, nemo autem deleniti illo impedit! Nesciunt, porro! Dolor.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                ipsam in laboriosam soluta voluptate laborum. Sunt, dolore cum,
                incidunt cumque quo dolorem voluptatum dicta vitae recusandae
                ullam nemo velit. Ullam praesentium, perferendis repellendus,
                explicabo inventore corrupti neque numquam nam omnis mollitia
                quo? Quaerat suscipit harum cumque dignissimos perferendis,
                repudiandae nostrum?
              </p>
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
            </div>
            {/* svg */}
            <div className="flex justify-center">
              <Image
                className="w-96"
                src={HighlightImage}
                alt="Highlight Image"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <RecentHighlights />
          <HighlightBlog />
          <Connected />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Read;
