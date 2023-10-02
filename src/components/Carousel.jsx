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
    <div id="carousel-container" className="relative overflow-hidden">
      <div
        id="image-container"
        className="hide_scroll flex gap-10 overflow-auto"
        ref={scrollRef}
      >
        {carouselImages.map((slide, index) => (
          <div
            id="image-card"
            className="group relative hover:cursor-pointer"
            key={`carousel-image-${index}`}
          >
            <img
              src={slide}
              alt="carousel-image"
              className="max-h-[448px] min-h-[447px] min-w-[301px] max-w-[302px] rounded-xl object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-70"
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
      <div className="pointer-events-auto absolute inset-0 bottom-96 flex items-end justify-between">
        <ChevronLeft
          size={40}
          className="duration-400 animate-pulse cursor-pointer bg-white p-2 text-golden opacity-50 transition ease-in-out hover:animate-none hover:border-2 hover:border-l-0 hover:border-black hover:bg-white hover:text-black hover:opacity-100"
          onClick={() => scroll("left")}
        />
        <ChevronRight
          size={40}
          className="duration-400  animate-pulse cursor-pointer bg-white p-2 text-golden opacity-50 transition ease-in-out hover:animate-none hover:border-2 hover:border-r-0 hover:border-black hover:bg-white hover:text-black hover:opacity-100 "
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  );
};

export default Carousel;
