import React from "react";
import { G, dining1 } from "../assets";

const Reservation = () => {
  return (
    <section className="lg:padding-x relative z-10 flex items-center justify-end lg:py-10 xl:py-16 lap:py-24">
      <div
        id="reservation-wrapper"
        className="flex w-4/5 items-center justify-center rounded-xl bg-gradient-to-r from-black/80 via-black/80 to-black/20 shadow-bg_gold lg:gap-10 lg:px-10 lg:py-10 xl:gap-12 xl:px-12 xl:py-12 lap:gap-16 lap:px-16 lap:py-16"
      >
        <div
          id="text-div"
          className="flex w-1/2 flex-col items-start justify-between xl:gap-2 lap:gap-10 "
        >
          <div>
            <h1 className=" font-cormorant font-bold uppercase tracking-wide text-golden lg:text-[24px] lg:leading-[34px] xl:text-[35px] xl:leading-[44px] lap:text-[45px] lap:leading-[50px]">
              Experience dining at it's finest
            </h1>
            <p className="font-cormorant tracking-wide text-white lg:mt-6 xl:mt-8 lg:text-[16px] xl:text-[18px] lg:leading-[23px] xl:leading-[27px] lap:mt-10 lap:text-[22px] lap:leading-[33px] ">
              Indugle in our rich diverse menu and enjoy a memorable dining
              experience.
            </p>
          </div>
          <div
            id="button-div"
            className="flex items-end justify-start lg:mt-6 xl:mt-8 xl:gap-5 lap:gap-6 lg:gap-4"
          >
            <button
              type="button"
              className="rounded-md font-cormorant font-extrabold tracking-wider text-white shadow-bg_white transition-all duration-300 ease-in-out hover:bg-black hover:text-golden hover:shadow-sh_gold lg:px-2 lg:py-[5px] xl:px-3 xl:py-[7px] xl:text-[18px] lap:px-4 lap:py-2 lap:text-[22px]"
            >
              Reserve
            </button>
            <button
              type="button"
              className="rounded-md font-cormorant font-extrabold tracking-wider text-golden shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold lg:px-2 lg:py-[5px] xl:px-3 xl:py-[7px] xl:text-[18px] lap:px-4 lap:py-2  lap:text-[22px] "
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
