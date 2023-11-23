import { findus, spoon } from "../assets";

const FindUs = () => (
  <section
    className="padding-x relative z-10 flex items-center justify-start sm:py-24 md:py-28 lg:py-28 xl:py-32 lap:py-40 "
    id="contact"
  >
    <div className="flex w-4/5 items-center justify-between rounded-xl bg-gradient-to-r from-black/90 via-black/60 to-black/20 shadow-bg_gold sm:gap-9 sm:p-7 md:gap-10 md:p-7 lg:gap-10 lg:p-8 xl:gap-12 xl:p-8 lap:gap-16 lap:p-10">
      <div className="flex w-1/2 flex-col items-start justify-start text-golden">
        <div>
          <h1 className="font-cormorant font-bold tracking-wide text-white sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[40px] lap:text-[45px] ">
            Contact
          </h1>
          <img
            src={spoon}
            alt="spoon-icon"
            width={70}
            className="sm:w-[40px] md:w-[45px] lg:w-[50px] xl:w-[60px] lap:w-[70px]"
          />
        </div>
        <div className="sm:mt-7 md:mt-10 lg:mt-10 xl:mt-12 lap:mt-16">
          <p className="font-cormorant sm:text-[13px] md:text-[18px] lg:text-[18px] xl:text-[20px] lap:text-[22px]">
            <span className="font-bold tracking-wide text-golden">Nagpur </span>
            <br />
            Street A Bunglow, WallStreet Lane Right, Atlantis, NAM-0R
          </p>
          <p className="font-cormorant sm:mt-6 sm:text-[20px] md:mt-10 md:text-[23px] lg:mt-10 lg:text-[24px] xl:mt-12 xl:text-[28px] lap:mt-16 lap:text-[32px]">
            Opening Hours
          </p>
          <p className="font-alt capitalize text-white max-md:text-[10px] sm:mt-3 md:mt-3 lg:mt-3 xl:mt-3 lap:mt-4">
            MON - FRI: 10:00 am - 02:00 am
          </p>
          <p className="font-alt capitalize text-white max-md:text-[10px] sm:mt-3 md:mt-3 lg:mt-3 xl:mt-3 lap:mt-4">
            SAT - SUN: 10:00 am - 03:00 am
          </p>
        </div>
        <button
          type="button"
          className="rounded-lg font-cormorant font-extrabold shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold sm:mt-5 sm:px-3 sm:py-[5px] md:mt-6 md:px-3 md:py-[5px] lg:mt-6 lg:px-3 lg:py-[6px] lg:text-[20px] xl:mt-8 xl:px-4 xl:py-[7px] xl:text-[22px] lap:mt-10 lap:px-5 lap:py-2"
        >
          Visit Us
        </button>
      </div>

      <div className="flex w-1/2 items-center justify-center overflow-hidden rounded-xl shadow-bg_white">
        <iframe
          className="sm:h-[310px] md:h-[380px] lg:h-[400px] xl:h-[500px] lap:h-[550px]"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tanjore,%20Nagpur%20India+(Gericht%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">
            Population calculator map
          </a>
        </iframe>
      </div>
    </div>
  </section>
);

export default FindUs;
