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
          className="z-0 object-fit "
        />
        <div className="absolute z-10 flex items-center justify-center">
          <div
            className="rounded-full bg-[rgba(0,0,0,0.45)] p-10"
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
              <BsPauseFill className="text-[70px] text-white" />
            ) : (
              <BsFillPlayFill className="text-[70px] text-white" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
