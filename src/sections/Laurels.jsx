import { laurels, spoon } from "../assets";
import { awards } from "../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="flex items-start justify-between gap-6" id="award-card-div">
    <img src={imgUrl} alt="awards" width={100} />
    <div className="flex h-full flex-col items-start justify-between">
      <p className="font-cormorant text-[33px] leading-[35px]">{title}</p>
      <p className="mt-4 font-alt text-[15px] leading-[25px] text-[rgba(255,255,255,0.85)]">
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <div
    className="padding-x granite_bg py-40 font-cormorant text-golden"
    id="awards-section"
  >
    <div className="lg:padding-x flex items-center justify-start max-lg:flex-col max-lg:items-start lg:gap-4">
      <div className="flex flex-col items-start justify-start lg:w-3/5">
        <div className="flex w-full  flex-row items-start justify-between gap-10">
          <div>
            <h2 className="text-[24px] text-white">Awards & Recognition</h2>
            <img src={spoon} alt="spoon-icon" width={50} />
            <h1 className="font-cormorant text-[62px]">Our Laurels</h1>
          </div>
          <div className="lg:hidden">
            <img src={laurels} alt="laurels_img" width={300} />
          </div>
        </div>
        <div className="mt-24 grid grid-cols-2 gap-x-4 gap-y-20">
          {awards.map((award) => (
            <AwardCard award={award} key={award.title} className="col-span-1" />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center max-lg:hidden lg:w-2/5">
        <img src={laurels} alt="laurels_img" width={500} />
      </div>
    </div>
  </div>
);

export default Laurels;
