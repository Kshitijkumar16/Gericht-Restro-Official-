import React from "react";
import { spoon } from "../assets";

const InfoCard = ({ h1, p }) => {
  return (
    <div className="flex lap:h-[270px] flex-col items-start justify-between lap:p-10 xl:p-8 lap:rounded-xl xl:rounded-lg font-cormorant text-golden shadow-bg_gold">
      <img src={spoon} alt="spoon-icon" width={60} className="mb-1 lap:w-[60px] xl:w-[50px]"/>
      <h1 className="lap:text-[32px] xl:text-[27px] font-extrabold tracking-wide text-white">
        {h1}
      </h1>
      <p className="lap:mt-8 xl:mt-6 lap:text-[24px] xl:text-[21px] ">{p}</p>
    </div>
  );
};

export default InfoCard;
