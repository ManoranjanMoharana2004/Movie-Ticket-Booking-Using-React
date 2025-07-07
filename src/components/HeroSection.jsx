import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalculatorIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <div className='hero-section flex flex-col items-center justify-center gap-4 px-6 md:scroll-px-16 lg:px-36  bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
      <img
        src={assets.marvelLogo}
        alt="marvel-logo"
        className="max-h-11 lg:h-11 mt-20"
      />
      <h1 className="text-5xl md:text-[750] md:leading-18 font-semibold max-w-110">
        Guardians <br />
        of the Galaxy
      </h1>

      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure |Sci-Fi</span>
        <div className="flex items-center hap-4 text-gray-300">
          <CalculatorIcon className="w-3.8 h-4" /> 2018
        </div>
        <div className="flex items-center hap-4 text-gray-300">
          <ClockIcon className="w-3.8 h-4" /> 2h 45min
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        Discover top-rated movies, latest releases, and timeless classics.
        Stream in HD, read reviews, enjoy cinematic experiences anytime,
        anywhere. Explore genres, watch trailers, create watchlists, follow your
        favorite stars, and dive into the world of entertainment today!
      </p>
      <button className="flex items-center gap-1 px-6 py-5 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer" onClick={()=> navigate('/movies')}>
        Explore Movies 
        <ArrowRight className="h-5 w-5"/>
      </button>
    </div>
  );
};

export default HeroSection;
