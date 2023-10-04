import React from "react";

const newsItems = ["Gericht", "2023", "Gericht", "2023", "Gericht", "2023"];

const NewsTicker = () => {

  const concatNewsItems = [...newsItems, ...newsItems, ...newsItems]

  return (
    <div className="bg-white py-4 ">
      <div className=" flex border-4">
        <div className="animate-tickerAni flex ">
          {concatNewsItems.map((item, index) => (
            <div className=" ">
              <div
                key={index}
                className="font-cormorant text-[32px] font-extrabold tracking-wider text-black px-16"
              >
                {item}
              </div>
            </div>
          ))}
        </div>
        <div className=" animate-tickerAni flex ">
          {concatNewsItems.map((item, index) => (
            <div className="">
              <div
                key={index}
                className="font-cormorant text-[32px] font-extrabold tracking-wider text-black px-16"
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
