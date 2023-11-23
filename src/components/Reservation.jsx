import React from "react";
import { G, dining1 } from "../assets";

const Reservation = () => {
  return (
    <section className="max-md:-right-10 max-md:w-[90%] md:padding-x relative z-10 flex items-center justify-end sm:py-7 md:py-8 lg:py-10 xl:py-16 lap:py-24">
      <div
        id="reservation-wrapper"
        className="flex w-4/5 items-center justify-center rounded-xl bg-gradient-to-r from-black/80 via-black/80 to-black/20 shadow-bg_gold sm:gap-8 sm:px-7 sm:py-7 md:gap-8 md:px-8 md:py-8 lg:gap-10 lg:px-10 lg:py-10 xl:gap-12 xl:px-12 xl:py-12 lap:gap-16 lap:px-16 lap:py-16"
      >
        <div
          id="text-div"
          className="flex w-1/2 flex-col items-start justify-between xl:gap-2 lap:gap-10 "
        >
          <div>
            <h1 className=" font-cormorant font-bold uppercase tracking-wide text-golden sm:text-[18px] sm:leading-[30px] md:text-[24px] md:leading-[34px] xl:text-[35px] xl:leading-[44px] lap:text-[45px] lap:leading-[50px]">
              Experience dining at it's finest
            </h1>
            <p className="font-cormorant tracking-wide text-white sm:mt-5 sm:text-[12px] md:mt-6 md:text-[16px] md:leading-[23px] lg:mt-6 lg:text-[16px] xl:mt-8 xl:text-[18px] xl:leading-[27px] lap:mt-10 lap:text-[22px] lap:leading-[33px] ">
              Indugle in our rich diverse menu and enjoy a memorable dining
              experience.
            </p>
          </div>
          <div
            id="button-div"
            className="flex items-end justify-start sm:mt-4 sm:gap-4 md:mt-5 md:gap-4 lg:mt-6 lg:gap-4 xl:mt-8 xl:gap-5 lap:gap-6"
          >
            <button
              type="button"
              className="rounded-md border-[1px] border-golden bg-gradient-to-br from-white to-golden font-cormorant font-extrabold tracking-widest text-black shadow-bg_white transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold sm:px-[7px] sm:py-[4px] md:px-2 md:py-[5px] lg:px-2 lg:py-[5px] xl:px-3 xl:py-[7px] xl:text-[18px] lap:px-4 lap:py-2 lap:text-[22px]"
            >
              Reserve
            </button>
            <button
              type="button"
              className="rounded-md font-cormorant font-extrabold tracking-wider text-white shadow-bg_white transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_white sm:px-[7px] md:px-2 sm:py-[4px] md:py-[5px] lg:px-2 lg:py-[5px] xl:px-3 xl:py-[7px] xl:text-[18px] lap:px-4 lap:py-2  lap:text-[22px] "
            >
              Visit
            </button>
          </div>
        </div>
        <div className="w-1/2 ">
          <img
            src={dining1}
            alt="food-image"
            className="rounded-lg shadow-bg_gold"
          />
        </div>
      </div>
    </section>
  );
};

export default Reservation;
