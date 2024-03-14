import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { GrSubtractCircle } from "react-icons/gr";
import Date from "./Date";
import Graph from "./Graph";
import Times from "./Times";

const CurrentPrice = () => {
  return (
    <div className="text-4xl pt-8 w-full mr-2 ">
      <div className="w-auto pl-2 bg-white mx-10 rounded-xl  h-96 ">
        <div className="mt-4 ml-4 flex justify-between ">
          <div>
            <div className="text-sm font-semibold pt-4 text-gray-400">
              Current Price
            </div>
            <div className=" font-bold text-3xl flex mt-3">
              ₹26,670.25{" "}
              <span className="text-green-500 text-sm mt-3 ml-3">
                <MdArrowOutward />
              </span>
              <span className="text-sm items-center mt-3 ml-1"> 0.04%</span>
            </div>
          </div>
          <div className=" w-60 flex">
            <div className="">
              <button className="bg-gray-300 hover:bg-green-500 px-5 rounded-2xl py-1 outline-none mr-3 mt-6 ">
                <spam className="text-[22px] text-center items-center flex gap-2">
                  <div className="bg-white rounded-full outline-none m-0 p-0 text-gray-600">
                    <CiCirclePlus />
                  </div>
                  Buy
                </spam>
              </button>
            </div>
            <div>
              {" "}
              <button className="bg-gray-300 hover:bg-red-500 px-5 rounded-2xl py-1   outline-none mr-6 mt-6">
                <spam className="text-[22px] text-center items-center flex gap-2">
                  {" "}
                  <div className="bg-white rounded-full outline-none m-0 p-0 text-gray-600">
                    <GrSubtractCircle />
                  </div>
                  Sell
                </spam>
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="text-base ml-80 sm:ml-60 md:ml-96 lg:ml-[600px]">
          {" "}
          <Date />
        </div>
        <div>
          <Graph />
        </div>
        <div>
          <Times />
        </div>
      </div>
    </div>
  );
};

export default CurrentPrice;
