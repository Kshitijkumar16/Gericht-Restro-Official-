import { laurels, spoon } from "../assets";
import { SpinLogo } from "../components";
import { awards } from "../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div
    className="flex items-start justify-between transition-all duration-300 ease-in-out rounded-lg shadow-bg_gold hover:bg-black hover:shadow-sh_gold xl:gap-3 xl:px-3 xl:py-4 lap:gap-4 lap:px-4 lap:py-5"
    id="award-card-div"
  >
    <img
      src={imgUrl}
      alt="awards"
      width={80}
      className="xl:w-[65px] lap:w-[80px]"
    />
    <div className="flex flex-col items-start justify-between h-full xl:gap-3 lap:gap-4">
      <p className="font-cormorant uppercase tracking-wider xl:text-[17.5px] xl:leading-[24px] lap:text-[22.5px] lap:leading-[30px]">
        {title}
      </p>
      <p className="font-Montserrat lap:text-[16px] xl:text-[13px] lap:leading-[25px] xl:leading-[22px] tracking-wide text-[rgba(255,255,255,0.85)] xl:mt-3 lap:mt-4">
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <section
    className="padding-x relative z-10  pt-[] font-cormorant text-golden xl:-right-8 lap:-right-10"
    id="awards-section"
  >
    <div id="main-wrapper" className="padding-x">
      <div
        id="wrapper"
        className="flex items-center justify-start p-12 rounded-xl bg-gradient-to-r from-black/90 via-black/80 to-black/0 shadow-bg_gold max-lg:flex-col max-lg:items-start lg:gap-4"
      >
        <div className="flex flex-col items-start justify-start lg:w-4/6">
          <div className="flex flex-row items-start justify-between w-full gap-10">
            <div>
              <h2 className="font-bold tracking-wider text-white xl:text-[35px] lap:text-[40px]">
                Our Laurels
              </h2>
              <img
                src={spoon}
                alt="spoon-icon"
                width={70}
                className="xl:w-[60px] lap:w-[70px]"
              />
            </div>
            <div className="lg:hidden">
              <img src={laurels} alt="laurels_img" width={300} />
            </div>
          </div>
          <div className="grid grid-cols-2 xl:mt-10 xl:gap-x-8 xl:gap-y-8 lap:mt-16 lap:gap-x-10 lap:gap-y-10">
            {awards.map((award) => (
              <AwardCard
                award={award}
                key={award.title}
                className="col-span-1"
              />
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center lg:w-2/6 top-4">
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
