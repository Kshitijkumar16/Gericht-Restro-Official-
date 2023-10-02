import React from "react";
import { MenuItem } from "../components";
import { Menu, spoon } from "../assets";
import { cocktails, wines } from "../constants";

const SpecialMenu = () => (
  <section
    className=" flex flex-col items-center justify-center pb-40 pt-12 font-cormorant text-golden max-lg:py-24"
    id="menu-section"
  >
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-[22px] text-white max-lg:text-[20px]">
        Menu that fits your palatte
      </h1>
      <img src={spoon} alt="spoon-icon" className="mt-2 w-[50px]" />
      <h1 className="mt-4 text-[56px] max-lg:text-[48px]">
        Today&apos;s Special
      </h1>
    </div>

    <div className="mt-10 flex w-full items-start justify-between gap-10 max-lg:flex-wrap">
      <div className="flex flex-col items-center  justify-between lg:w-1/3">
        <p className="font-cormorant text-[38px] text-white  ">Wine & Beer</p>
        <div className="mt-10 flex w-full flex-col items-center justify-start ">
          {wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center lg:w-1/3">
        <img src={Menu} width={300} alt="menu__img" />
      </div>

      <div className="flex flex-col items-center  justify-between lg:w-1/3">
        <p className="font-cormorant text-[38px] text-white ">Cocktails</p>
        <div className="mt-10 flex w-full flex-col items-center justify-start">
          {cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-8">
      <button
        type="button"
        className="bg-golden px-4 py-2 font-extrabold text-black hover:bg-white hover:text-black"
      >
        View More
      </button>
    </div>
  </section>
);

export default SpecialMenu;
