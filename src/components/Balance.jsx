import React from "react";
import { IoMdDownload } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Balance = () => {
  return (
    <div className="text-4xl pt-8">
      <div className="pl-4 bg-white mx-4 sm:items-center  sm:mx-10 rounded-3xl sm:w-204 h-auto grid grid-cols-12">
        <div className="col-span-12 sm:col-span-3   text-2xl pt-4 pl-4 flex flex-col justify-center sm:justify-start">
          <div className="flex items-center justify-center sm:justify-start">
            <div>Total Portfolio Value</div>{" "}
            <div className="ml-2 text-gray-700">
              <IoIosInformationCircleOutline />
            </div>{" "}
          </div>
          <div className="mt-4 text-center sm:text-left">₹ 112,312.24</div>
        </div>
        <div className="col-span-12 sm:col-span-3 text-2xl pt-4 pl-4 flex flex-col justify-center sm:justify-start">
          <div className="text-center sm:text-left">Wallet Balances</div>
          <div className="mt-4 flex justify-center sm:justify-start">
            <div>22.39401000</div>
            <div className="ml-2 bg-gray-200 rounded-full text-sm items-center pt-1 px-2 hover:bg-gray-300">
              BTC
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-3 text-2xl pt-4 pl-4 sm:mt-8 flex flex-col justify-center sm:justify-start">
          <div className="text-center sm:text-left mt-4">₹ 1,300.00 INR</div>
        </div>
        <div className="col-span-12 sm:col-span-3 text-2xl pt-4 sm:pt-2 flex justify-center sm:justify-start">
          <div className="flex flex-col gap-2 ml-4 items-center text-center">
            <button className="bg-purple-400 xl:w-44 hover:bg-purple-500 px-4 rounded-full py-2 outline-none sm:w-16 md:w-16 lg:w-16  ">
              <div className="flex items-center justify-center">
                <IoMdDownload />
                <span className="ml-2 font-semibold sm:hidden lg:hidden md:hidden xl:inline-block">
                  Deposit
                </span>
              </div>
            </button>
            <button className="bg-purple-400 xl:w-44 hover:bg-purple-500 px-4 rounded-full py-2 outline-none sm:w-16 md:w-16  lg:w-16">
              <div className="flex items-center justify-center">
                <MdFileUpload />
                <span className="ml-2 font-semibold sm:hidden lg:hidden md:hidden xl:inline-block">
                  Withdraw
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
