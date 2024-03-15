import React from "react";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import ExportCSV from "../components/ExportCSV";
import Table from "../components/Table";

const Transaction = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <SideNav />
      </div>
      <div className="col-span-10">
        <Header name={"Transaction"} />
        <ExportCSV />
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
