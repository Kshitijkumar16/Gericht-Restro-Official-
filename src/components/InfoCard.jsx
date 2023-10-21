import React from "react";
import { spoon } from "../assets";

const InfoCard = ({ h1, p }) => {
  return (
    <div className="flex flex-col items-start justify-between font-cormorant text-golden shadow-bg_gold lg:rounded-lg xl:rounded-lg lg:p-[28px] xl:p-8 lap:h-[270px] lap:rounded-xl lap:p-10">
      <img
        src={spoon}
        alt="spoon-icon"
        width={60}
        className="mb-1 xl:w-[50px] 2lap:w-[60px] lg:w-[45px]"
      />
      <h1 className="3lap:text-[32px] font-extrabold tracking-wide text-white lg:text-[22px] xl:text-[25px] ">
        {h1}
      </h1>
      <p className="xl:mt-5 xl:text-[20px] lg:mt-4 2lap:mt-8 2lap:text-[24px] ">{p}</p>
    </div>
  );
};

export default InfoCard;
