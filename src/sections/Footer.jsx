import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { circleLogo, gericht, spoon } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section
    className="padding-x flex min-h-[900px] flex-col items-center justify-start overflow-hidden bg-[url(./assets/footer-img.png)] bg-cover bg-top bg-no-repeat font-cormorant text-golden"
    id="footer-section"
  >
    <div
      id="footer-logo-div"
      className="flex w-full items-start justify-between pt-40"
    >
      <div className="flex flex-col items-start justify-between  ">
        <div
          id="footer-logo-image-div"
          className="relative rounded-2xl border-[4px] cursor-pointer shadow-sh_gold"
        >
          <img
            src={gericht}
            alt="footer_logo"
            width={300}
            className=" rounded-2xl bg-black px-6 py-3" 
          />
          <div className="animate-blob pointer-events-none absolute h-40 w-64 bg-golden opacity-30 blur-3xl delay-300"></div>
        </div>
        <p className="mt-8 text-[18px] text-xl font-bold tracking-wide text-white">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <div className="mt-10 flex gap-[107px]">
          <FiFacebook
            size={30}
            className=" cursor-pointer transition-colors duration-300 ease-in-out hover:text-white"
          />
          <FiTwitter
            size={30}
            className=" cursor-pointer  transition-colors duration-300 ease-in-out hover:text-white"
          />
          <FiInstagram
            size={30}
            className=" cursor-pointer transition-colors duration-300 ease-in-out hover:text-white"
          />
        </div>
      </div>
      <div className="relative ">
        <div className=" animate-blob pointer-events-none absolute -right-6 -top-7 h-[250px] w-[250px] rounded-full bg-golden opacity-60 blur-3xl filter"></div>
        <img
          src={circleLogo}
          alt="logo"
          width={170}
          className=" pointer-events-none animate-spin rounded-full border-[2px] bg-black p-4 "
        />
      </div>
    </div>

    <div
      id="footer-links-div"
      className="mb-12 mt-24 flex  w-full items-start justify-between gap-10 pt-12"
    >
      {footerLinks.map((section, i) => (
        <div className="flex flex-1 flex-col items-center justify-between ">
          <h1 className="border-b-2 border-golden  text-[42px] text-white">
            {section.title}
          </h1>
          <div
            key={`${section.title}+${i}`}
            className="mt-8 flex flex-col items-center"
          >
            {section.links.map((link) => (
              <div>
                <div key={link.key} className="relative">
                  <a
                    href={link.link}
                    className="cursor-pointer text-[24px] leading-[38px] transition-all duration-300 hover:scale-105 hover:text-white"
                  >
                    {link.name}
                  </a>
                </div>
                <div className="animate-blob pointer-events-none absolute h-24 w-24 bg-golden opacity-30 blur-3xl delay-300"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div
      id="footer-botto  m-line"
      className="my-4 flex w-full items-center justify-center"
    >
      <p className="font-alt">2021 Gericht. All Rights reserved.</p>
    </div>
  </section>
);

export default Footer;
