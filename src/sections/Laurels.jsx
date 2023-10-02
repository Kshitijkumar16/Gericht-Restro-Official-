import { laurels, spoon } from "../assets";
import { awards } from "../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="flex gap-6 items-start justify-between" id="award-card-div">
    <img src={imgUrl} alt="awards" width={100} />
    <div className="flex flex-col justify-between items-start h-full">
      <p className="font-cormorant text-[33px] leading-[35px]">{title}</p>
      <p className="font-alt text-[rgba(255,255,255,0.85)] text-[15px] leading-[25px] mt-4">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div
    className="py-40 padding-x bg-[url(./assets/bg.png)] text-golden font-cormorant"
    id="awards-section"
  >
    <div className="lg:padding-x lg:gap-4 flex max-lg:flex-col justify-start items-center max-lg:items-start">
      <div className="lg:w-3/5 flex flex-col justify-start items-start">
        <div className="flex flex-row  w-full justify-between items-start gap-10">
          <div>
            <h2 className="text-white text-[24px]">Awards & Recognition</h2>
            <img src={spoon} alt="spoon-icon" width={50} />
            <h1 className="font-cormorant text-[62px]">Our Laurels</h1></div>
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
      <div className="max-lg:hidden lg:w-2/5 flex items-center justify-center">
        <img src={laurels} alt="laurels_img" width={500} />
      </div>
    </div>
  </div>
);

export default Laurels;
