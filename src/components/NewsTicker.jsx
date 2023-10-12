import React from "react";

const newsItems = ["Gericht", "2024", "Gericht", "2024", "Gericht", "2024"];

const NewsTicker = () => {
  const concatNewsItems = [...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="py-4 bg-white ">
      <div id="ticker-div" className="flex border-y-8">
        <div id="ticker-subdiv" className="flex py-1 animate-tickerAni">
          {concatNewsItems.map((item, index) => (
            <div id="container" className="">
              <div
                key={index}
                className="px-16 font-cormorant text-[42px] font-extrabold uppercase leading-[47px]  tracking-wider text-black"
              >
                {item}
              </div>
            </div>
          ))}
        </div>
        <div id="ticker-subdiv" className="flex py-1 animate-tickerAni">
          {concatNewsItems.map((item, index) => (
            <div className="">
              <div
                key={index}
                className="px-16 font-cormorant text-[42px] font-extrabold uppercase leading-[47px]  tracking-wider text-black"
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
