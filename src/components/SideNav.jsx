import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";

const Sidenav = () => {
  return (
    <div className="mr-4  h-full">
      <div className="text-2xl mt-6 ml-8 text-blue-600 ">
        <div className="flex items-center w-56  pl-2  mt-20 py-1  ">
          {" "}
          <div className="text-4xl">
            {" "}
            <RiMoneyPoundCircleFill />
          </div>{" "}
          <div className="ml-1 mr-4">Crypto Moon</div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex items-center w-48 border-2 pl-4  hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl">
            <MdSpaceDashboard />
            <button className="ml-1 mr-4"> Dashboard</button>
          </div>
          <div className="flex items-center w-48 border-2 pl-4  hover:border-gray-400 hover:bg-gray-200 mt-8 py-2 rounded-xl">
            <MdAttachMoney />
            <div className="ml-2"> Transaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
