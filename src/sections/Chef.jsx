import React from "react";

import { chef1, chef2, fd4, sign1, sign2, spoon } from "../assets";
import { SpinLogo } from "../components";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Chef = () => (
  <section className="relative z-20 overflow-hidden sm:padding-x font-cormorant text-golden sm:py-24 md:py-28 lg:py-32 xl:py-40 lap:py-64">
    <div
      id="wrapper-div"
      className="relative flex flex-col items-center justify-between rounded-xl bg-gradient-to-br from-black/80 via-black/80 to-black/20 shadow-bg_gold sm:p-9 md:p-10 lg:p-12 xl:p-16"
    >
      <div
        id="top-div"
        className="items-start justify-start w-full sm:flex-col md:flex md:gap-20 xl:gap-28"
      >
        <div className="flex flex-col items-start justify-start max-sm:w-[85%] md:w-1/2">
          <h1 className="font-bold text-white sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[35px] lap:text-[40px]">
            Chef's Word
          </h1>
          <img
            src={spoon}
            alt="spoon-icon"
            width={70}
            className="mt-1 sm:w-[40px] md:w-[45px] lg:w-[50px] xl:w-[60px] lap:w-[70px]"
          />

          <p className=" font-cormorant uppercase tracking-widest sm:mt-10 sm:text-[20px] md:mt-5 md:text-[20px] lg:mt-5 lg:text-[22px] xl:mt-6 xl:text-[26.5px] lap:mt-8 lap:text-[35px]">
            Creating exceptional dishes is our{" "}
            <span className="text-white">passion</span> and{" "}
            <span className="text-white">art</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-start sm:w-[85%] md:w-1/2">
          <p className="max-w-[600px] font-Montserrat font-bold text-white/90 sm:mt-6 sm:text-[18px] sm:font-medium sm:leading-[30px] md:mt-[8px] md:text-[15.5px] md:leading-[26px] lg:mt-[8px] lg:text-[15.5px] lg:leading-[26px] xl:mt-2 xl:text-[20px] xl:leading-[35px] lap:mt-3 lap:text-[24px] lap:leading-[45px] ">
            <span className="text-golden md:text-[20px] lg:text-[35px] xl:text-[40px] lap:text-[50px]">
              "
            </span>{" "}
            We strive to take you on a journey of flavors. Each plate is a{" "}
            <span className="text-golden">canvas</span>, and every ingredient a
            stroke of inspiration. We invite you to savor our culinary{" "}
            <span className="text-golden">creations</span> and share in the joy
            of extraordinary dining experiences.{" "}
            <span className="relative text-golden lg:top-2 lg:text-[35px] lg:leading-[13px] xl:top-1 xl:text-[40px] xl:leading-[20px] lap:top-2 lap:text-[50px] lap:leading-[24px]">
              "
            </span>
          </p>
        </div>
      </div>

      <div
        id="bottom-div"
        className="flex w-full items-center justify-between max-[1000px]:flex-col sm:mt-20 sm:gap-[45px] md:mt-[44px] md:gap-[30px] lg:mt-12 lg:gap-8 xl:mt-16 xl:gap-10 lap:mt-20"
      >
        <div className="relative flex items-center justify-between overflow-hidden rounded-lg px-10 pt-10 shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold sm:min-h-[230px] md:max-h-[160px] md:w-2/3 min-[1000px]:w-1/2 lg:max-h-[160px] lg:min-h-[160px] xl:min-h-[300px]">
          <div id="image-div" className="">
            <img
              src={chef2}
              alt=""
              width={250}
              height={250}
              className="object-cover object-center md:w-[320px] lg:w-[350px] xl:w-[335px] lap:w-[250px]"
            />
          </div>
          <div id="name-div" className="flex flex-col items-end justify-start">
            <p className="font-bold text-white sm:text-[25px] md:text-[20px] lg:text-[20px] xl:text-[24px] lap:text-[28px] ">
              Sarah Camron
            </p>
            <p className="font-alt sm:text-[18px] md:text-[14px] lg:text-[14px] xl:mt-1 xl:text-[18px] lap:mt-2 lap:text-[20px]">
              Chef & Founder
            </p>
            <img
              src={sign2}
              alt="sign_image"
              width={320}
              className="opacity-70 sm:mt-4 sm:max-h-[90px] md:mt-4 md:max-h-[50px] lg:mt-4 lg:max-h-[40px] xl:mt-6 xl:max-h-[85px] lap:max-h-[130px]"
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

        <div className="flex items-center justify-between overflow-hidden rounded-lg px-10 pt-10 shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold sm:min-h-[230px] md:max-h-[160px] md:w-2/3 min-[1000px]:w-1/2 lg:max-h-[160px] lg:min-h-[160px] xl:max-h-[300px] xl:min-h-[300px]">
          <div id="image-div" className="">
            <img
              src={chef1}
              alt="chef image"
              width={390}
              height={390}
              className="relative sm:-left-[20px] sm:w-[400px] md:-left-[20px] md:w-[380px] lg:-left-6 lg:w-[390px] xl:-bottom-1 xl:-left-4 xl:w-[485px] lap:-bottom-0 lap:-left-0 lap:w-[390px]"
            />
          </div>
          <div id="name-div" className="flex flex-col items-end justify-start">
            <p className="font-bold text-white sm:text-[25px] md:text-[20px] lg:text-[20px] xl:text-[24px] lap:text-[28px] ">
              Kevin Luo
            </p>
            <p className="text-left font-alt sm:text-[18px] md:text-[14px] lg:text-[14px] xl:mt-1 xl:text-[18px] lap:mt-2 lap:text-[20px]">
              Chef & Founder
            </p>
            <img
              src={sign1}
              alt="sign_image"
              width={350}
              className="sm:mt-4 sm:w-[280px] md:mt-4 md:w-[290px] lg:mt-4 lg:w-[290px] xl:mt-6 xl:w-[300px] lap:w-[350px]"
            />
          </div>
        </div>
      </div>

      <div className="absolute text-golden sm:-right-10 sm:-top-10 md:-right-12 md:-top-12 lg:-right-16 lg:-top-16 xl:-right-12 xl:-top-12 lap:-right-16 lap:-top-16">
        <SpinLogo />
      </div>
    </div>
  </section>
);

export default Chef;
