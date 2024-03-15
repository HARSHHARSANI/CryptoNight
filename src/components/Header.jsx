import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = ({ name }) => {
  return (
    <div className="flex justify-between items-center h-20">
      <h2 className="text-3xl ml-4 sm:ml-24" style={{ marginTop: "-30px" }}>
        {name ? name : "Dashboard"}
      </h2>
      <IoPersonCircleOutline className="text-5xl mr-4 sm:mr-36" />
    </div>
  );
};

export default Header;
