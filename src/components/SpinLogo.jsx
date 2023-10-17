import { circleLogo } from "../assets";

const SpinLogo = ({direction = " "}) => {
  const spinClass = direction === "R" ? "animate-spin" : "animate-spinR";

  return (
    <div className="">
      <img
        src={circleLogo}
        alt="logo"
        width={170}
        className={`pointer-events-none ${spinClass} rounded-full border-[2px] bg-black p-4 lap:w-[170px] xl:w-[140px]`}
      />
    </div>
  );
};

export default SpinLogo;
