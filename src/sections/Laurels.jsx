import { laurels, spoon } from "../assets";
import { awards } from "../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div
    className="flex items-start justify-between gap-4 shadow-bg_gold hover:bg-black hover:shadow-sh_gold transition-all duration-300 ease-in-out rounded-lg px-4 py-5"
    id="award-card-div"
  >
    <img src={imgUrl} alt="awards" width={80} />
    <div className="flex h-full flex-col items-start gap-4 justify-between">
      <p className="font-cormorant text-[22.5px] uppercase leading-[30px] tracking-wider">{title}</p>
      <p className="mt-4 font-Montserrat tracking-wide text-[16px] leading-[25px] text-[rgba(255,255,255,0.85)]">
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => 
  <section
    className="lg:padding-x z-10 relative py-40 pt-64 font-cormorant text-golden "
    id="awards-section"
  >
    <div
      id="wrapper"
      className="p-12 rounded-xl flex bg-gradient-to-r from-black via-black/80 to-black/0 items-center justify-start shadow-bg_gold max-lg:flex-col max-lg:items-start lg:gap-4"
    >
      <div className="flex flex-col items-start justify-start lg:w-4/6">
        <div className="flex w-full  flex-row items-start justify-between gap-10">
          <div>
            <h2 className="text-[40px] font-bold tracking-wider text-white">
              Our Laurels
            </h2>
            <img src={spoon} alt="spoon-icon" width={70} />
          </div>
          <div className="lg:hidden">
            <img src={laurels} alt="laurels_img" width={300} />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-x-10 gap-y-10 ">
          {awards.map((award) => (
            <AwardCard award={award} key={award.title} className="col-span-1" />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center max-lg:hidden lg:w-2/6">
        <img src={laurels} alt="laurels_img" width={500} />
      </div>
    </div>
  </section>
;

export default Laurels;
