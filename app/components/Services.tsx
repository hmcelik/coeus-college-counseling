// components/Services.tsx
import React from "react";

const Services: React.FC = () => {
  return (
    <section className="bg-blue-100 py-16 px-10 md:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Card 1 */}
          <div className="relative bg-white shadow-md rounded-lg p-8 text-center transform w-60 h-96 mx-auto">
            <div className="w-20 h-20 mx-auto bg-red-500 text-white rounded-full flex items-center justify-center mb-6">
              {/* Icon placeholder */}
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">PROGRAMS</h3>
            <p className="text-gray-600 text-base mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a href="/services" className="text-blue-700 font-medium text-lg">MORE</a>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white shadow-md rounded-lg p-8 text-center transform -translate-y-8 w-60 h-96 mx-auto">
            <div className="w-20 h-20 mx-auto bg-red-500 text-white rounded-full flex items-center justify-center mb-6">
              {/* Icon placeholder */}
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">RESULTS</h3>
            <p className="text-gray-600 text-base mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a href="/services" className="text-blue-700 font-medium text-lg">MORE</a>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white shadow-md rounded-lg p-8 text-center transform w-60 h-96 mx-auto">
            <div className="w-20 h-20 mx-auto bg-red-500 text-white rounded-full flex items-center justify-center mb-6">
              {/* Icon placeholder */}
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">COACHING</h3>
            <p className="text-gray-600 text-base mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a href="/services" className="text-blue-700 font-medium text-lg">MORE</a>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white shadow-md rounded-lg p-8 text-center transform -translate-y-8 w-60 h-96 mx-auto">
            <div className="w-20 h-20 mx-auto bg-red-500 text-white rounded-full flex items-center justify-center mb-6">
              {/* Icon placeholder */}
              <span className="text-3xl">📅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">EVENTS</h3>
            <p className="text-gray-600 text-base mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a href="/services" className="text-blue-700 font-medium text-lg">MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
