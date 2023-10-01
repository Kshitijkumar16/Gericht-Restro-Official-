import React from "react";

const MenuItem = ({ title, price, tags }) => (
  <div id="menuitem-div" className="mt-4 w-full">
    <div className="flex flex-col justify-center py-2">
      <div className="grid grid-cols-4 place-content-center space-x-10">
        <p className=" col-span-2 font-cormorant text-2xl">{title}</p>
        <p className="relative bottom-0 texy-golden tracking-[-2px]">_________________</p>
        <p className="font-cormorant text-white text-2xl">{price}</p>
      </div>
      <div className="flex items-start">
        <p className=" font-alt text-gray text-sm">{tags}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
