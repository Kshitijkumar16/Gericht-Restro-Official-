import { BsInstagram } from "react-icons/bs";
import { galleryImages } from "../constants";
import GallerySlider from "../components/GallerySlider";

const Gallery = () => {
  return (
    <section className="flex flex-col gap-2 py-2">
      <div id="ticker-one" className="group flex gap-2">
        <div
          id="subdiv-ticker-one"
          className="group-hover:pause flex animate-tickerG gap-2"
        >
          {galleryImages.map((image, i) => (
            <GallerySlider image={image} index={i} />
          ))}
        </div>
        <div
          id="subdiv-ticker-one"
          className="group-hover:pause flex animate-tickerG gap-2"
        >
          {galleryImages.map((image, i) => (
            <GallerySlider image={image} index={i} />
          ))}
        </div>
      </div>
      <div id="ticker-two" className="group flex gap-2">
        <div
          id="subdiv-ticker-two"
          className="group-hover:pause flex animate-tickerGr gap-2"
        >
          {galleryImages.map((image, i) => (
            <GallerySlider image={image} index={i} />
          ))}
        </div>
        <div
          id="subdiv-ticker-two"
          className="group-hover:pause flex animate-tickerGr gap-2"
        >
          {galleryImages.map((image, i) => (
            <GallerySlider image={image} index={i} />
          ))}
        </div>
      </div>
      <div id="ticker-three" className="group flex gap-2">
        <div
          id="subdiv-ticker-three"
          className="group-hover:pause flex animate-tickerG gap-2"
        >
          {galleryImages.map((image, i) => (
            <GallerySlider image={image} index={i} />
          ))}
        </div>
        <div
          id="subdiv-ticker-three"
          className="group-hover:pause flex animate-tickerG gap-2"
        >
          {galleryImages.map((image, i) => (
            <GallerySlider image={image} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
