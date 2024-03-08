import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CurrentPrice = () => {
  return (
    <div className="text-4xl pt-8 w-full mr-20">
      <div className="w-full pl-4 bg-white mx-10 rounded-3xl  h-96 ">
        <div className="mt-4 ml-4">
          <div className="text-sm font-semibold pt-4">Current Price</div>
          <div className="text-lg font-medium flex mt-3">
            ₹26,670.25{" "}
            <span className="text-green-500">
              <MdArrowOutward />
            </span>
            0.04%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPrice;
