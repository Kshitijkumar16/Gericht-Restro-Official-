import { useState } from "react";
import { motion as m } from "framer-motion";

import { cuisineData } from "../constants";
import { ChevronRight } from "react-feather";

const SpecialMenu = () => {
  const [activeCuisine, setActiveCuisine] = useState("asian");

  return (
    <section
      className="relative flex flex-col pb-40 lg:padding-x font-cormorant text-golden"
      id="menu-section"
    >
      <div className="flex items-center justify-end">
        <div className="relative -right-8 text-right font-cormorant text-[72px] font-extrabold uppercase tracking-[30px] text-golden/30 ">
          Our &nbsp; Signature
        </div>
      </div>
      <div className="flex items-center justify-between mt-20">
        <div id="nav-div" className="w-[30%] ">
          <div className="z-10 flex flex-col items-center justify-center gap-4">
            <div className="h-[65px] w-[1px] bg-golden"></div>
            <div className="relative">
              <div
                onClick={() => setActiveCuisine("asian")}
                className={`relative z-10 h-[80px] w-[80px] cursor-pointer rounded-full border-[2px] border-golden bg-[url('./assets/ramen.png')] bg-cover bg-center transition-all duration-300 hover:shadow-sh_gold  ${
                  activeCuisine === "asian"
                    ? "scale-[140%] shadow-sh_gold transition-all duration-300  ease-in-out"
                    : ""
                }`}
              ></div>
              <div
                className={`pointer-events-none absolute -right-[165px] top-1/2 z-0  h-[2px] w-[135px] bg-golden ${
                  activeCuisine === "asian" ? "" : "hidden"
                }`}
              ></div>
            </div>
            <div className="h-[30px] w-[1px] bg-golden"></div>
            <div className="relative ">
              <div
                onClick={() => setActiveCuisine("indian")}
                className={`relative z-10 h-[80px] w-[80px] cursor-pointer rounded-full border-[2px] border-golden bg-[url('./assets/pbm.png')] bg-cover bg-center transition-all duration-300 hover:shadow-sh_gold  ${
                  activeCuisine === "indian"
                    ? " scale-[140%] shadow-sh_gold transition-all duration-300 ease-in-out "
                    : ""
                }`}
              ></div>
              <div
                className={`pointer-events-none absolute -right-[165px] top-1/2 z-0  h-[2px] w-[135px] bg-golden ${
                  activeCuisine === "indian" ? "" : "hidden"
                }`}
              ></div>
            </div>
            <div className="h-[30px] w-[1px] bg-golden"></div>
            <div className="relative">
              <div
                onClick={() => setActiveCuisine("continental")}
                className={`relative z-10 h-[80px] w-[80px] cursor-pointer rounded-full border-[2px] border-golden bg-[url('./assets/pizza.png')] bg-cover bg-center transition-all duration-300 hover:shadow-sh_gold  ${
                  activeCuisine === "continental"
                    ? " scale-[140%] shadow-sh_gold transition-all duration-300  ease-in-out "
                    : ""
                }`}
              ></div>
              <div
                className={`pointer-events-none absolute -right-[165px] top-1/2 z-0  h-[2px] w-[135px] bg-golden ${
                  activeCuisine === "continental" ? "" : "hidden"
                }`}
              ></div>
            </div>
            <div className="h-[65px] w-[1px] bg-golden"></div>
          </div>
        </div>
        {cuisineData[activeCuisine].map((cuisine) => (
          <div className="relative z-10 flex w-[70%] flex-col rounded-lg border-[0.5px] bg-[url('./assets/menubg3.png')] from-black via-black/90 to-black/0 bg-cover bg-center px-20 pb-12 shadow-bg_gold">
            <div className="flex items-center justify-center py-10">
              <h1 className=" font-extrathin font-alt text-[24px] uppercase tracking-[30px] text-golden/50 ">
                {cuisine.title}
              </h1>
            </div>
            <div
              className={`pointer-events-none grid grid-flow-row place-content-start gap-y-8 `}
            >
              {cuisine.dishes.map((dish) => (
                <div className="grid grid-cols-3 row-span-1 ">
                  <div className="flex flex-col col-span-2">
                    <h1 className=" text-[32px]  font-extrabold uppercase tracking-widest">
                      {dish.dishName}
                    </h1>
                    <p className="text-white/90">{dish.description}</p>
                  </div>
                  <div className="relative col-span-1 -top-2 place-self-center">
                    <p className="tracking-wider font-Montserrat">
                      {dish.price}/-
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -right-32 bottom-[280px] rotate-90 rounded-lg px-3 transition-all duration-300 hover:bg-black hover:shadow-bg_gold">
              <div className="flex cursor-pointer items-center justify-center gap-3  p-3 font-cormorant  text-[32px]  font-extrabold uppercase tracking-[15px] text-golden/50 transition-all duration-300 hover:text-golden ">
                <p className="">Full &nbsp; Menu</p>
                <ChevronRight className="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute -left-[190px] bottom-[390px]">
        <p className="rotate-90 font-Montserrat text-[72px] font-extrabold tracking-[70px] text-golden/70 ">
          MENU
        </p>
      </div>
    </section>
  );
};

export default SpecialMenu;
