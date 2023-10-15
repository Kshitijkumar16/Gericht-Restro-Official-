import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiCopy } from "react-icons/fi";
import { circleLogo, gericht, spoon } from "../assets";
import { footerLinks } from "../constants";
import { NewsTicker } from "../components";

const Footer = () => (
  <section
    className="lg:padding-x flex flex-col items-center justify-start pt-40"
    id="footer-section"
  >
    <div className="flex w-full items-start justify-between gap-24 ">
      <div
        id="footer-logo-div"
        className="flex w-1/6 items-start  justify-between"
      >
        <div className="flex flex-col items-start justify-start ">
          <div className=" cursor-pointer rounded-lg border-[4px] shadow-sh_gold">
            <img
              src={gericht}
              alt="footer_logo"
              width={170}
              className="rounded-lg bg-black p-1 px-2"
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
        className="flex w-3/6 items-start justify-between gap-16 font-cormorant text-white"
      >
        {footerLinks.map((section, i) => (
          <div
            key={i}
            className="flex flex-1 flex-col items-start justify-between "
          >
            <h1 className="border-b-2 border-golden  text-[22px] font-bold uppercase tracking-wider">
              {section.title}
            </h1>
            <div
              key={`${section.title}+${i}`}
              className="mt-8 flex w-full flex-col items-start"
            >
              {section.links.map((link, i) => (
                <div key={i}>
                  <div key={link.key} className="relative">
                    <a
                      href={link.link}
                      className="cursor-pointer text-[18px] leading-[40px] tracking-[2px] transition-all duration-300 hover:text-golden "
                    >
                      {link.name}
                    </a>
                  </div>
                  {/* <div className="pointer-events-none absolute h-24 w-24 animate-blob bg-golden opacity-30 blur-3xl delay-300"></div> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        id="subscribe-div"
        className="flex w-2/6 flex-col items-start justify-between font-cormorant text-white/90"
      >
        <div>
          <h1 className="border-b-2 border-golden text-[22px] font-bold uppercase tracking-wider">
            Subscribe
          </h1>
          <p className="mt-8 text-[20px] leading-[30px] tracking-[1px]">
            Join our mailing list for the latest updates and promotions.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
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
              <a href="" className=" hover:cursor-pointer hover:text-golden ">
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
      className="mb-20 mt-10 flex w-full justify-between"
    >
      <div className="flex items-center justify-start gap-6 font-Montserrat text-white">
        <p className="">2024 Gericht. All Rights reserved.</p>
        <p className="hover:cursor-pointer hover:text-golden">
          Terms of Service
        </p>
        <p className="hover:cursor-pointer hover:text-golden">Privacy Policy</p>
        <p className="hover:cursor-pointer hover:text-golden">Cookie Policy</p>
      </div>
      <div className=" flex gap-8">
        <FiFacebook
          size={25}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-golden"
        />
        <FiTwitter
          size={25}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-golden"
        />
        <FiInstagram
          size={25}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-golden"
        />
      </div>
    </div>
  </section>
);

export default Footer;
