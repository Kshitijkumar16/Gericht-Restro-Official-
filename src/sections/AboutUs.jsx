import React from "react";
import { G, knife, spoon } from "../assets";

const AboutUs = () => (
  <section
    className={`granite_bg padding-x relative py-40 font-cormorant text-golden`}
    id="about-section"
  >
    <div className="absolute inset-0 z-0 flex items-center justify-center ">
      <img
        src={G}
        alt="G_overlay"
        className=" h-[450px] w-[415px] max-lg:h-[320px] max-lg:w-[300px]"
      />
    </div>

    <div className="lg:padding-x relative z-10 flex items-center justify-start gap-10 pb-24 pt-12  max-lg:max-h-[250px]">
      <div
        id="about-about-div"
        className="w-5/11 mt-16 flex flex-col items-end justify-between"
      >
        <h1 className="font-cormorant text-[72px] max-lg:text-[50px] ">
          About Us
        </h1>
        <img src={spoon} alt="about_spoon" className="" />
        <p className="mt-16 text-right font-alt max-lg:font-cormorant">
          {" "}
          At Gericht, we believe that dining is not just about nourishing the
          body but also feeding the soul. We are committed to creating moments
          of joy and connection through our carefully crafted dishes.
        </p>
        <button
          type="button"
          className="mt-16 bg-golden px-6 py-2 font-extrabold text-black hover:bg-white"
        >
          Know More
        </button>
      </div>

      <div className=" w-1/11 flex justify-center">
        <img src={knife} alt="about_knife" />
      </div>

      <div
        id="about-history-div"
        className="w-5/11 mt-16 flex  flex-col items-start justify-between text-left "
      >
        <h1 className="font-cormorant text-[72px] max-lg:text-[50px] ">
          Our History
        </h1>
        <img src={spoon} alt="about_spoon" className="" />
        <p className="mt-16 font-alt max-lg:font-cormorant">
          Gericht Restaurant, founded in 2005 by Emily and David Bennett, brings
          the art of gastronomy to life. Inspired by their travels, they've
          crafted a dining haven where patrons relish not just food but
          unforgettable moments.
        </p>
        <button
          type="button"
          className="mt-16 bg-golden px-6 py-2 font-extrabold text-black hover:bg-white"
        >
          Know More
        </button>
      </div>
    </div>
  </section>
);

export default AboutUs;
