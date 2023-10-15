import React from "react";
import { G, hm1, knife1, spoon } from "../assets";
import { SpinLogo } from "../components";
import { ArrowRight, ChevronRight } from "react-feather";

const AboutUs = () => (
  <section
    className={` padding-x relative bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616] py-16 pb-40 font-cormorant text-golden`}
    id="about-section"
  >
    <div className="relative -left-10 z-10 flex items-center justify-start ">
      <div className="">
        <img src={knife1} alt="knife-image" className="min-h-[400px]" />
      </div>
      <div
        id="about-about-div"
        className="relative flex w-2/3 flex-col items-start justify-between overflow-hidden rounded-xl bg-gradient-to-r from-black via-black/70 to-black/20 px-10 py-8 shadow-bg_gold"
      >
        <h1 className="font-cormorant text-[40px] font-extrabold tracking-wider text-white ">
          Our Goal
        </h1>
        <img src={spoon} alt="about_spoon" className="" width={70} />
        <div className="mt-16 w-[75%] text-left text-[30px] leading-[40px] max-lg:font-cormorant">
          <p className="text-[45px] font-extrabold uppercase leading-[65px] ">
            <span className="text-white">"</span> Dining isn't just nourishing,
            but feeding the soul <span className="text-white">"</span>
          </p>
          <p className="mt-10 text-white">
            We are committed to creating{" "}
            <span className="text-golden">moments of joy</span> and connection
            through our carefully crafted dishes.
          </p>
        </div>
        <button
          type="button"
          className="mt-16 rounded-full px-5 py-2 text-[25px] font-extrabold shadow-bg_gold hover:shadow-sh_gold"
        >
          <div className="flex items-center justify-center gap-3">
            <p>Our Story</p>
            <div className="">
              <ChevronRight />
            </div>
          </div>
        </button>
        <div className="absolute -right-8 bottom-0">
          <img
            src={hm1}
            alt="hotel-manager"
            width={650}
            className="relative left-10"
          />
        </div>
      </div>
    </div>

    <div className="absolute -top-20 right-10">
      <SpinLogo />
    </div>
    <div className="absolute left-5 top-0 z-0 flex items-center justify-center ">
      <img src={G} alt="G_overlay" className="max-h-[700px]" />
    </div>
    <div className="pointer-events-none absolute -right-[500px] -top-[500px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden "></div>
  </section>
);

export default AboutUs;
