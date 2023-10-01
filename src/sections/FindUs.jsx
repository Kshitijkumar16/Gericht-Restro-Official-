import { findus, spoon } from '../assets';

const FindUs = () => (
  <div className="granite_bg padding-x gap-10 py-40 flex justify-between items-center" id="contact">
    <div className="w-1/2 lg:padding-x text-golden flex flex-col items-start justify-between">
      <h1 className='text-white text-[32px] font-cormorant '>Contact</h1>
      <img src={spoon} alt="spoon-icon" width={45} />
      <h1 className="font-cormorant text-[72px] mt-1">Find Us</h1>
      <div className="mt-16">
        <p className="font-alt text-[22px]">
          Street A Bunglow, WallStreet Lane Right, Atlantis, NAM-0R
        </p>
        <p className="font-cormorant text-[32px] mt-10">Opening Hours</p>
        <p className="font-alt text-white mt-4 ">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="font-alt text-white mt-4">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button
        type="button"
        className="bg-golden text-black font-extrabold font-cormorant py-2 px-5 mt-10 transiton-bg ease-in-out hover:bg-white duration-500"
      >
        Visit Us
      </button>
    </div>

    <div className="w-1/2 flex items-center justify-center">
      <img src={findus} alt="finus_img" width={450} />
    </div>
  </div>
);

export default FindUs;
