import React from "react";
import { spoon } from "../assets";

const InfoCard = ({ h1, p }) => {
  return (
    <div className="flex h-[270px] flex-col items-start justify-between p-10 rounded-xl font-cormorant text-golden shadow-bg_gold">
      <img src={spoon} alt="spoon-icon" width={60} className="mb-1"/>
      <h1 className="text-[32px] font-extrabold tracking-wide text-white">
        {h1}
      </h1>
      <p className="mt-8 text-[24px] ">{p}</p>
    </div>
  );
};

export default InfoCard;
