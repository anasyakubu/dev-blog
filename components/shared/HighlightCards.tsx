import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
const HighlightCards = () => {
  return (
    <div className="HighlightCards">
      <div className="bg-white text-black rounded-xl shadow-lg p-3 py-10 m-2">
        <div className="">
          <h6 className="text-xl font-semibold text-blue-600">
            <Link href="/">Streamline your checkout</Link>
          </h6>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            id quis est rerum quisquam? Perspiciatis nihil unde at voluptatibus
            omnis.
          </p>
          <div className="mt-5">
            <Button>
              <Link href="/">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCards;
