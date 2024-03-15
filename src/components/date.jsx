import React from "react";

const Date = () => {
  return (
    <div className="flex my-3 ">
      <button
        className="border-2 px-2 border-gray-300 py-1 hover:bg-gray-400 "
        value={"1H"}
      >
        1H
      </button>
      <button
        className="border-2 px-2 border-gray-300 py-1 hover:bg-gray-400 "
        value={"1D"}
      >
        1D
      </button>
      <button
        className="border-2 px-2 border-gray-300 py-1 hover:bg-gray-400 "
        value={"1W"}
      >
        1W
      </button>
      <button
        className="border-2 px-2 border-gray-300 py-1 hover:bg-gray-400 "
        value={"1H"}
      >
        1M
      </button>
    </div>
  );
};

export default Date;
