// components/CallToAction.tsx
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-white py-16 px-10 md:px-20 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
          Where great students <br /> become the best students
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The online collaborative school mentoring experience; together, anytime, anywhere.
        </p>
        <button className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition">
          Schedule a meeting →
        </button>
        <p className="mt-4 text-gray-500 text-sm">First meeting for free</p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-12 left-16 w-20 h-20 bg-yellow-300 rounded-full shadow-md hidden sm:block"></div>
      <div className="absolute top-32 right-16 w-40 h-24 bg-blue-100 rounded-lg shadow-md hidden sm:block"></div>
      <div className="absolute bottom-16 left-10 w-28 h-28 bg-pink-300 rounded-full shadow-md hidden sm:block"></div>
      <div className="absolute bottom-24 right-10 w-16 h-16 bg-purple-200 rounded-full shadow-md hidden sm:block"></div>
    </section>
  );
};

export default CallToAction;
