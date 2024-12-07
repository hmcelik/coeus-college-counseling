// components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white h-screen flex items-center py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Background Vectors and Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bg-white opacity-10 w-96 h-96 rounded-full -top-10 -left-10"></div>
        <div className="absolute bg-white opacity-10 w-[28rem] h-[28rem] rounded-full -bottom-20 right-10"></div>
        <div className="absolute bg-blue-700 opacity-20 w-[28rem] h-[28rem] rounded-full top-1/4 left-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
        {/* Left Section */}
        <div>
          <span className="bg-blue-700 px-6 py-3 rounded-full text-md uppercase tracking-wide">University Building</span>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Experience the <br /> Best Education.
          </h1>
          <p className="mt-6 text-gray-200 text-xl">
            Discover our top-notch facilities and comprehensive programs designed
            for your success.
          </p>
          <button className="mt-8 bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-full text-xl font-semibold transition">
            Learn More
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden mx-auto border-4 border-white">
            <img
              src="https://img.freepik.com/premium-photo/large-university-building-with-sign-that-says-university-america_551880-7781.jpg?semt=ais_hybrid"
              alt="University Building"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-8 right-1/2 md:right-1/4 transform translate-x-1/2 md:translate-x-0 bg-blue-700 px-8 py-5 rounded-lg shadow-md">
            <span className="text-3xl font-bold">100+</span>
            <p className="text-md text-gray-200">Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
