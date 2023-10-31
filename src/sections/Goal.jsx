import React from "react";
import { G, hm1, knife1, spoon } from "../assets";
import { SpinLogo } from "../components";
import { ChevronRight } from "react-feather";
import { motion as m } from "framer-motion";

const AboutUs = () => (
  <section
    className={` padding-x relative bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616] font-cormorant text-golden lg:py-32 lg:pb-32 xl:py-16 xl:pb-40`}
    id="about-section"
  >
    <div className="relative z-10 flex items-center justify-start lg:left-1 xl:left-1 lap:-left-10 ">
      <div className="">
        <img
          src={knife1}
          alt="knife-image"
          className="md:h-[200px] lg:h-[330px] xl:h-[370px] lap:h-[400px]"
        />
      </div>
      <m.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        id="about-about-div"
        className="relative flex lg:w-2/3 flex-col items-start justify-between overflow-hidden rounded-xl bg-gradient-to-r from-black via-black/70 to-black/20 shadow-bg_gold md:px-7 md:py-6 lg:px-[37px] lg:py-[30px] xl:px-10 xl:py-8"
      >
        <h1 className="font-cormorant font-extrabold tracking-wider text-white md:text-[25px] lg:text-[30px] xl:text-[35px] lap:text-[40px] ">
          Our Goal
        </h1>
        <img
          src={spoon}
          alt="about_spoon"
          className="lg:w-[50px] xl:w-[60px] lap:w-[70px] md:w-[45px]"
          width={70}
        />
        <div className="w-[75%] text-left md:mt-8 lg:mt-10 xl:mt-12 lap:mt-16 ">
          <p className="font-extrabold uppercase md:text-[28px] lg:text-[32px] lg:leading-[45px] xl:text-[37px] xl:leading-[50px] lap:text-[45px] lap:leading-[65px]">
            <span className="text-white">"</span> Dining isn't just nourishing,
            but feeding the soul <span className="text-white">"</span>
          </p>
          <p className="text-white md:mt-6 lg:mt-8 lg:text-[22px] lg:leading-[32px] xl:mt-10 xl:text-[24px] xl:leading-[34px] lap:text-[30px]  lap:leading-[40px]">
            We are committed to creating{" "}
            <span className="text-golden">moments of joy</span> and connection
            through our carefully crafted dishes.
          </p>
        </div>
        <button
          type="button"
          className="rounded-full font-extrabold shadow-bg_gold hover:shadow-sh_gold lg:mt-10 lg:px-[10px] lg:py-[7px] lg:text-[20px] xl:mt-12 xl:px-4 xl:py-2 xl:text-[22px] lap:mt-16 lap:px-5 lap:py-2 lap:text-[25px]"
        >
          <div className="flex items-center justify-center lg:gap-2 xl:gap-3">
            <p>Our Story</p>
            <div className="">
              <ChevronRight />
            </div>
          </div>
        </button>
        <div className="absolute flex items-end justify-end max-[1120px]:hidden lg:-right-12 xl:-right-16 lap:-right-8 lap:bottom-0">
          <img
            src={hm1}
            alt="hotel-manager"
            width={650}
            className="relative lg:w-[450px] xl:w-[540px] lap:w-[650px]"
          />
        </div>
      </m.div>
    </div>

    <div className="absolute md:right-5 md:-top-12 lg:right-10 lg:-top-14 xl:-top-16 lap:-top-20">
      <SpinLogo />
    </div>
    <div className="absolute z-0 flex items-center justify-center lg:left-16 lg:top-[80px] xl:top-10 lap:left-5 lap:top-0 ">
      <img
        src={G}
        alt="G_overlay"
        className="lg:max-h-[510px] xl:max-h-[530px] lap:max-h-[700px]"
      />
    </div>
    <div
      className="pointer-events-none absolute z-0 rounded-full border-golden 
    md:-right-[275px] md:-top-[275px] md:h-[550px] md:w-[550px] md:border-[20px]
    lg:-right-[400px] lg:-top-[400px] lg:h-[700px] lg:w-[700px] lg:border-[25px] 
    xl:-right-[430px] xl:-top-[430px] xl:h-[800px] xl:w-[800px] xl:border-[30px] 
    lap:-right-[500px]  lap:-top-[500px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px] "
    ></div>
  </section>
);

export default AboutUs;
