import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiCopy } from "react-icons/fi";
import { circleLogo, gericht, spoon } from "../assets";
import { footerLinks } from "../constants";
import { NewsTicker } from "../components";

const Footer = () => (
  <section
    className="flex flex-col items-center justify-start lg:padding-x xl:pt-20 lap:pt-32"
    id="footer-section"
  >
    <div className="flex items-start justify-between w-full xl:gap-16 lap:gap-24">
      <div
        id="footer-logo-div"
        className="flex items-start justify-between w-1/6"
      >
        <div className="flex flex-col items-start justify-start ">
          <div className=" cursor-pointer rounded-lg border-[4px] shadow-sh_gold">
            <img
              src={gericht}
              alt="footer_logo"
              width={170}
              className="p-1 px-2 bg-black rounded-lg"
            />
          </div>
          {/* <p className="mt-8 font-cormorant text-[18px] text-xl font-bold tracking-wide text-white">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p> */}
        </div>
      </div>
      <div
        id="footer-links-div"
        className="flex items-start justify-between w-3/6 text-white font-cormorant xl:gap-14 lap:gap-16"
      >
        {footerLinks.map((section, i) => (
          <div
            key={i}
            className="flex flex-col items-start justify-between flex-1 "
          >
            <h1 className="border-b-2 border-golden font-bold uppercase tracking-wider xl:text-[18px] lap:text-[22px]">
              {section.title}
            </h1>
            <div
              key={`${section.title}+${i}`}
              className="flex flex-col items-start w-full xl:mt-6 lap:mt-8"
            >
              {section.links.map((link, i) => (
                <div key={i}>
                  <div key={link.key} className="relative">
                    <a
                      href={link.link}
                      className="cursor-pointer leading-[40px] tracking-[2px] transition-all duration-300 hover:text-golden xl:text-[16px] lap:text-[18px] "
                    >
                      {link.name}
                    </a>
                  </div>
                  {/* <div className="absolute w-24 h-24 delay-300 pointer-events-none animate-blob bg-golden opacity-30 blur-3xl"></div> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        id="subscribe-div"
        className="flex flex-col items-start justify-between w-2/6 font-cormorant text-white/90"
      >
        <div>
          <h1 className="border-b-2 border-golden font-bold uppercase tracking-wider xl:text-[18px] lap:text-[22px]">
            Subscribe
          </h1>
          <p className="mt-8 text-[20px] leading-[30px] tracking-[1px]">
            Join our mailing list for the latest updates and promotions.
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-sm border-[2px] border-white bg-transparent px-4 py-2 text-[18px] tracking-[1px] outline-[2px] outline-white"
            />
          </div>
          <div>
            <button
              className=" rounded-sm border-[3px] px-4 py-[6px] text-[20px] font-bold tracking-[1px] hover:border-[3px] hover:border-white hover:bg-white/90 hover:text-black"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <p className="mt-4 text-[16px] leading-[25px] tracking-[1px]">
            By subscribing, you agree to our{" "}
            <span>
              <a href="" className=" hover:cursor-pointer hover:text-golden">
                Privacy Policy
              </a>
            </span>{" "}
            and consent to receive updates from us.
          </p>
        </div>
      </div>
    </div>

    <div
      id="horizontal-line"
      className="mt-12 h-[1.5px] w-full bg-golden"
    ></div>

    <div
      id="footer-bottom-line"
      className="flex justify-between w-full lap:mb-20 xl:mb-16 xl:mt-8 lap:mt-10"
    >
      <div className="flex items-center justify-start gap-6 text-white font-Montserrat">
        <p className="">2024 Gericht. All Rights reserved.</p>
        <p className="hover:cursor-pointer hover:text-golden">
          Terms of Service
        </p>
        <p className="hover:cursor-pointer hover:text-golden">Privacy Policy</p>
        <p className="hover:cursor-pointer hover:text-golden">Cookie Policy</p>
      </div>
      <div className="flex gap-8 ">
        <FiFacebook
          size={25}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-golden xl:w-[20px] lap:w-[25px]"
        />
        <FiTwitter
          size={25}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-golden xl:w-[20px] lap:w-[25px]"
        />
        <FiInstagram
          size={25}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-golden xl:w-[20px] lap:w-[25px]"
        />
      </div>
    </div>
  </section>
);

export default Footer;
