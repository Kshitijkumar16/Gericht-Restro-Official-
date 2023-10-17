import { motion as m } from "framer-motion";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { fd3, spoon } from "../assets";

const Header = () => {
  return (
    <section
      className="relative lg:padding-x font-cormorant text-golden xl:pb-32 lap:pb-40"
      id="hero-section"
    >
      <div className="z-10 flex items-end justify-between padding-x xl:gap-10 lap:gap-24">
        <m.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          id="main-hero-div"
          className="relative flex w-[75%] flex-col items-start justify-between overflow-hidden rounded-xl bg-gradient-to-r from-black/100 via-black/80 to-black/30 px-10 py-6 pb-8 shadow-bg_gold"
        >
          <h2 className="text-[35px] font-bold text-white lap:text-[40px] ">
            Chase the new flavour
          </h2>
          <img
            src={spoon}
            alt="spoon-icon"
            width={70}
            className="w-[60px] lap:w-[70px]"
          />
          <h1 className="mt-6 text-[85px] font-extrabold uppercase leading-[90px] tracking-tighter lap:text-[102px] lap:leading-[110px] ">
            The Key To Fine Dining
          </h1>
          <p className="w-4/5 pb-8 pt-10 text-[19px] leading-[35px] tracking-wide max-lg:pb-6 max-lg:pt-16 max-lg:text-[19px] max-lg:leading-[30px] lap:pt-16 lap:text-[25px]">
            Our culinary experts craft{" "}
            <span className="text-white">exquisite dishes</span> that will
            delight your senses.
            <br /> Visit us today for a <span className="">memorable</span>{" "}
            dining experience.
          </p>
          <button
            type="button"
            className=" rounded-full font-extrabold text-golden shadow-bg_gold transition-colors duration-500 ease-in-out hover:shadow-sh_gold xl:px-3 xl:py-2 xl:text-[20px] lap:px-5 lap:py-2 lap:text-[25px]"
          >
            Explore Menu
          </button>
        </m.div>

        <div id="hero-image-slider" className="relative z-10 w-[25%]">
          <div className="relative flex w-full items-center justify-center xl:-bottom-[0px] xl:-right-[40px] lap:-bottom-[0px] lap:-right-[00px]">
            <img
              src={fd3}
              alt="food-image"
              className="animate-spinS rounded-full object-cover  object-center xl:min-w-[310px]  lap:min-w-[400px]"
            />
          </div>
        </div>
      </div>

      <div
        id="vertical-socials"
        className="absolute flex flex-col items-center justify-center h-full gap-3 overflow-hidden xl:-top-16 xl:left-10 lap:-top-20 lap:left-10"
      >
        <div className="w-[2px] bg-golden xl:h-[310px] lap:h-[370px]"></div>
        <BsFacebook
          size={23}
          className="transition-all duration-300 ease-in cursor-pointer hover:text-white"
        />
        <div className="w-[2px] bg-golden xl:h-[20px] lap:h-[30px]"></div>
        <BsInstagram size={23} className="cursor-pointer hover:text-white " />
        <div className=" w-[2px] bg-golden xl:h-[20px] lap:h-[30px]"></div>
        <BsTwitter size={23} className="cursor-pointer hover:text-white " />
        <div className=" w-[2px] bg-golden xl:h-[30px] lap:h-[30px]"></div>
      </div>
    </section>
  );
};

export default Header;
