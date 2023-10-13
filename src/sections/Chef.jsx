import React from "react";

import { chef1, chef2, sign1, sign2, spoon } from "../assets";
import { SpinLogo } from "../components";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Chef = () => (
  <section className="lg:padding-x relative  z-20 overflow-hidden  py-64  font-cormorant text-golden">
    <div
      id="wrapper-div"
      className="relative flex flex-col items-center justify-between rounded-xl bg-gradient-to-br from-black via-black/80 to-black/20 p-16 shadow-bg_gold"
    >
      <div
        id="top-div"
        className="flex w-full items-start justify-start gap-28"
      >
        <div className="flex w-1/2 flex-col items-start justify-start">
          <h1 className="text-[40px] font-bold text-white">Chef's Word</h1>
          <img src={spoon} alt="spoon-icon" width={70} className="mt-1" />

          <p className=" mt-8 font-cormorant text-[35px] uppercase tracking-widest">
            Creating exceptional dishes is our{" "}
            <span className="text-white">passion</span> and{" "}
            <span className="text-white">art</span>
          </p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-start">
          <p className="mt-3 max-w-[600px] font-Montserrat text-[24px] font-bold leading-[45px] text-white/90 ">
            <span className="text-[50px] text-golden">"</span> We strive to take
            you on a journey of flavors. Each plate is a{" "}
            <span className="text-golden">canvas</span>, and every ingredient a
            stroke of inspiration. We invite you to savor our culinary{" "}
            <span className="text-golden">creations</span> and share in the joy
            of extraordinary dining experiences.{" "}
            <span className="relative top-2 text-[50px] leading-[24px] text-golden">
              "
            </span>
          </p>
        </div>
      </div>

      <div
        id="bottom-div"
        className="mt-20 flex w-full items-center justify-between gap-10"
      >
        <div className="relative flex max-h-[300px] min-h-[300px] w-1/2 items-center justify-between overflow-hidden rounded-lg px-10 pt-10 shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold">
          <div id="image-div" className="">
            <img
              src={chef2}
              alt=""
              width={250}
              height={250}
              className="object-cover object-center "
            />
          </div>
          <div id="name-div" className="flex flex-col items-end justify-start">
            <p className="text-[28px] font-bold text-white ">Sarah Camron</p>
            <p className="mt-2 font-alt text-[20px]">Chef & Founder</p>
            <img
              src={sign2}
              alt="sign_image"
              width={320}
              className="mt-6 max-h-[130px] opacity-70"
            />
          </div>
          {/* <div
            id="absolute-links-div"
            className="absolute flex items-center justify-center gap-2"
          >
            <div className="h-[2px] w-[40px] bg-golden"></div>
            <BsFacebook />
            <div className="h-[2px] w-[20px] bg-golden"></div>
            <BsInstagram />
            <div className="h-[2px] w-[20px] bg-golden"></div>
            <BsTwitter />
            <div className="h-[2px] w-[40px] bg-golden"></div>
          </div> */}
        </div>

        <div className="flex max-h-[300px] min-h-[300px] w-1/2 items-center justify-between overflow-hidden rounded-lg px-10 pt-10 shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold">
          <div id="image-div" className="">
            <img
              src={chef1}
              alt="chef image"
              width={390}
              height={390}
              className=""
            />
          </div>
          <div id="name-div" className="flex flex-col items-end justify-start">
            <p className="text-[28px] font-bold text-white ">Kevin Luo</p>
            <p className="mt-2 font-alt text-[20px]">Chef & Founder</p>
            <img src={sign1} alt="sign_image" width={350} className="mt-6  " />
          </div>
        </div>
      </div>

      <div className="absolute -right-16 -top-16 text-golden">
        <SpinLogo />
      </div>
    </div>
  </section>
);

export default Chef;
