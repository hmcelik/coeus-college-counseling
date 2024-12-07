// components/Banner.tsx
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white py-24 px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Improve your <br /> Life again.
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold transition hover:bg-gray-200">
            Book Appointment
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white mx-auto">
            <img
              src="https://img.freepik.com/free-vector/happy-student-concept-illustration_114360-8328.jpg"
              alt="Improving Life"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg">
            <span className="text-xl font-bold">870+</span>
            <p className="text-sm">Successful Treatments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
