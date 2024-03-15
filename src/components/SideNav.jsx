import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { FaMoneyBill1 } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";

const Sidenav = () => {
  const navigate = useNavigate();
  return (
    <div className="mr-4 h-full">
      <div className="text-2xl mt-6 ml-4">
        <div className="flex items-center w-full sm:w-auto pl-4  sm:mx-auto justify-center outline-none hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl">
          {" "}
          <div className="text-4xl">
            <RiMoneyPoundCircleFill />
          </div>
          <span className=" sm:hidden md:hidden lg:inline-block ml-2">
            CryptoNight
          </span>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex items-center w-full sm:w-auto pl-4  sm:mx-auto justify-center outline-none hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl ">
            <MdSpaceDashboard />
            <button
              className="ml-1 mr-4 outline-none"
              onClick={() => navigate("/")}
            >
              <span className="sm:hidden md:hidden lg:inline-block ">
                Dashboard
              </span>
            </button>
          </div>
          <div className="flex items-center w-full sm:w-auto pl-4  sm:mx-auto justify-center outline-none hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl">
            <MdAttachMoney />
            <button
              className="ml-1 mr-4 outline-none"
              onClick={() => {
                navigate("/transaction");
              }}
            >
              <span className="sm:hidden md:hidden lg:inline-block ">
                Transaction
              </span>
            </button>
          </div>
          <div className="flex items-center  sm:w-auto pl-4  sm:mx-auto justify-start outline-none hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl ">
            <FaMoneyBill1 />
            <button
              className="ml-1 mr-4 outline-none w-[104px]"
              onClick={() => navigate("/transaction")}
            >
              <span className="sm:hidden md:hidden lg:inline-block   ml-4">
                Loans
              </span>
            </button>
          </div>
          <div className="flex items-center w-full sm:w-auto pl-4  sm:mx-auto justify-center outline-none hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl">
            <GrResources />
            <button
              className="ml-1 mr-4 outline-none"
              onClick={() => navigate("/transaction")}
            >
              <span className="sm:hidden md:hidden lg:inline-block ">
                Resources
              </span>
            </button>
          </div>
          <div className="flex items-center w-full  sm:w-auto pl-4 sm:mx-auto justify-center outline-none hover:border-gray-400 hover:bg-gray-200 mt-64 py-2 rounded-xl">
            <MdSupportAgent />
            <button
              className="ml-1 mr-4 outline-none"
              onClick={() => navigate("/contactus")}
            >
              <span className="sm:hidden md:hidden lg:inline-block">
                Support
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
