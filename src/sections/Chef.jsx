import React from "react";

import { chef1, chef2, fd4, sign1, sign2, spoon } from "../assets";
import { SpinLogo } from "../components";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Chef = () => (
  <section className="relative z-20 overflow-hidden lg:padding-x lap:py-64 xl:py-40 font-cormorant text-golden">
    <div
      id="wrapper-div"
      className="relative flex flex-col items-center justify-between p-16 rounded-xl bg-gradient-to-br from-black/80 via-black/80 to-black/20 shadow-bg_gold"
    >
      <div
        id="top-div"
        className="flex items-start justify-start w-full gap-28"
      >
        <div className="flex flex-col items-start justify-start w-1/2">
          <h1 className="lap:text-[40px] xl:text-[35px] font-bold text-white">Chef's Word</h1>
          <img src={spoon} alt="spoon-icon" width={70} className="mt-1 lap:w-[70px] xl:w-[60px]" />

          <p className=" lap:mt-8 xl:mt-6 font-cormorant lap:text-[35px] xl:text-[26.5px] uppercase tracking-widest">
            Creating exceptional dishes is our{" "}
            <span className="text-white">passion</span> and{" "}
            <span className="text-white">art</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-start w-1/2">
          <p className="lap:mt-3 xl:mt-2 max-w-[600px] font-Montserrat lap:text-[24px] xl:text-[20px] font-bold lap:leading-[45px] xl:leading-[35px] text-white/90 ">
            <span className="lap:text-[50px] xl:text-[40px] text-golden">"</span> We strive to take
            you on a journey of flavors. Each plate is a{" "}
            <span className="text-golden">canvas</span>, and every ingredient a
            stroke of inspiration. We invite you to savor our culinary{" "}
            <span className="text-golden">creations</span> and share in the joy
            of extraordinary dining experiences.{" "}
            <span className="relative lap:top-2 xl:top-1 lap:text-[50px] xl:text-[40px] lap:leading-[24px] xl:leading-[20px] text-golden">
              "
            </span>
          </p>
        </div>
      </div>

      <div
        id="bottom-div"
        className="flex items-center justify-between w-full gap-10 lap:mt-20 xl:mt-16"
      >
        <div className="relative flex max-h-[300px] min-h-[300px] w-1/2 items-center justify-between overflow-hidden rounded-lg px-10 pt-10 shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold">
          <div id="image-div" className="">
            <img
              src={chef2}
              alt=""
              width={250}
              height={250}
              className="object-cover object-center lap:w-[250px] xl:w-[335px]"
            />
          </div>
          <div id="name-div" className="flex flex-col items-end justify-start">
            <p className="lap:text-[28px] xl:text-[24px] font-bold text-white ">Sarah Camron</p>
            <p className="lap:mt-2 xl:mt-1 font-alt lap:text-[20px] xl:text-[18px]">Chef & Founder</p>
            <img
              src={sign2}
              alt="sign_image"
              width={320}
              className="mt-6 lap:max-h-[130px] xl:max-h-[85px] opacity-70"
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
              className="lap:w-[390px] xl:w-[485px] relative lap:-left-0 lap:-bottom-0 xl:-left-4 xl:-bottom-1"
            />
          </div>
          <div id="name-div" className="flex flex-col items-end justify-start">
            <p className="lap:text-[28px] xl:text-[24px] font-bold text-white ">Kevin Luo</p>
            <p className="lap:mt-2 font-alt lap:text-[20px] xl:text-[18px] xl:mt-1">Chef & Founder</p>
            <img src={sign1} alt="sign_image" width={350} className="mt-6 lap:w-[350px] xl:w-[300px]" />
          </div>
        </div>
      </div>

      <div className="absolute lap:-right-16 lap:-top-16 xl:-right-12 xl:-top-12 text-golden">
        <SpinLogo />
      </div>
    </div>

  </section>
);

export default Chef;
