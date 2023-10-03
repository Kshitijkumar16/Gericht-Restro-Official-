import { circleLogo } from "../assets";

const SpinLogo = () => {
  return (
    <div className="">
      <img
        src={circleLogo}
        alt="logo"
        width={170}
        className=" pointer-events-none animate-spin rounded-full border-[2px] bg-black p-4 "
      />
    </div>
  );
};

export default SpinLogo;
