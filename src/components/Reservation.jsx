import React from "react";
import { G, dining1 } from "../assets";

const Reservation = () => {
  return (
    <section className="relative z-10 flex items-center justify-end lg:padding-x xl:py-16 lap:py-24">
      <div
        id="reservation-wrapper"
        className="flex items-center justify-center w-4/5 rounded-xl bg-gradient-to-r from-black/80 via-black/80 to-black/20 shadow-bg_gold xl:gap-12 xl:px-12 xl:py-12 lap:gap-16 lap:px-16 lap:py-16"
      >
        <div
          id="text-div"
          className="flex flex-col items-start justify-between w-1/2 xl:gap-2 lap:gap-10 "
        >
          <div>
            <h1 className=" font-cormorant font-bold uppercase tracking-wide text-golden xl:text-[35px] xl:leading-[44px] lap:text-[45px] lap:leading-[50px]">
              Experience dining at it's finest
            </h1>
            <p className="font-cormorant tracking-wide text-white xl:mt-8 xl:text-[18px] xl:leading-[27px] lap:mt-10 lap:text-[22px] lap:leading-[33px] ">
              Indugle in our rich diverse menu and enjoy a memorable dining
              experience.
            </p>
          </div>
          <div
            id="button-div"
            className="flex items-end justify-start xl:mt-8 xl:gap-5 lap:gap-6"
          >
            <button
              type="button"
              className="rounded-md font-cormorant font-extrabold tracking-wider text-white shadow-bg_white transition-all duration-300 ease-in-out hover:bg-black hover:text-golden hover:shadow-sh_gold xl:px-3 xl:py-[7px] xl:text-[18px] lap:px-4 lap:py-2 lap:text-[22px]"
            >
              Reserve
            </button>
            <button
              type="button"
              className="rounded-md  font-cormorant font-extrabold tracking-wider text-golden shadow-bg_gold transition-all duration-300  ease-in-out hover:bg-black hover:shadow-sh_gold xl:px-3 xl:py-[7px] xl:text-[18px] lap:px-4 lap:py-2  lap:text-[22px] "
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
