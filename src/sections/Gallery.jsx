
import { gallery01, gallery02, gallery03, gallery04, spoon } from "../assets";
import { Carousel } from "../components";


const Gallery = () => {

 const carouselImages = [gallery01, gallery02, gallery03, gallery04];

  return (
    <section className=" text-golden font-cormorant py-40">
      <div className=" gap-10 flex max-md:flex-col justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-white text-[30px] ">Instagram</h1>
          <img src={spoon} alt="spoon-icon" width={50} />
          <h1 className="text-[52px] font-bold mt-6">Photo Gallery</h1>
          <p className="font-alt mt-12 text-gray text-[20px] leading-[36px]">
            At Gericht, dining is not just about food; it's about creating
            moments of connection. Each dish is meticulously crafted to delight
            both the eyes and the palate.
          </p>
          <button
            type="button"
            className="bg-golden text-black font-extrabold text-[20px] py-2 px-5 hover:bg-white duration-200 mt-12"
          >
            View More
          </button>
        </div>
        <div id="gallery-carousel-div" className="w-1/2 flex items-center justify-center">
        < Carousel carouselImages={carouselImages} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
