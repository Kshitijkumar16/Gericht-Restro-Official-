import { findus, spoon } from "../assets";

const FindUs = () => (
  <section
    className="padding-x relative z-10 flex items-center justify-start py-40 "
    id="contact"
  >
    <div className="flex w-4/5 items-center justify-between gap-16 rounded-xl bg-gradient-to-r from-black/90 via-black/60 to-black/20 p-10 shadow-bg_gold">
      <div className="flex w-1/2 flex-col items-start justify-start text-golden">
        <div>
          <h1 className="font-cormorant text-[45px] font-bold tracking-wide text-white ">
            Contact
          </h1>
          <img src={spoon} alt="spoon-icon" width={70} />
        </div>
        <div className="mt-16">
          <p className="font-cormorant text-[22px]">
            <span className="font-bold tracking-wide text-golden">Nagpur </span>
            <br />
            Street A Bunglow, WallStreet Lane Right, Atlantis, NAM-0R
          </p>
          <p className="mt-16 font-cormorant text-[32px]">Opening Hours</p>
          <p className=" mt-4 font-alt capitalize text-white ">
            MON - FRI: 10:00 am - 02:00 am
          </p>
          <p className=" mt-4 font-alt capitalize text-white">
            SAT - SUN: 10:00 am - 03:00 am
          </p>
        </div>
        <button
          type="button"
          className=" mt-10 rounded-lg px-5 py-2 font-cormorant text-[22px] font-extrabold shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold"
        >
          Visit Us
        </button>
      </div>

      <div className="flex w-1/2 items-center justify-center overflow-hidden rounded-xl shadow-bg_white">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
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
