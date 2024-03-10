import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CurrentPrice = () => {
  return (
    <div className="text-4xl pt-8 w-full mr-20">
      <div className="w-full pl-4 bg-white mx-10 rounded-3xl  h-96 ">
        <div className="mt-4 ml-4 flex justify-between">
          <div>
            <div className="text-sm font-semibold pt-4">Current Price</div>
            <div className=" font-bold text-3xl flex mt-3">
              ₹26,670.25{" "}
              <span className="text-green-500 text-sm mt-3 ml-3">
                <MdArrowOutward />
              </span>
              <span className="text-sm items-center mt-3 ml-1"> 0.04%</span>
            </div>
          </div>
          <div>
            <button className="bg-gray-300 hover:bg-green-500 px-5 rounded-2xl py-1.5   outline-none mr-6 mt-6">
              <spam className="text-md">Buy</spam>
            </button>
            <button className="bg-gray-300 hover:bg-red-500 px-5 rounded-2xl py-1.5   outline-none mr-6 mt-6">
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPrice;
