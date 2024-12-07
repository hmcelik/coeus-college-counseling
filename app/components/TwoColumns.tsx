// components/TwoColumns.tsx
import React from "react";

const TwoColumns: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">two columns</h1>
        <p className="text-lg text-gray-600 mb-12">
          We dwelling elegance do shutters appetite yourself diverted.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Article evident arrived express highest men did boy. Mistresses sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Article evident arrived express highest men did boy. Mistresses sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumns;
