import React from "react";
import Balance from "./Balance";
import CurrentPrice from "./CurrentPrice";

const Hero = () => {
  return (
    <div className="bg-slate-200 h-screen mt-4">
      <Balance />
      <div className="flex gap-4">
        <CurrentPrice />
        <CurrentPrice />
      </div>
    </div>
  );
};

export default Hero;
