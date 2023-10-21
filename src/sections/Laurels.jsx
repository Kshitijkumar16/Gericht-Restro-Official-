import { laurels, spoon } from "../assets";
import { SpinLogo } from "../components";
import { awards } from "../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div
    className="flex items-start justify-between rounded-lg shadow-bg_gold transition-all duration-300 ease-in-out hover:bg-black hover:shadow-sh_gold lg:gap-3 lg:px-2 lg:py-3 xl:gap-3 xl:px-3 xl:py-4 lap:gap-4 lap:px-4 lap:py-5"
    id="award-card-div"
  >
    <img
      src={imgUrl}
      alt="awards"
      width={80}
      className="lg:w-[50px] xl:w-[65px] lap:w-[80px]"
    />
    <div className="flex h-full flex-col items-start justify-between lg:gap-[10px] xl:gap-3 lap:gap-4">
      <p className="font-cormorant uppercase tracking-wider lg:text-[18px] lg:leading-[22px] xl:text-[17.5px] xl:leading-[24px] lap:text-[22.5px] lap:leading-[30px]">
        {title}
      </p>
      <p className="font-Montserrat tracking-wide text-[rgba(255,255,255,0.85)] lg:mt-4 lg:text-[16px] lg:leading-[25px] xl:mt-3 xl:text-[13px] xl:leading-[22px] lap:mt-4 lap:text-[16px] lap:leading-[25px]">
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <section
    className="padding-x relative z-10 font-cormorant text-golden md:-right-10 xl:-right-8 lap:-right-10"
    id="awards-section"
  >
    <div id="main-wrapper" className="padding-x">
      <div
        id="wrapper"
        className="flex rounded-xl bg-gradient-to-r from-black/90 via-black/80 to-black/0 shadow-bg_gold lg:flex-col lg:items-center lg:justify-center lg:p-10 xl:flex-row xl:items-center xl:justify-start lg:gap-16 xl:gap-10 xl:p-12"
      >
        <div className="flex flex-col items-start justify-start xl:w-4/6">
          <div className="flex w-full flex-row items-start justify-between gap-10">
            <div>
              <h2 className="font-bold tracking-wider text-white lg:text-[30px] xl:text-[35px] lap:text-[40px]">
                Our Laurels
              </h2>
              <img
                src={spoon}
                alt="spoon-icon"
                width={70}
                className="lg:w-[55px] xl:w-[60px] lap:w-[70px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:mt-12 lg:gap-x-10 lg:gap-y-10 xl:mt-10 xl:gap-x-8 xl:gap-y-8 lap:mt-16 lap:gap-x-10 lap:gap-y-10">
            {awards.map((award) => (
              <AwardCard
                award={award}
                key={award.title}
                className="col-span-1"
              />
            ))}
          </div>
        </div>
        <div className="relative top-4 flex items-center justify-center xl:w-2/6">
          <img src={laurels} alt="laurels_img" width={500} className="xl:w-[500px] lg:w-[350px]"/>
        </div>
      </div>
    </div>
  </section>
);
export default Laurels;
