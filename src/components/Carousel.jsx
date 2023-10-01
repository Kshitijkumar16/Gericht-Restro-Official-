import { BsInstagram } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ carouselImages }) => {
  const scrollRef = useRef(null);
  const imageWidth = 300; 

  const scroll = (direction) => {
    const { current } = scrollRef;
    let newScrollLeft;

    if (direction === "left") {
      newScrollLeft = current.scrollLeft - imageWidth;
    } else {
      newScrollLeft = current.scrollLeft + imageWidth;
    }
 
    current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     scroll("right");
  //   }, 4000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []); 

  return (
    <div id="carousel-container" className="overflow-hidden relative">
      <div
        id="image-container"
        className="flex gap-10 overflow-auto hide_scroll"
        ref={scrollRef}
      >
        {carouselImages.map((slide, index) => (
          <div
            id="image-card"
            className="relative group hover:cursor-pointer"
            key={`carousel-image-${index}`}
          >
            <img
              src={slide}
              alt="carousel-image"
              className="rounded-xl min-w-[301px] max-w-[302px] min-h-[447px] max-h-[448px] object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-70"
            />
            <div
              id="parent-logo-container"
              className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            ></div>
            <div
              id="logo-container"
              className="absolute inset-0 flex items-center justify-center"
            >
              <BsInstagram className="text-white" size={40} />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-96 inset-0 flex items-end justify-between pointer-events-auto">
        <ChevronLeft
          size={40}
          className="bg-white opacity-50 hover:opacity-100 text-golden p-2 animate-pulse cursor-pointer hover:bg-white hover:animate-none hover:text-black hover:border-2 hover:border-black hover:border-l-0 transition ease-in-out duration-400"
          onClick={() => scroll("left")}
        />
        <ChevronRight
          size={40}
          className="bg-white  opacity-50 hover:opacity-100 text-golden p-2 animate-pulse cursor-pointer hover:bg-white hover:animate-none hover:text-black hover:border-2 hover:border-black hover:border-r-0 transition ease-in-out duration-400 "
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  );
};

export default Carousel;
