import React from "react";
import { G, hm1, knife1, spoon } from "../assets";
import { SpinLogo } from "../components";
import { ChevronRight } from "react-feather";
import { motion as m } from "framer-motion";

const AboutUs = () => (
  <section
    className={` padding-x relative bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616] py-16 pb-40 font-cormorant text-golden`}
    id="about-section"
  >
    <div className="relative z-10 flex items-center justify-start xl:left-1 lap:-left-10 ">
      <div className="">
        <img
          src={knife1}
          alt="knife-image"
          className="xl:max-h-[370px] xl:min-h-[370px]  lap:max-h-[400px] lap:min-h-[400px]"
        />
      </div>
      <m.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        id="about-about-div"
        className="relative flex flex-col items-start justify-between w-2/3 px-10 py-8 overflow-hidden rounded-xl bg-gradient-to-r from-black via-black/70 to-black/20 shadow-bg_gold"
      >
        <h1 className="font-cormorant font-extrabold tracking-wider text-white xl:text-[35px] lap:text-[40px] ">
          Our Goal
        </h1>
        <img
          src={spoon}
          alt="about_spoon"
          className="xl:w-[60px] lap:w-[70px]"
          width={70}
        />
        <div className="w-[75%] text-left xl:mt-12 lap:mt-16 ">
          <p className="font-extrabold uppercase xl:text-[37px] xl:leading-[50px] lap:text-[45px] lap:leading-[65px]">
            <span className="text-white">"</span> Dining isn't just nourishing,
            but feeding the soul <span className="text-white">"</span>
          </p>
          <p className="mt-10 text-white xl:text-[24px] xl:leading-[34px] lap:text-[30px]  lap:leading-[40px]">
            We are committed to creating{" "}
            <span className="text-golden">moments of joy</span> and connection
            through our carefully crafted dishes.
          </p>
        </div>
        <button
          type="button"
          className="rounded-full font-extrabold shadow-bg_gold hover:shadow-sh_gold xl:mt-12 xl:px-4 xl:py-2 xl:text-[22px] lap:mt-16 lap:px-5 lap:py-2 lap:text-[25px]"
        >
          <div className="flex items-center justify-center gap-3">
            <p>Our Story</p>
            <div className="">
              <ChevronRight />
            </div>
          </div>
        </button>
        <div className="absolute xl:-right-6 xl:bottom-0 lap:-right-8 lap:bottom-0">
          <img
            src={hm1}
            alt="hotel-manager"
            width={650}
            className="relative left-10 xl:w-[540px] lap:w-[650px]"
          />
        </div>
      </m.div>
    </div>

    <div className="absolute right-10 xl:-top-16 lap:-top-20">
      <SpinLogo />
    </div>
    <div className="absolute z-0 flex items-center justify-center xl:top-10 lap:left-5 lap:top-0 ">
      <img
        src={G}
        alt="G_overlay"
        className="xl:max-h-[530px] lap:max-h-[700px]"
      />
    </div>
    <div className="pointer-events-none absolute z-0 rounded-full border-golden xl:-right-[430px] xl:-top-[430px] xl:h-[800px] xl:w-[800px] xl:border-[30px] lap:-right-[500px]  lap:-top-[500px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px] "></div>
  </section>
);

export default AboutUs;
