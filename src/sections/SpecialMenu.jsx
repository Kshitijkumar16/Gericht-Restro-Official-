import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

import { cuisineData } from "../constants";
import { ChevronRight } from "react-feather";
import { gr1, gr2, gr3 } from "../assets";

const SpecialMenu = () => {
  const [activeCuisine, setActiveCuisine] = useState("asian");

  const itemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      className="lg:padding-x relative flex flex-col font-cormorant text-golden xl:pb-32 lap:pb-40"
      id="menu-section"
    >
      <div className="flex items-center justify-end">
        <div className="relative text-right font-cormorant font-extrabold uppercase text-golden/30 xl:-right-8 xl:text-[60px] xl:tracking-[25px] lap:-right-8 lap:text-[72px] lap:tracking-[30px] ">
          Our <span className="max-lap:hidden">&nbsp;</span> Signature
        </div>
      </div>
      <div className="mt-20 flex items-center justify-between">
        <div id="nav-div" className="w-[30%] ">
          <div
            id="cuisine-selector"
            className="z-10 flex flex-col items-center justify-center gap-4"
          >
            <div className="h-[65px] w-[2px] bg-golden"></div>
            <div className="relative">
              <div
                onClick={() => setActiveCuisine("asian")}
                className={`relative z-10 cursor-pointer rounded-full border-[2px] border-golden bg-[url('./assets/ramen.png')] bg-cover bg-center transition-all duration-300 hover:shadow-sh_gold xl:h-[70px] xl:w-[70px] lap:h-[80px] lap:w-[80px]  ${
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
            <div className="h-[30px] w-[2px] bg-golden"></div>
            <div className="relative ">
              <div
                onClick={() => setActiveCuisine("indian")}
                className={`relative z-10  cursor-pointer rounded-full border-[2px] border-golden bg-[url('./assets/pbm.png')] bg-cover bg-center transition-all duration-300 hover:shadow-sh_gold xl:h-[70px] xl:w-[70px] lap:h-[80px] lap:w-[80px]  ${
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
            <div className="h-[30px] w-[2px] bg-golden"></div>
            <div className="relative">
              <div
                onClick={() => setActiveCuisine("continental")}
                className={`relative z-10  cursor-pointer rounded-full border-[2px] border-golden bg-[url('./assets/pizza.png')] bg-cover bg-center transition-all duration-300 hover:shadow-sh_gold xl:h-[70px] xl:w-[70px] lap:h-[80px] lap:w-[80px]  ${
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
            <div className="h-[65px] w-[2px] bg-golden"></div>
          </div>
        </div>
        {cuisineData[activeCuisine].map((cuisine, i) => (
          <div
            key={i}
            className="relative z-10 flex w-[70%] flex-col rounded-lg border-[0.5px] bg-[url('./assets/menubg3.png')] from-black via-black/90 to-black/0 bg-cover bg-center pb-12 shadow-bg_gold xl:px-12 lap:px-20"
          >
            <div className="flex items-center justify-center xl:py-8 lap:py-10">
              <h1 className=" font-extrathin font-alt uppercase text-golden/50 xl:text-[20px] xl:tracking-[25px] lap:text-[24px] lap:tracking-[30px] ">
                {cuisine.title}
              </h1>
            </div>
            <AnimatePresence initial={false}>
              <m.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
                staggerChildren={0.2}
                className={`pointer-events-none grid grid-flow-row place-content-start xl:gap-y-6 lap:gap-y-8`}
              >
                {cuisine.dishes.map((dish, i) => (
                  <m.div
                    variants={itemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1 }}
                    staggerChildren={0.2}
                    key={i}
                    className="row-span-1 grid grid-cols-3 "
                  >
                    <div className="col-span-2 flex flex-col">
                      <h1 className=" font-extrabold uppercase xl:text-[28px] xl:tracking-widest lap:text-[32px]">
                        {dish.dishName}
                      </h1>
                      <p className="text-white/90 xl:text-[13px]">
                        {dish.description}
                      </p>
                    </div>
                    <div className="relative -top-2 col-span-1 place-self-center">
                      <p className="font-Montserrat tracking-wider">
                        {dish.price}/-
                      </p>
                    </div>
                  </m.div>
                ))}
              </m.div>
            </AnimatePresence>
            <div className="absolute rotate-90 rounded-lg transition-all duration-300 hover:bg-black hover:shadow-bg_gold xl:-right-28 xl:bottom-[220px] xl:px-[10px] lap:-right-32 lap:bottom-[280px] lap:px-3">
              <div className="flex cursor-pointer items-center justify-center gap-3 font-cormorant font-extrabold uppercase  text-golden/50 transition-all  duration-300 hover:text-golden xl:p-[10px] xl:text-[28px] xl:tracking-[12px] lap:p-3 lap:text-[32px] lap:tracking-[15px] ">
                <p className="">Full &nbsp; Menu</p>
                <ChevronRight className="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute xl:-left-[120px] xl:bottom-[330px] lap:-left-[190px] lap:bottom-[390px]">
        <p className="rotate-90 font-Montserrat font-extrabold text-golden xl:text-[55px] xl:tracking-[55px] lap:text-[72px] lap:tracking-[70px] ">
          MENU
        </p>
      </div>
      <div
        id="absolute-food-menu-image"
        className="absolute z-0 opacity-95 xl:-left-[120px] xl:-top-[135px] lap:-left-[100px] lap:-top-[200px]"
      >
        {activeCuisine === "asian" ? (
          <div>
            <img
              src={gr2}
              alt=""
              width={380}
              className="xl:w-[320px] lap:w-[380px]"
            />
          </div>
        ) : (
          ""
        )}
        {activeCuisine === "indian" ? (
          <div>
            <img
              src={gr3}
              alt="indian-thali"
              width={600}
              className="xl:w-[550px] lap:w-[600px]"
            />
          </div>
        ) : (
          ""
        )}
        {activeCuisine === "continental" ? (
          <div>
            <img
              src={gr1}
              alt="pizza"
              width={530}
              className="xl:w-[440px] lap:w-[530px]"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default SpecialMenu;
