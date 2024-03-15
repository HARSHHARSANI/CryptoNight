import React from "react";
import Table from "./Table";

const ExportCSV = () => {
  return (
    <>
      <div className="flex items-center justify-end mt-2">
        <button className="bg-purple-400 px-4 py-3 rounded-full mr-16">
          Export CSV
        </button>{" "}
      </div>
      <div>
        <hr className="border-gray-300 mt-3" />
      </div>
    </>
  );
};

export default ExportCSV;
