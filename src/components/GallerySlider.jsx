import { BsInstagram } from "react-icons/bs";

const GallerySlider = ({ image }) => {
  return (
    <section id="entire-sub-slider" className="relative">
      <div className="group/ticker ">
        <div className=" group/image">
          <img
            src={image.imgUrl}
            alt="gallery-image"
            className="rounded-sm border-2 border-golden object-cover 
                        object-center transition-all duration-300 ease-in-out
                        group-hover/ticker:scale-[125%] group-hover/ticker:rounded-lg group-hover/ticker:border-[3px] group-hover/ticker:border-white
                        sm:max-h-[140px] sm:min-h-[140px] sm:min-w-[230px] sm:max-w-[230px] 
                        md:max-h-[180px] md:min-h-[180px] md:min-w-[260px] md:max-w-[260px]
                        lg:max-h-[200px] lg:min-h-[200px] lg:min-w-[300px] lg:max-w-[300px] 
                        xl:max-h-[250px] xl:min-h-[250px] xl:min-w-[350px] xl:max-w-[350px] 
                        lap:max-h-[280px] lap:min-h-[280px]  lap:min-w-[390px] lap:max-w-[390px]"
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
              className="inset-0 flex items-center justify-center text-white opacity-70 transition-all duration-300 ease-in-out group-hover/logo:cursor-pointer group-hover/ticker:opacity-100 sm:w-[23px] md:w-[23px] lg:w-[28px] xl:w-[35px] lap:w-[40px]"
              size={40}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
