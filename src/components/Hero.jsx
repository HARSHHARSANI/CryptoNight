import React from "react";
import Balance from "./Balance";
import CurrentPrice from "./CurrentPrice";
import RecentTransaction from "./RecentTransaction";
import Loans from "./Loans";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="absolute sm:flex  sm:flex-col inset-0 bg-slate-200 z-0" />
      <div className="relative sm:flex sm:flex-col z-10">
        <Balance />
        <div
          className="flex sm:flex-col md:flex-col lg:flex-col xl:flex-row xl:justify-around xl:w-450  sm:gap-4"
          style={{ marginTop: "-12px" }}
        >
          <div className="mb-4 sm:mb-0">
            <CurrentPrice />
          </div>
          <div className="mb-4 sm:mb-0" style={{ marginLeft: "-60px" }}>
            <RecentTransaction />
          </div>
        </div>

        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row  sm:gap-4 justify-between ">
          <div className="mb-4 sm:mb-0">
            <Loans />
          </div>
          <div className="mb-4 sm:mb-0 ">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
