import React from "react";
import { spoon } from "../assets";

const InfoCard = ({ h1, p }) => {
  return (
    <div className="flex flex-col items-start justify-between font-cormorant text-golden shadow-bg_gold md:rounded-lg md:p-6 lg:rounded-lg lg:p-[28px] xl:rounded-lg xl:p-8 lap:h-[270px] lap:rounded-xl lap:p-10">
      <img
        src={spoon}
        alt="spoon-icon"
        width={60}
        className="mb-1 md:w-[40px] lg:w-[45px] xl:w-[50px] 2lap:w-[60px]"
      />
      <h1 className="font-extrabold tracking-wide text-white md:text-[20px] lg:text-[22px] xl:text-[25px] 3lap:text-[32px] ">
        {h1}
      </h1>
      <p className="md:mt-3 lg:mt-4 xl:mt-5 xl:text-[20px] 2lap:mt-8 2lap:text-[24px] ">
        {p}
      </p>
    </div>
  );
};

export default InfoCard;
