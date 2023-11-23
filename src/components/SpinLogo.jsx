import { circleLogo } from "../assets";

const SpinLogo = ({ direction = " " }) => {
  const spinClass = direction === "R" ? "animate-spin" : "animate-spinR";

  return (
    <div className="">
      <img
        src={circleLogo}
        alt="logo"
        width={170}
        className={`pointer-events-none ${spinClass} rounded-full border-[2px] bg-black sm:w-[90px] md:w-[100px] sm:p-2 md:p-3 lg:w-[120px] lg:p-4 xl:w-[140px] lap:w-[170px]`}
      />
    </div>
  );
};

export default SpinLogo;
