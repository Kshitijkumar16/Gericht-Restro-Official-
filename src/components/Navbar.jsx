import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { nav_linkss } from "../constants";
import { gericht, hamLogo } from "../assets";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="lg:padding-x flex items-center justify-between pb-8 pt-12 font-alt text-golden">
      <div
        id="logo-div"
        className="flex items-center justify-between rounded-lg shadow-sh_gold
      "
      >
        <img
          src={gericht}
          width={200}
          height="auto"
          alt="Geritch-logo"
          className=" rounded-lg border-[2px] border-golden border-opacity-70 px-3 py-1"
        />
      </div>

      <div
        id="desktop-navbar"
        className=" flex items-center justify-center gap-28 max-2xl:hidden"
      >
        {nav_linkss.map((item) => (
          <div key={item.label}>
            <a
              href={item.href}
              className=" p-2 font-cormorant text-xl font-bold transition-all duration-300 ease-in-out hover:border-y-[0.5px] hover:border-golden"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>

      <div id="side-overlay-div" className="text-crimson 2xl:hidden">
        <img src={hamLogo} width={20} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="z-5 fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black text-golden transition-all duration-500 ease-in-out ">
            <div className="relative border-2 border-golden p-[200px]">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="absolute right-10 top-10 cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
              <div className="  ">
                {nav_linkss.map((link) => (
                  <div className="p-6 text-center font-cormorant text-3xl font-extrabold transition-[2s]">
                    <a
                      className="duration-400 hover:text-crimson"
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

      <div
        id="login-div"
        className="flex items-center gap-3 max-lg:justify-end lg:justify-between"
      >
        <button
          type="button"
          className="rounded-md bg-golden px-3 py-2 font-extrabold text-black transition-all duration-300 ease-in-out hover:py-3 max-lg:px-2 max-lg:font-bold"
        >
          Log In
        </button>
        <div className="h-[40px] max-w-[2px] bg-golden text-transparent">
          sup
        </div>
        <button
          type="button"
          className="p-2 text-[18px] font-bold text-golden transition-all duration-300 ease-in-out hover:border-y-[0.5px] max-lg:px-0 max-lg:text-[15px]"
        >
          Book Table
        </button>
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
