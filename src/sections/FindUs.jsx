import { findus, spoon } from "../assets";

const FindUs = () => (
  <div
    className="granite_bg padding-x flex items-center justify-between gap-10 py-40"
    id="contact"
  >
    <div className="lg:padding-x flex w-1/2 flex-col items-start justify-between text-golden">
      <h1 className="font-cormorant text-[32px] text-white ">Contact</h1>
      <img src={spoon} alt="spoon-icon" width={45} />
      <h1 className="mt-1 font-cormorant text-[72px]">Find Us</h1>
      <div className="mt-16">
        <p className="font-alt text-[22px]">
          Street A Bunglow, WallStreet Lane Right, Atlantis, NAM-0R
        </p>
        <p className="mt-10 font-cormorant text-[32px]">Opening Hours</p>
        <p className="mt-4 font-alt text-white ">
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p className="mt-4 font-alt text-white">
          Sat - Sun: 10:00 am - 03:00 am
        </p>
      </div>
      <button
        type="button"
        className="transiton-bg mt-10 bg-golden px-5 py-2 font-cormorant font-extrabold text-black duration-500 ease-in-out hover:bg-white"
      >
        Visit Us
      </button>
    </div>

    <div className="flex w-1/2 items-center justify-center">
      <img src={findus} alt="finus_img" width={450} />
    </div>
  </div>
);

export default FindUs;
