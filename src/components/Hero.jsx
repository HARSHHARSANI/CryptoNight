import React from "react";
import Balance from "./Balance";
import CurrentPrice from "./CurrentPrice";
import RecentTransaction from "./RecentTransaction";
import Loans from "./Loans";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-slate-200 z-0" />
      <div className="relative z-10">
        <Balance />
        <div className="flex gap-1" style={{ marginTop: "-12px" }}>
          <CurrentPrice />
          <RecentTransaction />
        </div>
        <div className="flex gap-1" style={{ marginTop: "-12px" }}>
          <Loans />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
