import React from "react";
import { G, dining1 } from "../assets";

const Reservation = () => {
  return (
    <section className="lg:padding-x relative z-10 flex items-center justify-end py-24">
      <div
        id="reservation-wrapper"
        className="flex w-4/5 items-center justify-center gap-16 rounded-xl bg-gradient-to-r from-black/80 via-black/80 to-black/20 px-16 py-16 shadow-bg_gold"
      >
        <div
          id="text-div"
          className="flex w-1/2 flex-col items-start justify-between gap-10 "
        >
          <div>
            <h1 className=" font-cormorant text-[45px] font-bold uppercase leading-[50px] tracking-wide text-golden">
              Experience dining at it's finest
            </h1>
            <p className="mt-10 font-cormorant text-[22px] leading-[33px] tracking-wide text-white ">
              Indugle in our rich diverse menu and enjoy a memorable dining
              experience.
            </p>
          </div>
          <div
            id="button-div"
            className="mt-8 flex items-end justify-start gap-6"
          >
            <button
              type="button"
              className="rounded-md px-4 py-2 font-cormorant text-[22px] font-extrabold tracking-wider text-white shadow-bg_white transition-all duration-300 ease-in-out hover:bg-black hover:text-golden hover:shadow-sh_gold"
            >
              Reserve
            </button>
            <button
              type="button"
              className="rounded-md px-4 py-2 font-cormorant text-[22px]  font-extrabold tracking-wider text-golden shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black  hover:shadow-sh_gold "
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
