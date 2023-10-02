import { gallery01, gallery02, gallery03, gallery04, spoon } from "../assets";
import { Carousel } from "../components";

const Gallery = () => {
  const carouselImages = [gallery01, gallery02, gallery03, gallery04];

  return (
    <section className=" py-40 font-cormorant text-golden">
      <div className=" flex items-center justify-between gap-10 max-md:flex-col">
        <div className="w-1/2">
          <h1 className="text-[30px] text-white ">Instagram</h1>
          <img src={spoon} alt="spoon-icon" width={50} />
          <h1 className="mt-6 text-[52px] font-bold">Photo Gallery</h1>
          <p className="mt-12 font-alt text-[20px] leading-[36px] text-gray">
            At Gericht, dining is not just about food; it's about creating
            moments of connection. Each dish is meticulously crafted to delight
            both the eyes and the palate.
          </p>
          <button
            type="button"
            className="mt-12 bg-golden px-5 py-2 text-[20px] font-extrabold text-black duration-200 hover:bg-white"
          >
            View More
          </button>
        </div>
        <div
          id="gallery-carousel-div"
          className="flex w-1/2 items-center justify-center"
        >
          <Carousel carouselImages={carouselImages} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
