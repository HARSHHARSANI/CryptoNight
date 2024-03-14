import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";

const Sidenav = () => {
  return (
    <div className="mr-4 h-full">
      <div className="text-2xl mt-6 ml-4">
        <div className="flex items-center w-full sm:w-auto pl-4  sm:mx-auto justify-center outline-none hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl">
          {" "}
          <div className="text-4xl">
            <RiMoneyPoundCircleFill />
          </div>
          <span className=" sm:hidden md:hidden lg:inline-block ml-2">CryptoNight</span>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex items-center w-full sm:w-auto pl-4  sm:mx-auto justify-center outline-none hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl ">
            <MdSpaceDashboard />
            <button className="ml-1 mr-4 outline-none">
              <span className="sm:hidden md:hidden lg:inline-block ">
                Dashboard
              </span>
            </button>
          </div>
          <div className="flex items-center w-full sm:w-auto pl-4  sm:mx-auto justify-center outline-none hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl">
            <MdAttachMoney />
            <button className="ml-1 mr-4 outline-none">
              <span className="sm:hidden md:hidden lg:inline-block ">
                Transaction
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
