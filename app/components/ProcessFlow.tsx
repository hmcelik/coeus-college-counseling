// components/ProcessFlow.tsx
import React from "react";

const ProcessFlow: React.FC = () => {
  return (
    <section className="bg-white py-16 px-10 md:px-32">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Step 1 */}
        <div className="relative bg-white shadow-xl rounded-lg p-8 text-center w-72 h-96 border-t-4 border-blue-400">
          <div className="w-20 h-20 mx-auto text-blue-400 rounded-full flex items-center justify-center mb-6">
            {/* Icon placeholder */}
            <span className="text-5xl">🔍</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">RESEARCH</h3>
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>

        {/* Arrow 1 */}
        <div className="absolute flex justify-center items-center left-1/4 top-1/2 transform -translate-y-1/2">
          <div className="w-14 h-14 bg-yellow-400 text-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xl">➔</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative bg-white shadow-xl rounded-lg p-8 text-center w-72 h-96 border-t-4 border-purple-400">
          <div className="w-20 h-20 mx-auto text-purple-400 rounded-full flex items-center justify-center mb-6">
            {/* Icon placeholder */}
            <span className="text-5xl">💡</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">IDEA</h3>
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>

        {/* Arrow 2 */}
        <div className="absolute flex justify-center items-center right-1/4 top-1/2 transform -translate-y-1/2">
          <div className="w-14 h-14 bg-yellow-400 text-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xl">➔</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative bg-white shadow-xl rounded-lg p-8 text-center w-72 h-96 border-t-4 border-blue-500">
          <div className="w-20 h-20 mx-auto text-blue-500 rounded-full flex items-center justify-center mb-6">
            {/* Icon placeholder */}
            <span className="text-5xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">GOAL</h3>
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
