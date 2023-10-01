import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { nav_linkss } from "../constants";
import { gericht, hamLogo } from "../assets";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="flex justify-between items-center text-golden font-alt pb-8 pt-12 lg:padding-x">
      <div id="logo-div" className="flex justify-between items-center shadow-sh_gold rounded-lg
      ">
        <img
          src={gericht}
          width={200}
          height="auto"
          alt="Geritch-logo"
          className=" border-golden border-[2px] border-opacity-70 px-3 py-1 rounded-lg"
        />
      </div>

      <div id="desktop-navbar" className=" flex justify-center items-center gap-28 max-2xl:hidden">
        {nav_linkss.map((item) => (
          <div key={item.label}>
            <a
              href={item.href}
              className=" font-cormorant font-bold text-xl p-2 hover:border-y-[0.5px] transition-all ease-in-out duration-300 hover:border-golden"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>

      <div id="side-overlay-div" className="2xl:hidden text-crimson">
        <img 
        src={hamLogo}
          width={20}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="text-golden z-50 transition-all ease-in-out duration-500 bg-black z-5 fixed top-0 left-0 w-full h-screen flex justify-center items-center ">
            <div className="border-2 border-golden p-[200px] relative">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="absolute top-10 right-10 cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
              <div className="  ">
                {nav_linkss.map((link) => (
                  <div className="p-6 transition-[2s] text-center font-extrabold text-3xl font-cormorant">
                    <a
                      className="hover:text-crimson duration-400"
                      href={link.href}
                      onClick={() => setToggleMenu(false)}
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div id="login-div" className="flex gap-3 items-center lg:justify-between max-lg:justify-end">
        <button
          type="button"
          className="text-black font-extrabold max-lg:font-bold px-3 py-2 max-lg:px-2 rounded-md bg-golden hover:py-3 transition-all ease-in-out duration-300"
        >
          Log In
        </button>
        <div className="text-transparent max-w-[2px] bg-golden h-[40px]">
          sup
        </div>
        <button
          type="button"
          className="text-golden font-bold text-[18px] max-lg:text-[15px] max-lg:px-0 hover:border-y-[0.5px] transition-all ease-in-out duration-300 p-2"
        >
          Book Table
        </button>
        <div />
        
      </div>


    </nav>
  );
};

export default Navbar;
