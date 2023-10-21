import { motion as m } from "framer-motion";
import React from "react";

import { nav_linkss } from "../constants";
import { gericht } from "../assets";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="lg:padding-x flex items-center justify-between font-alt text-golden xl:pt-8 lg:pt-[30px] md:pt-6 lap:pb-8 lap:pt-12">
      <m.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        id="logo-div"
        className="flex cursor-pointer items-center justify-between rounded-lg shadow-sh_gold "
      >
        <img
          src={gericht}
          width={200}
          height="auto"
          alt="Geritch-logo"
          className=" rounded-lg border-[2px] border-golden border-opacity-70 px-3 py-1"
        />
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        id="desktop-navbar"
        className="flex flex-1 items-start justify-end lg:gap-8 xl:gap-10 lap:gap-16"
      >
        {nav_linkss.map((item) => (
          <div
            key={item.label}
            className="relative top-2 font-cormorant xl:text-[22px] lg:text-[20px]"
          >
            <a
              href={item.href}
              className=" flex flex-col text-golden transition-all duration-500 ease-in-out after:absolute after:bottom-0 after:left-0 after:right-0
                      after:h-[1px] after:w-full after:scale-x-0 after:rounded-lg  after:bg-golden 
                      after:opacity-0 after:transition-all
                      after:duration-300 after:ease-in after:content-[''] hover:after:scale-x-100 hover:after:opacity-100 "
            >
              {item.label}
            </a>
          </div>
        ))}

        <button
          type="button"
          className="rounded-full bg-black bg-opacity-50 font-alt xl:text-[18px] lg:text-[16px] font-bold text-golden shadow-bg_gold transition-all duration-300 ease-in-out hover:shadow-sh_gold lg:px-[10px] lg:py-[7px] xl:px-3 xl:py-2  lap:px-4 lap:py-3"
        >
          Book Table
        </button>
      </m.div>
    </nav>
  );
};

export default Navbar;
