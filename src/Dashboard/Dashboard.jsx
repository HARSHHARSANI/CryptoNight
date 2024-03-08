import React from "react";
import Sidenav from "../components/SideNav";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 ">
        {" "}
        <Sidenav />{" "}
      </div>
      <div className="col-span-10">
        {" "}
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Dashboard;
