import React from "react";

import { chef, quote, sign, spoon } from "../assets";
import { SpinLogo } from "../components";

const Chef = () => (
  <section className="relative pt-40 pb-40 text-white granite_bg lg:padding-x font-cormorant">
    <div className="flex items-center justify-between padding-x ">
      <div className="flex items-center justify-center lg:w-6/12">
        <img src={chef} alt="chef_image" className="w-[420px]" />
      </div>
      <div className="flex flex-col items-start justify-between lg:w-6/12 ">
        <h1 className="text-[30px]">Chef's Word</h1>
        <img src={spoon} alt="spoon-icon" width={50} className="mt-1" />
        <h1 className="mt-2 font-cormorant text-[75px] font-extrabold text-golden">
          What we believe in
        </h1>

        <div className="mt-12">
          <div className="flex items-end justify-start gap-4">
            <img src={quote} alt="quote_image" width={50} />
            <p className="relative top-1 font-alt text-[17px]">
              Creating exceptional dishes is my passion and my art.
            </p>
          </div>
          <p className="mt-3 max-w-[600px] font-alt text-[17px] leading-[30px]">
            We strive to take you on a journey of flavors, blending tradition
            with innovation. Each plate is a canvas, and every ingredient a
            stroke of inspiration. We invite you to savor our culinary creations
            and share in the joy of extraordinary dining experiences.
          </p>
        </div>

        <div className="mt-16">
          <p className="text-[28px] font-bold text-golden ">Kevin Luo</p>
          <p className="mt-2 font-alt text-[25px]">Chef & Founder</p>
          <img src={sign} alt="sign_image" width={350} className="mt-6" />
        </div>
      </div>
    </div>

    <div className="absolute text-golden top-10 right-10">
      <SpinLogo  />
    </div>
  </section>
);

export default Chef;
