
import { BsInstagram } from "react-icons/bs";

const GallerySlider = ({ image }) => {

  return (
    <section id="entire-sub-slider" className="relative">
      <div
        className="group/ticker"
      >
        <div className=" group/image">
          <img
            src={image.imgUrl}
            alt="gallery-image"
            className="max-h-[280px] min-h-[280px] min-w-[390px] max-w-[390px]  rounded-lg border-golden object-cover object-center transition-all duration-300 ease-in-out group-hover/ticker:scale-[125%] group-hover/image:border-[1px]"
          />
        </div>
        <div
          id="logo-container"
          className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          <BsInstagram
            className="inset-0 flex items-center justify-center text-white transition-all duration-300 ease-in-out opacity-70 group-hover/ticker:opacity-100"
            size={40}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
