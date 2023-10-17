import React from "react";
import InfoCard from "./InfoCard";
import { infoCards } from "../constants";

const InfoSection = () => {
  return (
    <section className="relative z-50 lap:pb-64 xl:pb-40 lap:py-32 padding-x font-cormorant text-golden">
      <div className="flex flex-col lap:p-20 xl:py-14 xl:px-16 lap:gap-36 xl:gap-28 rounded-xl bg-gradient-to-r from-black via-black/80 to-black/30 shadow-bg_gold">
        <div className="flex items-start justify-start lap:gap-28 xl:gap-24">
          <div className="w-[55%]">
            <h1 className="relative lap:-top-2 font-extrabold uppercase tracking-wide xl:text-[27px] xl:leading-[48px] lap:text-[35px] lap:leading-[62px]">
              Discover how <span className="text-white">heritage</span> combines
              with innovative cooking
            </h1>
          </div>
          <div className="w-[45%]">
            <div className="font-Montserrat lap:text-[24px] xl:text-[21px] font-bold lap:leading-[45px] xl:leading-[38px] text-white/95">
              <p className="">
                Every person's perfect dish is different. <br />
                That's why we offer{" "}
                <span className="text-golden">customizable</span> dishes to meet
                perfection every single time.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-1 lap:gap-10 xl:gap-8 ">
          {infoCards.map((card, i) => (
            <div
              key={i}
              className="w-1/3 transition-all duration-300 rounded-xl hover:bg-black hover:shadow-sh_gold"
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
