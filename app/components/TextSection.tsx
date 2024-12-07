// components/TextSection.tsx
import React from "react";
import Link from "next/link";

const TextSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-10 md:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why these courses exist
          </h2>
          <p className="text-gray-600 mb-6">
            Designers want to code, coders want to design, everyone needs to understand some part of all of it. But how
            do you wrangle all that information together and actually accomplish something useful and usable?
          </p>
          <p className="text-gray-600">
            Our courses will teach you how to think and act like a dev and a designer—iterate, research, create pixel
            perfect UIs, code the front-end and back-end and make it beautiful, usable, and dynamic, regardless of the
            type of project you are working on or the tools or languages you choose to use.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img
              src="https://img.freepik.com/free-vector/happy-student-concept-illustration_114360-8328.jpg" // Replace with actual image path
              alt="Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="col-span-1 md:col-span-2 border-t border-gray-200 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfT0nIzq3yYl1euTVp7PiXrv3xw-Y2iKha9Q&s" // Replace with actual image path
                  alt="Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why you need these courses
              </h2>
              <p className="text-gray-600 mb-6">
                While you can choose any number of design courses and bootcamps to learn skills and applications, the
                problem is that design applications change, new programming frameworks are introduced, and roles
                shift. Our courses address the core problem of communication, how and what to learn, and how to get
                around knowledge blind-spots remains.
              </p>
              <Link href="/contact">
              <button className="bg-yellow-500 text-white py-3 px-6 rounded-full font-medium hover:bg-yellow-600 transition">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
