import React from "react";
import InfoCard from "./InfoCard";
import { infoCards } from "../constants";

const InfoSection = () => {
  return (
    <section className="padding-x relative z-50 font-cormorant text-golden sm:py-14 sm:pb-20 md:py-16 md:pb-24 lg:py-20 lg:pb-28 xl:pb-40 lap:py-32 lap:pb-64">
      <div className="flex flex-col rounded-xl bg-gradient-to-r from-black via-black/80 to-black/30 shadow-bg_gold sm:gap-14 sm:px-9 sm:py-9 md:gap-16 md:px-10 md:py-10 lg:gap-20 lg:px-12 lg:py-12 xl:gap-28 xl:px-16 xl:py-14 lap:gap-36 lap:p-20">
        <div className="flex items-start justify-start sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24 lap:gap-28">
          <div className="sm:w-[60%] md:w-[55%]">
            <h1 className="relative font-extrabold uppercase tracking-wide sm:text-[19px] sm:leading-[36px] md:text-[22px] md:leading-[40px] lg:text-[25px] lg:leading-[44px] xl:text-[27px]  xl:leading-[48px] lap:-top-2 lap:text-[35px] lap:leading-[62px]">
              Discover how <span className="text-white">heritage</span> combines
              with innovative cooking
            </h1>
          </div>
          <div className="sm:w-[55%] md:w-[45%]">
            <div className="font-Montserrat text-white/95 sm:text-[13px] sm:font-semibold sm:leading-[28px] md:text-[17px] md:font-semibold md:leading-[30px] lg:text-[18px] lg:font-bold lg:leading-[30px] xl:text-[21px] xl:leading-[38px] lap:text-[24px] lap:leading-[45px]">
              <p className="">
                Every person's perfect dish is different. <br />
                That's why we offer{" "}
                <span className="text-golden">customizable</span> dishes to meet
                perfection every single time.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between max-[718px]:w-[100%]  max-[718px]:flex-col sm:gap-5 md:gap-6 lg:gap-[28px] xl:gap-8 lap:gap-10 ">
          {infoCards.map((card, i) => (
            <div
              key={i}
              className="w-1/3 rounded-xl transition-all duration-300 hover:bg-black hover:shadow-sh_gold max-[718px]:w-[100%]"
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
