import { spoon, welcome } from "../assets";

const Header = () => (
  <section
    className="pb-40 pt-16 font-cormorant text-golden max-lg:pb-24 max-lg:pt-10"
    id="hero-section"
  >
    <div className="flex items-center justify-between gap-10">
      <div className="flex w-1/2 flex-col items-start justify-between">
        <h2 className="text-[40px] font-bold text-white max-lg:text-[32px] ">
          Chase the new flavour
        </h2>
        <img
          src={spoon}
          alt="spoon-icon"
          width={70}
          className="max-lg:w-[50px]"
        />
        <h1 className="mt-10 text-[102px] font-extrabold uppercase leading-[110px] tracking-tighter max-lg:mt-6 max-lg:text-[70px] max-lg:leading-[80px]">
          The Key To Fine Dining
        </h1>
        <p className="pb-10 pt-20 text-[22px] leading-[35px] max-lg:pb-6 max-lg:pt-16 max-lg:text-[19px] max-lg:leading-[30px]">
          Experience fine dining at Gericht Restaurant. Our culinary experts
          craft exquisite dishes that will delight your senses. Visit us today
          for a memorable dining experience.
        </p>
        <button
          type="button"
          className="border-2 border-black bg-golden px-6 py-3 text-[25px] font-extrabold text-black transition-colors duration-500 ease-in-out hover:bg-white max-lg:px-5 max-lg:py-2 max-lg:text-[20px]"
        >
          Explore Menu
        </button>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <div className="w-[380px] max-lg:w-[300px]">
          <img src={welcome} alt="header_img" className="object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default Header;
