import React from "react";
import { BsInstagram } from "react-icons/bs";

const GallerySlider = ({ image, index }) => {
  return (
    <section className="">
      <div
        key={index}
        className="group/ticker relative z-10 hover:cursor-pointer"
      >
        <div className="group/image ">
          <img
            src={image.imgUrl}
            alt="gallery-image"
            className="max-h-[280px] min-h-[280px] min-w-[390px] max-w-[390px]  rounded-lg border-golden object-cover object-center transition-all duration-300 ease-in-out group-hover/image:z-40 group-hover/ticker:scale-[125%] group-hover/image:border-[1px]"
          />
        </div>
        <div
          id="logo-container"
          className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center"
        >
          <BsInstagram
            className="inset-0 flex items-center  justify-center text-white opacity-70 transition-all duration-300 ease-in-out group-hover/ticker:opacity-100"
            size={40}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
