// components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white h-[110vh] md:h-screen flex flex-col-reverse md:flex-row items-center pt-64 md:pt-16 px-6 md:px-20 pb-10 relative overflow-hidden">
      {/* Background Vectors and Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bg-white opacity-10 w-60 h-60 md:w-96 md:h-96 rounded-full -top-10 -left-10"></div>
        <div className="absolute bg-white opacity-10 w-60 h-60 md:w-[28rem] md:h-[28rem] rounded-full -bottom-20 right-10"></div>
        <div className="absolute bg-blue-700 opacity-20 w-60 h-60 md:w-[28rem] md:h-[28rem] rounded-full top-1/4 left-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <span className="bg-blue-700 px-6 py-3 rounded-full text-md uppercase tracking-wide inline-block">University Building</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Experience the <br /> Best Education.
          </h1>
          <p className="mt-6 text-gray-200 text-lg md:text-xl">
            Discover our top-notch facilities and comprehensive programs designed
            for your success.
          </p>
          <button className="mt-8 bg-blue-700 hover:bg-blue-800 px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold transition">
            Learn More
          </button>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center">
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white">
            <img
              src="https://img.freepik.com/premium-photo/large-university-building-with-sign-that-says-university-america_551880-7781.jpg?semt=ais_hybrid"
              alt="University Building"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 md:left-auto md:right-1/4 md:transform-none bg-blue-700 px-6 py-3 md:px-8 md:py-5 rounded-lg shadow-md">
            <span className="text-2xl md:text-3xl font-bold">100+</span>
            <p className="text-sm md:text-md text-gray-200">Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;