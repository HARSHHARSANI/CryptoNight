import React from "react";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="flex justify-between items-center ">
      <h2 className="text-4xl ml-20 font-semibold mt-8 ">Dashboard</h2>
      <CgProfile className="text-5xl mt-8 mr-36 font-thin" />
    </div>
  );
};

export default Header;
