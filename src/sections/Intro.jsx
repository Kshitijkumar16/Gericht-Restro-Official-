import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../assets";
import NewsTicker from "../components/NewsTicker";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <section id="intro-vid-section" className="relative overflow-hidden">
      <div className="relative flex items-center justify-center">
        <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
          muted
          className="object-fit z-0 "
        />
        <div className="absolute z-10 flex items-center justify-center">
          <div
            className="rounded-full bg-[rgba(0,0,0,0.45)] md:p-4 lg:p-5 xl:p-8 lap:p-10"
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
              <BsPauseFill className="text-white md:text-[50px] lg:text-[70px]" />
            ) : (
              <BsFillPlayFill className="text-white md:text-[50px] lg:text-[70px]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
