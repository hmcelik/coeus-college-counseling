// components/AboutUs.tsx
import React from "react";
import Link from "next/link";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-32 md:py-64 px-10 md:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Section */}
        <div className="relative">
          <div className="w-96 h-96 rounded-full overflow-hidden shadow-md mx-auto md:mx-0 z-10">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcHVzJTIwdW5pdmVyc2l0YXJpb3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Helping businesses"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Background Shapes */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-700 opacity-20 rounded-full z-0"></div>
          <div className="absolute -bottom-12 left-12 w-32 h-32 bg-gray-300 opacity-50 rounded-full z-0"></div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">About Us</h3>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
            Helping businesses <span className="text-blue-700">succeed</span> through the
            power of video.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Video is the future of business in this digital-focused world. VideoJet uses
            video to change the way companies connect and communicate. We help organizations of all sizes
            humanize their communications and personalize their customer experiences.
          </p>
          <Link href="/about">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition">
              Learn more about us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
