import React from "react";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineArrowUpward } from "react-icons/md";

import { IoIosInformationCircleOutline } from "react-icons/io";

const Balance = () => {
  return (
    <div className="text-4xl pt-8">
      <div className="pl-4 bg-white w-204 mx-10 rounded-3xl h-40 grid grid-cols-12">
        <div className="col-span-3 text-2xl pt-4 pl-4">
          <div className="flex items-center">
            <div>Total Portfolio Value</div>{" "}
            <div className="ml-2 text-gray-700">
              <IoIosInformationCircleOutline />
            </div>{" "}
          </div>
          <div className="mt-4">₹ 112,312.24</div>
        </div>
        <div className="col-span-3 text-2xl pt-4 pl-4">
          <div> Wallet Balances</div>
          <div className="mt-4 flex">
            <div>22.39401000</div>
            <div className="ml-2 bg-gray-200 rounded-full text-sm items-center pt-1 px-2 hover:bg-gray-300">
              BTC
            </div>
          </div>
        </div>
        <div className="col-span-3 text-2xl pt-4 pl-4 mt-8">
          <div className="mt-4">₹ 1,300.00 INR</div>
        </div>
        <div className="col-span-3 text-2xl pt-4 pl-4 mt-2">
          <div className="flex gap-2">
            {" "}
            <button className="bg-purple-400 hover:bg-purple-500 px-4 rounded-full py-2 ">
              <div className="flex items-center">
                {" "}
                <IoMdDownload />
                <span className="ml-2"> Deposite</span>
              </div>
            </button>
            <button className="bg-purple-400 hover:bg-purple-500 px-4 rounded-full py-2 ">
              <div className="flex items-center">
                {" "}
                <MdOutlineArrowUpward />
                <span className="ml-2"> Withdraw</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
