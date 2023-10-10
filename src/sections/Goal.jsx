import React from "react";
import { G, hm1, knife1, spoon } from "../assets";
import { SpinLogo } from "../components";
import { ArrowRight, ChevronRight } from "react-feather";

const AboutUs = () => (
  <section
    className={` padding-x relative bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616] py-16 pb-40 font-cormorant text-golden`}
    id="about-section"
  >
    <div className="relative z-10 flex items-center justify-start -left-10 ">
      <div className="">
        <img src={knife1} alt="knife-image" className="min-h-[400px]" />
      </div>
      <div
        id="about-about-div"
        className="relative flex flex-col items-start justify-between w-2/3 px-10 py-8 overflow-hidden rounded-xl bg-gradient-to-r from-black via-black/70 to-black/20 shadow-bg_gold"
      >
        <h1 className="font-cormorant text-[40px] font-extrabold tracking-wider text-white ">
          Our Goal
        </h1>
        <img src={spoon} alt="about_spoon" className="" width={70} />
        <div className="mt-16 w-[75%] text-left text-[30px] leading-[40px] max-lg:font-cormorant">
          <p className="text-[45px] uppercase leading-[65px] font-extrabold ">
            Dining isn't just nourishing, but feeding the soul.
          </p>
          <p className="mt-10">
            We are committed to creating{" "}
            <span className="text-white">moments of joy</span> and connection
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
        <div className="absolute bottom-0 -right-8">
          <img src={hm1} alt="hotel-manager" className="min-h-[550px]" />
        </div>
      </div>
    </div>
    {/* 
    <div className="lg:padding-x relative z-10 flex items-center justify-start gap-10 pb-24 pt-12  max-lg:max-h-[250px]">
      

      <div className="flex justify-center w-1/11">
        <img src={knife} alt="about_knife" />
      </div>

      <div
        id="about-history-div"
        className="flex flex-col items-start justify-between mt-16 text-left w-5/11 "
      >
        <h1 className="font-cormorant text-[72px] max-lg:text-[50px] ">
          Our History
        </h1>
        <img src={spoon} alt="about_spoon" className="" />
        <p className="mt-16 font-alt max-lg:font-cormorant">
          Gericht Restaurant, founded in 2005 by Emily and David Bennett, brings
          the art of gastronomy to life. Inspired by their travels, they've
          crafted a dining haven where patrons relish not just food but
          unforgettable moments.
        </p>
        <button
          type="button"
          className="px-6 py-2 mt-16 font-extrabold text-black bg-golden hover:bg-white"
        >
          Know More
        </button>
      </div>
    </div> */}
    <div className="absolute -top-20 right-10">
      <SpinLogo />
    </div>
    <div className="absolute top-0 z-0 flex items-center justify-center left-5 ">
      <img
        src={G}
        alt="G_overlay"
        className="max-h-[700px]"
      />
    </div>
    <div className="pointer-events-none absolute -right-[500px] -top-[500px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden "></div>
  </section>
);

export default AboutUs;
