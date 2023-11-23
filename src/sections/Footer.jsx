import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiCopy } from "react-icons/fi";
import { gericht } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section
    className="flex flex-col items-center justify-start md:padding-x md:pt-10 lg:pt-12 xl:pt-20 lap:pt-32"
    id="footer-section"
  >
    <div className="flex w-full items-start justify-between max-[1011px]:flex-col md:gap-10 lg:gap-12 xl:gap-16 lap:gap-24">
      <div
        id="subscribe-div"
        className="flex flex-col items-start justify-start text-white font-cormorant"
      >
        <div>
          <h1 className="border-b-2 border-golden font-bold uppercase tracking-wider md:text-[28px] lg:text-[28px] lap:text-[38px]">
            Subscribe
          </h1>
        </div>
        <div>
          <p className="md:mt-8 md:text-[16px] md:leading-[25px] lg:mt-10 lg:text-[16px] lg:leading-[25px] lg:tracking-[1px] xl:mt-12 xl:text-[20px] xl:leading-[30px] lap:mt-20">
            Join our mailing list for the latest updates and promotions.
          </p>
        </div>
        <div className="flex md:mt-5 md:gap-5 lg:mt-6 lg:gap-6 xl:mt-8 xl:gap-8 lap:mt-10 lap:gap-10">
          <input
            type="text"
            placeholder="Enter your email"
            className="rounded-sm border-[2px] border-white bg-transparent outline-[2px] outline-white md:px-3 md:py-[7px] md:tracking-[1px] lg:px-3 lg:py-[7px] lg:text-[18px] xl:px-4 xl:py-2"
          />
          <button
            className=" rounded-sm font-bold hover:border-[3px] hover:border-white hover:bg-white/90 hover:text-black md:border-[2px] md:px-3 md:py-[5px] md:text-[20px] md:tracking-[1px] lg:border-[2px] lg:px-3 lg:py-[5px] lg:text-[20px] xl:border-[3px] xl:px-4 xl:py-[6px]"
            type="button"
          >
            Subscribe
          </button>
        </div>
        <div>
          <p className="md:mt-4 md:text-[16px] lg:mt-5 lg:text-[16px] lg:leading-[25px] lg:tracking-[1px] xl:mt-6 lap:mt-8">
            By subscribing, you agree to our{" "}
            <span>
              <a href="" className=" hover:cursor-pointer hover:text-golden">
                Privacy Policy
              </a>
            </span>
            <br />
            and consent to receive updates from us.
          </p>
        </div>
      </div>

      <div
        id="footer-links-parent-div"
        className="max-[1011px]:mt-10 flex flex-col items-start justify-between lap:gap-10"
      >
        <div
          id="logo-div"
          className=" cursor-pointer rounded-lg shadow-sh_gold md:border-[3px] lg:border-[3px] xl:border-[4px]"
        >
          <img
            src={gericht}
            alt="footer_logo"
            width={170}
            className="rounded-lg bg-black p-1 px-2 md:w-[125px] lg:w-[125px] xl:w-[130px] lap:w-[170px] "
          />
        </div>
        <div
          id="footer-links-div"
          className="flex items-start justify-between text-white font-cormorant md:mt-10 md:gap-8 lg:mt-10 lg:gap-8 xl:mt-10 xl:gap-14 lap:mt-8 lap:gap-28"
        >
          {footerLinks.map((section, i) => (
            <div key={i} className="flex flex-col items-start justify-between ">
              <h1 className="border-b-2 border-golden font-bold uppercase tracking-wider md:text-[15px] lg:text-[15px] xl:text-[18px] lap:text-[24px]">
                {section.title}
              </h1>
              <div
                key={`${section.title}+${i}`}
                className="flex flex-col items-start w-full md:mt-4 lg:mt-4 xl:mt-6 lap:mt-8"
              >
                {section.links.map((link, i) => (
                  <div key={i}>
                    <div key={link.key} className="relative">
                      <a
                        href={link.link}
                        className="cursor-pointer tracking-[2px] transition-all duration-300 hover:text-golden md:text-[16px] md:leading-[32px] lg:leading-[32px] xl:text-[16px] xl:leading-[40px] lap:text-[18px] "
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
      </div>
    </div>

    <div
      id="horizontal-line"
      className="h-[1.5px] w-full bg-golden md:mt-10 lg:mt-10 xl:mt-12"
    ></div>

    <div
      id="footer-bottom-line"
      className="flex justify-between w-full md:mb-12 md:mt-6 lg:mb-12 lg:mt-6 xl:mb-16 xl:mt-8 lap:mb-20 lap:mt-10"
    >
      <div className="flex items-center justify-start font-Montserrat text-white md:gap-4 md:text-[14px] lg:gap-4 lg:text-[14px] xl:gap-5 xl:text-[15px] lap:gap-6 lap:text-[16px]">
        <p className="">2024 Gericht. All Rights reserved.</p>
        <p className="hover:cursor-pointer hover:text-golden">
          Terms of Service
        </p>
        <p className="hover:cursor-pointer hover:text-golden">Privacy Policy</p>
        <p className="hover:cursor-pointer hover:text-golden">Cookie Policy</p>
      </div>
      <div className="flex md:gap-5 lg:gap-5 xl:gap-6 lap:gap-8 ">
        <FiFacebook
          size={25}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-golden md:w-[17px] lg:w-[18px] xl:w-[20px] lap:w-[25px]"
        />
        <FiTwitter
          size={25}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-golden md:w-[17px] lg:w-[18px] xl:w-[20px] lap:w-[25px]"
        />
        <FiInstagram
          size={25}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-golden md:w-[17px] lg:w-[18px] xl:w-[20px] lap:w-[25px]"
        />
      </div>
    </div>
  </section>
);

export default Footer;
