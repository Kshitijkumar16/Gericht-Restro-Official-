import React from 'react';
import { MenuItem } from '../components';
import { Menu, spoon } from '../assets';
import { cocktails, wines } from '../constants';

const SpecialMenu = () => (
  <section
    className=" font-cormorant flex items-center justify-center flex-col text-golden pt-12 pb-40 max-lg:py-24"
    id="menu-section"
  >
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-white text-[22px] max-lg:text-[20px]">Menu that fits your palatte</h1>
      <img src={spoon} alt="spoon-icon" className="w-[50px] mt-2" />
      <h1 className="text-[56px] mt-4 max-lg:text-[48px]">Today&apos;s Special</h1>
    </div>

    <div className="flex max-lg:flex-wrap justify-between w-full items-start mt-10 gap-10">
      <div className="lg:w-1/3 flex flex-col  items-center justify-between">
        <p className="text-white font-cormorant text-[38px]  ">Wine & Beer</p>
        <div className="mt-10 w-full flex flex-col items-center justify-start ">
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

      <div className="lg:w-1/3 flex justify-center">
        <img src={Menu} width={300} alt="menu__img" />
      </div>

      <div className="lg:w-1/3 flex flex-col  items-center justify-between">
        <p className="text-white font-cormorant text-[38px] ">Cocktails</p>
        <div className="mt-10 w-full flex flex-col items-center justify-start">
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
        className="bg-golden text-black font-extrabold py-2 px-4 hover:bg-white hover:text-black"
      >
        View More
      </button>
    </div>
  </section>
);

export default SpecialMenu;
