import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../assets";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <section id="intro-vid-section" className="">
      <div className="relative flex items-center justify-center">
        <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
          muted
          className="z-0 object-fit"
        />
        <div className="absolute flex items-center justify-center z-10">
          <div
            className="p-10 rounded-full bg-[rgba(0,0,0,0.45)]"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <BsPauseFill className="text-white text-[70px]" />
            ) : (
              <BsFillPlayFill className="text-white text-[70px]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
