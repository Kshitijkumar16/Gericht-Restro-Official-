import { BsInstagram } from "react-icons/bs";

const GallerySlider = ({ image }) => {
  return (
    <section id="entire-sub-slider" className="relative">
      <div className="group/ticker ">
        <div className=" group/image">
          <img
            src={image.imgUrl}
            alt="gallery-image"
            className="lap:max-h-[280px] lap:min-h-[280px] lap:min-w-[390px] lap:max-w-[390px] 
                        xl:max-h-[250px] xl:min-h-[250px] xl:max-w-[350px] xl:min-w-[350px]
                        rounded-sm border-2 border-golden object-cover object-center transition-all duration-300 ease-in-out group-hover/ticker:scale-[125%] group-hover/ticker:rounded-lg  group-hover/ticker:border-[3px] group-hover/ticker:border-white"
          />
        </div>
        <div
          id="logo-container"
          target="blank"
          className="absolute inset-0 z-50 flex items-center justify-center group/logo"
        >
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram
              className="lap:w-[40px] xl:w-[35px] inset-0 flex items-center justify-center text-white transition-all duration-300 ease-in-out opacity-70 group-hover/logo:cursor-pointer group-hover/ticker:opacity-100"
              size={40}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
