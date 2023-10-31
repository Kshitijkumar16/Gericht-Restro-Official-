import { motion as m } from "framer-motion";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { fd3, spoon } from "../assets";

const Header = () => {
  return (
    <section
      className="lg:padding-x relative font-cormorant text-golden md:pb-24 lg:pb-28 xl:pb-32 lap:pb-40"
      id="hero-section"
    >
      <div className="padding-x z-10 flex items-end justify-between md:gap-10 lg:gap-8 xl:gap-10 lap:gap-24">
        <m.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          id="main-hero-div"
          className="relative flex w-[75%] flex-col items-start justify-between overflow-hidden rounded-xl bg-gradient-to-r from-black/100 via-black/80 to-black/30 shadow-bg_gold md:px-7 md:py-4 lg:px-8 lg:py-5 lg:pb-6 xl:px-10 xl:py-6 xl:pb-8"
        >
          <h2 className="md: font-bold text-white md:text-[25px] lg:text-[30px] xl:text-[35px] lap:text-[40px]  ">
            Chase the new flavour
          </h2>
          <img
            src={spoon}
            alt="spoon-icon"
            width={70}
            className="md:w-[50px] lg:w-[55px] xl:w-[60px] lap:w-[70px]"
          />
          <h1 className="mt-6 font-extrabold uppercase tracking-tighter md:text-[60px] md:leading-[65px] lg:text-[70px] lg:leading-[80px] xl:text-[85px] xl:leading-[90px] lap:text-[102px] lap:leading-[110px] ">
            The Key To Fine Dining
          </h1>
          <p className="w-4/5 tracking-wide md:pb-7 md:pt-7 md:text-[16px] lg:pb-[30px] lg:pt-8 lg:text-[17px] lg:leading-[31px] xl:pb-8 xl:pt-10 xl:text-[19px] xl:leading-[35px] lap:pt-16 lap:text-[25px]">
            Our culinary experts craft{" "}
            <span className="text-white">exquisite dishes</span> that will
            delight your senses.
            {/* <br /> Visit us today for a <span className="">memorable</span>{" "}
            dining experience. */}
          </p>
          <button
            type="button"
            className=" rounded-full border-[2px] font-extrabold text-golden  shadow-bg_gold transition-colors duration-500 ease-in-out hover:shadow-sh_gold md:px-2 md:py-1 lg:px-[10px] lg:py-[6px] lg:text-[18px] xl:mt-8 xl:px-3 xl:py-2 xl:text-[20px] lap:px-5 lap:py-2 lap:text-[25px]"
          >
            Explore Menu
          </button>
        </m.div>

        <div id="hero-image-slider" className="relative z-10 w-[25%]">
          <div className="relative flex w-full items-center justify-center lg:-right-[55px] lg:bottom-[25px] xl:-bottom-[0px] xl:-right-[40px] lap:-bottom-[0px] lap:-right-[00px]">
            <img
              src={fd3}
              alt="food-image"
              className="animate-spinS rounded-full object-cover  object-center md:min-w-[230px] lg:min-w-[290px] xl:min-w-[310px]  lap:min-w-[400px]"
            />
          </div>
        </div>
      </div>

      <div
        id="vertical-socials"
        className="absolute flex h-full flex-col items-center justify-center overflow-hidden md:-top-10 md:left-5 md:gap-2 lg:-top-14 lg:left-10 lg:gap-3 xl:-top-16 xl:left-10 lap:-top-20 lap:left-10"
      >
        <div className="w-[2px] bg-golden md:h-[160px] lg:h-[220px] xl:h-[310px] lap:h-[370px]"></div>
        <BsFacebook
          size={23}
          className="cursor-pointer transition-all duration-300 ease-in hover:text-white md:w-[18px] lg:w-[23px]"
        />
        <div className="w-[2px] bg-golden md:h-[15px] lg:h-[20px] xl:h-[20px] lap:h-[30px]"></div>
        <BsInstagram
          size={23}
          className="cursor-pointer hover:text-white md:w-[20px] lg:w-[23px]"
        />
        <div className=" w-[2px] bg-golden md:h-[15px] lg:h-[18px] xl:h-[20px] lap:h-[30px]"></div>
        <BsTwitter
          size={23}
          className="cursor-pointer hover:text-white md:w-[18px] lg:w-[23px]"
        />
        <div className=" w-[2px] bg-golden md:h-[35px] lg:h-[40px] xl:h-[30px] lap:h-[30px]"></div>
      </div>
    </section>
  );
};

export default Header;
