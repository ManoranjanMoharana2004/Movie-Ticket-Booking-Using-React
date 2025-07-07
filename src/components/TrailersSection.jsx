import React, { useState } from "react";
import BlurCircle from "./BlurCircle.jsx";
import ReactPlayer from "react-player";
import { dummyTrailers } from "../assets/assets.js";
import { PlayCircleIcon } from "lucide-react";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-24 py-20 overflow-hidden">
      <p className="text-gray-400 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={false}
          className="mx-auto max-w-full"
          width="960px"
          height="540px"
        />
      </div>

      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="
    relative 
    group-hover:not-hover:opacity-50 
    hover:translate-y-1 
    duration-300 
    transition 
    max-md:h-60 
    md:max-h-60 
    cursor-pointer
  "
            onClick={() => setCurrentTrailer(trailer)}
          >
            {/* Render something here, e.g., trailer.title or trailer.video */}
            <img
              src={trailer.image}
              alt="trailer"
              className="roundeded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-0.5 left-0.5 w-5 md:w-8 h-5 md:h-12 transform translate-x-0.5 translate-y-0.5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
