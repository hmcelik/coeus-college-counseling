// components/ShortText.tsx
import React from "react";

const ShortText: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-10 md:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We partner with brave clients <br /> to build brand experiences people love.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Box 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xl font-bold rounded-full mb-6">
              01
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xl font-bold rounded-full mb-6">
              02
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">How We Work</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xl font-bold rounded-full mb-6">
              03
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What We Do</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortText;
