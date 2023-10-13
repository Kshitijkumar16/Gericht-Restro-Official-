import { BsInstagram } from "react-icons/bs";

const GallerySlider = ({ image }) => {
  return (
    <section id="entire-sub-slider" className="relative">
      <div className="group/ticker ">
        <div className=" group/image">
          <img
            src={image.imgUrl}
            alt="gallery-image"
            className="max-h-[280px] min-h-[280px] min-w-[390px] max-w-[390px] rounded-sm border-2 border-golden object-cover object-center transition-all duration-300 ease-in-out group-hover/ticker:scale-[125%] group-hover/ticker:rounded-lg  group-hover/ticker:border-[3px] group-hover/ticker:border-white"
          />
        </div>
        <div
          id="logo-container"
          target="blank"
          className="group/logo absolute inset-0 z-50 flex items-center justify-center"
        >
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram
              className="inset-0 flex items-center justify-center text-white opacity-70 transition-all duration-300 ease-in-out group-hover/logo:cursor-pointer group-hover/ticker:opacity-100"
              size={40}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
