import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { nav_linkss } from "../constants";
import { gericht, hamLogo } from "../assets";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="flex items-center justify-between pt-12 pb-8 padding-x font-alt text-golden">
      <div
        id="logo-div"
        className="flex items-center justify-between rounded-lg cursor-pointer shadow-sh_gold "
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
        className="flex items-start justify-end flex-1 gap-16 max-2xl:hidden"
      >
        {nav_linkss.map((item) => (
          <div key={item.label} className="relative font-cormorant text-[22px] top-2">
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
          className="rounded-full bg-black bg-opacity-50 px-4 py-3 font-alt text-[18px] font-bold text-golden shadow-bg_gold transition-all duration-300 ease-in-out hover:shadow-sh_gold  max-lg:px-0 max-lg:text-[15px]"
        >
          Book Table
        </button>
      </div>

      {/* <div id="side-overlay-div" className="text-crimson 2xl:hidden">
        <img src={hamLogo} width={20} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen transition-all duration-500 ease-in-out bg-black z-5 text-golden ">
            <div className="relative border-2 border-golden p-[200px]">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="absolute cursor-pointer right-10 top-10"
                onClick={() => setToggleMenu(false)}
              />
              <div className="">
                {nav_linkss.map((link) => (
                  <div className="p-6 text-center font-cormorant text-3xl font-extrabold transition-[2s]">
                    <a
                      className=" duration-400 hover:text-crimson"
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
      </div> */}
    </nav>
  );
};

export default Navbar;
