import React from "react";

import { chef, quote, sign, spoon } from "../assets";

const Chef = () => (
  <section className="granite_bg lg:padding-x pt-40 pb-40 text-white font-cormorant">
    <div className="padding-x flex justify-between items-center ">
      <div className=" lg:w-6/12 flex items-center justify-center">
        <img src={chef} alt="chef_image" className="w-[420px]" />
      </div>
      <div className="lg:w-6/12 flex flex-col justify-between items-start ">
        <h1 className="text-[30px]">Chef's Word</h1>
        <img src={spoon} alt="spoon-icon" width={50} className="mt-1" />
        <h1 className="font-cormorant text-golden mt-2 font-extrabold text-[75px]">
          What we believe in
        </h1>

        <div className="mt-12">
          <div className="flex gap-4 items-end justify-start">
            <img src={quote} alt="quote_image" width={50} />
            <p className="font-alt text-[17px] relative top-1">
              Creating exceptional dishes is my passion and my art.
            </p>
          </div>
          <p className="font-alt mt-3 text-[17px] leading-[30px] max-w-[600px]">
            We strive to take you on a journey of flavors, blending
            tradition with innovation. Each plate is a canvas, and every
            ingredient a stroke of inspiration. We invite you to savor our
            culinary creations and share in the joy of extraordinary dining
            experiences.
          </p>
        </div>

        <div className="mt-16">
          <p className="font-bold text-[28px] text-golden ">Kevin Luo</p>
          <p className="font-alt text-[25px] mt-2">Chef & Founder</p>
          <img src={sign} alt="sign_image" width={350} className="mt-6"/>
        </div>
      </div>
    </div>
  </section>
);

export default Chef;
