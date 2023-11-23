import React from "react";
import InfoCard from "./InfoCard";
import { infoCards } from "../constants";

const InfoSection = () => {
  return (
    <section className="padding-x relative z-50 font-cormorant text-golden md:py-16 lg:py-20 md:pb-24 lg:pb-28 xl:pb-40 lap:py-32 lap:pb-64">
      <div className="flex flex-col rounded-xl bg-gradient-to-r from-black via-black/80 to-black/30 shadow-bg_gold md:gap-16 lg:gap-20 md:px-10 md:py-10 lg:px-12 lg:py-12 xl:gap-28 xl:px-16 xl:py-14 lap:gap-36 lap:p-20">
        <div className="flex items-start justify-start md:gap-16 lg:gap-20 xl:gap-24 lap:gap-28">
          <div className="w-[55%]">
            <h1 className="relative font-extrabold uppercase tracking-wide md:text-[22px] lg:text-[25px] md:leading-[40px] lg:leading-[44px] xl:text-[27px]  xl:leading-[48px] lap:-top-2 lap:text-[35px] lap:leading-[62px]">
              Discover how <span className="text-white">heritage</span> combines
              with innovative cooking
            </h1>
          </div>
          <div className="w-[45%]">
            <div className="font-Montserrat md:font-semibold lg:font-bold text-white/95 lg:text-[18px] md:text-[17px] md:leading-[30px] lg:leading-[30px] xl:text-[21px] xl:leading-[38px] lap:text-[24px] lap:leading-[45px]">
              <p className="">
                Every person's perfect dish is different. <br />
                That's why we offer{" "}
                <span className="text-golden">customizable</span> dishes to meet
                perfection every single time.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between md:gap-6 lg:gap-[28px] xl:gap-8 lap:gap-10 ">
          {infoCards.map((card, i) => (
            <div
              key={i}
              className="w-1/3 rounded-xl transition-all duration-300 hover:bg-black hover:shadow-sh_gold"
            >
              <InfoCard key={card.key} h1={card.h1} p={card.p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
