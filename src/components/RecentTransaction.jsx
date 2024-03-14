import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";

const RecentTransaction = () => {
  return (
    <>
      <div className="text-4xl pt-8 w-full mr-2 ">
        <div className="w-auto pl-2 bg-white mx-10 rounded-xl  h-96 ">
          {" "}
          <div className="mt-4 ml-4 flex justify-between">
            <div>
              <div className="text-sm font-semibold pt-4 text-gray-400">
                Recent Transaction
              </div>
              <div className=" font-bold  flex  gap-16 mt-8 ml-4 mb-4">
                <div className="flex  gap-5 mr-2  items-center ">
                  <div className="text-xl bg-gray-200 ml-3 rounded-full ">
                    <AiOutlineDollarCircle />{" "}
                  </div>
                  <div className=" flex flex-col">
                    <div className="text-xl">INR Deposit</div>{" "}
                    <span className="text-gray-400 text-sm">
                      2022-06-09 7:06 PM
                    </span>
                  </div>
                </div>
                <span className="text-lg ml-20 font-semibold sm:text-sm">
                  +Rs 81,123.10
                </span>
              </div>
              <div className=" font-bold  flex  gap-16 mt-4 ml-4 mb-4">
                <div className="flex  gap-5 mr-2 text-xl items-center">
                  <div className="text-xl bg-gray-200 ml-3 rounded-full ">
                    <SiBitcoinsv />{" "}
                  </div>
                  <div className=" flex flex-col">
                    <div className="text-xl">BTC Sell</div>{" "}
                    <span className="text-gray-400 text-sm">
                      2022-05-27 12:32 PM
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg ml-20 font-semibold sm:text-sm">
                    - 12.48513391 BTC
                  </span>
                </div>
              </div>
              <div className=" font-bold  flex  gap-16 mt-6 ml-4 mb-4">
                <div className="flex  gap-5 mr-2 text-xl items-center">
                  <div className="text-xl bg-gray-200 ml-3 rounded-full ">
                    <AiOutlineDollarCircle />{" "}
                  </div>
                  <div className=" flex flex-col">
                    <div className="text-xl">INR Deposit</div>{" "}
                    <span className="text-gray-400 text-sm">
                      2022-06-09 7:06 PM
                    </span>
                  </div>
                </div>
                <span className="text-lg ml-20">+Rs 81,123.10</span>
              </div>
              <div className="mx-auto">
                <button className="mx-8 bg-gray-100 w-full text-base py-1 ">
                  View All{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentTransaction;
