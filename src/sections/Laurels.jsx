import { laurels, spoon } from "../assets";
import { SpinLogo } from "../components";
import { awards } from "../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div
    className="flex items-start justify-between gap-4 rounded-lg px-4 py-5 shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold"
    id="award-card-div"
  >
    <img src={imgUrl} alt="awards" width={80} />
    <div className="flex h-full flex-col items-start justify-between gap-4">
      <p className="font-cormorant text-[22.5px] uppercase leading-[30px] tracking-wider">
        {title}
      </p>
      <p className="mt-4 font-Montserrat text-[16px] leading-[25px] tracking-wide text-[rgba(255,255,255,0.85)]">
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <section
    className="padding-x relative z-10  pt-[] font-cormorant text-golden -right-10"
    id="awards-section"
  >
    <div id="main-wrapper" className="padding-x">
      <div
        id="wrapper"
        className="flex items-center justify-start rounded-xl bg-gradient-to-r from-black/90 via-black/80 to-black/0 p-12 shadow-bg_gold max-lg:flex-col max-lg:items-start lg:gap-4"
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
              <AwardCard
                award={award}
                key={award.title}
                className="col-span-1"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center max-lg:hidden lg:w-2/6">
          <img src={laurels} alt="laurels_img" width={500} />
        </div>
      </div>
    </div>
    {/* <div className="absolute z-0 top-40 left-1/2 text-golden">
      <SpinLogo />
    </div> */}
  </section>
);
export default Laurels;
