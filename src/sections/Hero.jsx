
import { spoon, welcome } from "../assets";

const Header = () => (
  <section className="text-golden font-cormorant pt-16 pb-40 max-lg:pb-24 max-lg:pt-10" id="hero-section">
    <div className="flex items-center justify-between gap-10">
      <div className="w-1/2 flex flex-col justify-between items-start">
        <h2 className="text-white font-bold text-[40px] max-lg:text-[32px] ">
          Chase the new flavour
        </h2>
        <img src={spoon} alt="spoon-icon" width={70} className="max-lg:w-[50px]" />
        <h1 className="uppercase text-[102px] tracking-tighter leading-[110px] max-lg:text-[70px] max-lg:leading-[80px] mt-10 max-lg:mt-6 font-extrabold">
          The Key To Fine Dining
        </h1>
        <p className="pt-20 pb-10 max-lg:pb-6 max-lg:pt-16 text-[22px] leading-[35px] max-lg:text-[19px] max-lg:leading-[30px]">
          Experience fine dining at Gericht Restaurant. Our culinary experts
          craft exquisite dishes that will delight your senses. Visit us today
          for a memorable dining experience.
        </p>
        <button type="button" className="bg-golden hover:bg-white px-6 py-3 max-lg:py-2 max-lg:px-5 text-[25px] max-lg:text-[20px] font-extrabold border-2 border-black text-black transition-colors ease-in-out duration-500">
          Explore Menu
        </button>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-[380px] max-lg:w-[300px]">
          <img src={welcome} alt="header_img" className="object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default Header;
