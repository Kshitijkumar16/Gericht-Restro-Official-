import { galleryImages } from "../constants";
import GallerySlider from "../components/GallerySlider";
import { useState } from "react";

const Gallery = () => {
  const [activeSlider, setactiveSlider] = useState("slider-one");
  const [activeImg, setactiveImg] = useState("");

  return (
    <section className="flex flex-col gap-2 py-2 ">
      <div
        id="slider-one"
        onMouseEnter={() => setactiveSlider("slider-one")}
        className={`group relative flex gap-2 ${
          activeSlider === "slider-one" ? "z-20" : "z-10"
        }`}
      >
        <div
          id="subdiv-slider-one"
          className="group-hover:pause flex animate-tickerG gap-2"
        >
          {galleryImages.map((image) => (
            <div
              key={image.key}
              onMouseEnter={() => setactiveImg(image.key)}
              className={`relative ${
                activeImg === image.key ? "z-30" : "z-20"
              }`}
            >
              <GallerySlider image={image} />
            </div>
          ))}
        </div>
        <div
          id="subdiv-slider-one"
          className="group-hover:pause flex animate-tickerG gap-2"
        >
          {galleryImages.map((image) => (
            <div
              key={image.key}
              onMouseEnter={() => setactiveImg(image.key)}
              className={`relative ${
                activeImg === image.key ? "z-30" : "z-20"
              }`}
            >
              <GallerySlider image={image} />
            </div>
          ))}
        </div>
      </div>
      <div
        id="slider-two"
        onMouseEnter={() => setactiveSlider("slider-two")}
        className={`group relative flex gap-2 ${
          activeSlider === "slider-two" ? "z-20" : "z-10"
        }`}
      >
        <div
          id="subdiv-slider-two"
          className="group-hover:pause flex animate-tickerGr gap-2"
        >
          {galleryImages.map((image) => (
            <div
              key={image.key}
              onMouseEnter={() => setactiveImg(image.key)}
              className={`relative ${
                activeImg === image.key ? "z-30" : "z-20"
              }`}
            >
              <GallerySlider image={image} />
            </div>
          ))}
        </div>
        <div
          id="subdiv-slider-two"
          className="group-hover:pause flex animate-tickerGr gap-2"
        >
          {galleryImages.map((image) => (
            <div
              key={image.key}
              onMouseEnter={() => setactiveImg(image.key)}
              className={`relative ${
                activeImg === image.key ? "z-30" : "z-20"
              }`}
            >
              <GallerySlider image={image} />
            </div>
          ))}
        </div>
      </div>
      <div
        id="slider-three"
        onMouseEnter={() => setactiveSlider("slider-three")}
        className={`group relative flex gap-2 ${
          activeSlider === "slider-three" ? "z-20" : "z-10"
        }`}
      >
        <div
          id="subdiv-ticker-three"
          className="group-hover:pause flex animate-tickerG gap-2"
        >
          {galleryImages.map((image) => (
            <div
              key={image.key}
              onMouseEnter={() => setactiveImg(image.key)}
              className={`relative ${
                activeImg === image.key ? "z-30" : "z-20"
              }`}
            >
              <GallerySlider image={image} />
            </div>
          ))}
        </div>
        <div
          id="subdiv-ticker-three"
          className="group-hover:pause flex animate-tickerG gap-2"
        >
          {galleryImages.map((image) => (
            <div
              key={image.key}
              onMouseEnter={() => setactiveImg(image.key)}
              className={`relative ${
                activeImg === image.key ? "z-30" : "z-20"
              }`}
            >
              <GallerySlider image={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
