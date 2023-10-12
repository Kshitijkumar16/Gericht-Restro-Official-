import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";

const HoveredImage = ({ imageUrl }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0, 0, 0, 0.8)" }}
    >
      <img src={imageUrl} alt="hovered-gallery-image" />
      <div className="absolute inset-0 flex items-center justify-center">
        <BsInstagram className="text-4xl text-white" />
      </div>
    </div>
  );
};

export default HoveredImage;
