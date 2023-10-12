import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { fd3, spoon } from "../assets";

const Header = () => {
  return (
    <section
      className="lg:padding-x relative pb-40 font-cormorant text-golden max-lg:pb-24 max-lg:pt-10"
      id="hero-section"
    >
      <div className="padding-x z-10 flex items-end justify-between gap-24">
        <div
          id="main-hero-div"
          className="relative flex w-[75%] flex-col items-start justify-between overflow-hidden rounded-xl bg-gradient-to-r from-black/100 via-black/80 to-black/30 px-10 py-6 pb-8 shadow-bg_gold"
        >
          <h2 className="text-[40px] font-bold text-white max-lg:text-[32px] ">
            Chase the new flavour
          </h2>
          <img
            src={spoon}
            alt="spoon-icon"
            width={70}
            className="max-lg:w-[50px]"
          />
          <h1 className="mt-6 text-[102px] font-extrabold uppercase leading-[110px] tracking-tighter max-lg:mt-6 max-lg:text-[70px] max-lg:leading-[80px]">
            The Key To Fine Dining
          </h1>
          <p className="w-4/5 pb-8 pt-16 text-[25px] leading-[35px] tracking-wide max-lg:pb-6 max-lg:pt-16 max-lg:text-[19px] max-lg:leading-[30px]">
            Our culinary experts craft{" "}
            <span className="text-white">exquisite dishes</span> that will
            delight your senses.
            <br /> Visit us today for a <span className="">memorable</span>{" "}
            dining experience.
          </p>
          <button
            type="button"
            className="rounded-full px-5 py-2 text-[25px] font-extrabold text-golden shadow-bg_gold transition-colors duration-500 ease-in-out hover:shadow-sh_gold max-lg:px-5 max-lg:py-2 max-lg:text-[20px]"
          >
            Explore Menu
          </button>
        </div>

        <div id="hero-image-slider" className="z-10 w-[25%] ">
          <div className="relative -bottom-[50px] -right-[100px] flex w-full items-center justify-center">
            <img src={fd3} alt="" className="min-w-[800px] " />
          </div>
        </div>
      </div>

      <div
        id="vertical-socials"
        className="absolute -top-20 left-10 flex h-full flex-col items-center justify-center gap-3 overflow-hidden"
      >
        <div className="h-[370px] w-[2px] bg-golden"></div>
        <BsFacebook
          size={23}
          className="cursor-pointer transition-all duration-300 ease-in hover:text-white"
        />
        <div className="h-[30px] w-[2px] bg-golden"></div>
        <BsInstagram size={23} className="cursor-pointer hover:text-white " />
        <div className="h-[30px] w-[2px] bg-golden"></div>
        <BsTwitter size={23} className="cursor-pointer hover:text-white " />
        <div className="h-[30px] w-[2px] bg-golden"></div>
      </div>

      <div className="pointer-events-none absolute -bottom-[500px] -right-[500px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div>
    </section>
  );
};

export default Header;
