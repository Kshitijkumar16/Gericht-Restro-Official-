import React from "react";
import InfoCard from "./InfoCard";
import { infoCards } from "../constants";

const InfoSection = () => {
  return (
    <section className="relative z-50 py-32 pb-64 padding-x font-cormorant text-golden">
      <div className="flex flex-col p-20 gap-36 rounded-xl bg-gradient-to-r from-black via-black/80 to-black/30 shadow-bg_gold">
        <div className="flex items-start justify-start gap-28">
          <div className="w-[55%]">
            <h1 className="relative -top-2 text-[35px] font-extrabold uppercase leading-[62px] tracking-wide">
              Discover how <span className="text-white">heritage</span> combines
              with innovative cooking
            </h1>
          </div>
          <div className="w-[45%]">
            <div className="font-Montserrat text-[24px] font-bold leading-[45px] text-white/95">
              <p className="">
                Every person's perfect dish is different. <br />
                That's why we offer{" "}
                <span className="text-golden">customizable</span> dishes to meet
                perfection every single time.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-1 gap-10 ">
          {infoCards.map((card, i) => (
            <div key={i} className="w-1/3 transition-all duration-300 hover:shadow-sh_gold rounded-xl hover:bg-black">
              <InfoCard key={card.key} h1={card.h1} p={card.p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
