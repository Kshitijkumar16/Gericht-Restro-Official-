import { BsFacebook, BsInstagram, BsTwitch, BsTwitter } from "react-icons/bs";
import { fd3, spoon } from "../assets";
import { SpinLogo } from "../components";

const Header = () => {
  return (
    <section
      className="relative pb-40 lg:padding-x font-cormorant text-golden max-lg:pb-24 max-lg:pt-10"
      id="hero-section"
    >
      <div className="z-10 flex items-end justify-between gap-24 padding-x">
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

        <div id="hero-image-slider" className="w-[25%] z-10 ">
          <div className="relative flex items-center justify-center w-full -bottom-[50px] -right-[100px]">
            {/* <div className="h-[300px] w-[300px] bg-[url('./assets/fd3.png')]  bg-center"></div> */}
            <img src={fd3} alt="" className="min-w-[800px] " />
          </div>

          {/* <div id="reservation-div" className="flex flex-col items-start justify-center w-full px-10 py-8 rounded-xl bg-black/50 shadow-bg_gold">
            <h1 className="text-[28px] font-bold  uppercase tracking-wide">
              Find your <span className="text-white">table</span> for any{" "}
              <span className="">occasion!</span>
            </h1>
            <button
              type="button"
              className="mt-8 rounded-full p-2 px-5 text-[25px] font-bold shadow-bg_gold hover:shadow-sh_gold"
            >
              Find a reservation
            </button>
          </div> */}
        </div>
      </div>

      <div
        id="vertical-socials"
        className="absolute flex flex-col items-center justify-center h-full gap-3 overflow-hidden -top-20 left-10"
      >
        <div className="h-[370px] w-[2px] bg-golden"></div>
        <BsFacebook
          size={23}
          className="transition-all duration-300 ease-in cursor-pointer hover:text-white"
        />
        <div className="h-[30px] w-[2px] bg-golden"></div>
        <BsInstagram size={23} className="cursor-pointer hover:text-white " />
        <div className="h-[30px] w-[2px] bg-golden"></div>
        <BsTwitter size={23} className="cursor-pointer hover:text-white " />
        <div className="h-[30px] w-[2px] bg-golden"></div>
      </div>

      <div className="absolute -bottom-[500px] -right-[500px] pointer-events-none h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 z-0 "></div>
    </section>
  );
};

export default Header;
