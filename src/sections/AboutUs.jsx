import React from "react";
import { G, knife, spoon } from "../assets";

const AboutUs = () => (
  <section
    className={`relative granite_bg py-40 text-golden font-cormorant padding-x`}
    id="about-section"
  >
    <div className="absolute inset-0 z-0 flex justify-center items-center ">
      <img
        src={G}
        alt="G_overlay"
        className=" w-[415px] h-[450px] max-lg:w-[300px] max-lg:h-[320px]"
      />
    </div>

    <div className="relative z-10 flex justify-start items-center gap-10 lg:padding-x pt-12 pb-24  max-lg:max-h-[250px]">
      <div id="about-about-div"


        className="flex mt-16 w-5/11 flex-col justify-between items-end"
      >
        <h1 className="font-cormorant text-[72px] max-lg:text-[50px] ">About Us</h1>
        <img src={spoon} alt="about_spoon" className="" />
        <p className="font-alt mt-16 text-right max-lg:font-cormorant">      At Gericht, we believe that dining is not just about nourishing the
          body but also feeding the soul. We are committed to creating moments
          of joy and connection through our carefully crafted dishes.
        </p>
        <button
          type="button"
          className="mt-16 bg-golden hover:bg-white py-2 px-6 text-black font-extrabold"
        >Know More
        </button>
      </div>

      <div className=" flex w-1/11 justify-center">
        <img src={knife} alt="about_knife" />
      </div>

      <div
        id="about-history-div"
        className="flex mt-16 w-5/11  items-start flex-col text-left justify-between "
      >
        <h1 className="font-cormorant text-[72px] max-lg:text-[50px] ">Our History</h1>
        <img src={spoon} alt="about_spoon" className="" />
        <p className="font-alt mt-16 max-lg:font-cormorant">
          Gericht Restaurant, founded in 2005 by Emily and David Bennett, brings
          the art of gastronomy to life. Inspired by their travels, they've
          crafted a dining haven where patrons relish not just food but
          unforgettable moments.
        </p>
        <button
          type="button"
          className="mt-16 text-black bg-golden hover:bg-white font-extrabold py-2 px-6"
        >
          Know More
        </button>
      </div>
    </div>
  </section>
);

export default AboutUs;
