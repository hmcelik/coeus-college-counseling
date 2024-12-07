// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 justify-around">
        {/* More About Company */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">More About Company</h3>
          <p className="text-lg mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.
          </p>
          <p className="text-base">- Ahmet Kaya, CEO</p>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/012/986/755/non_2x/abstract-circle-logo-icon-free-png.png" 
            alt="Company Logo" 
            className="mb-4 w-20 h-20 object-contain mx-auto"
          />
        </div>

        {/* Contact and Keep Connected */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Keep Connected */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Keep Connected</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-white">
                  <span className="text-blue-500">&#9679;</span>
                  <span className="text-base">Like us on Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-white">
                  <span className="text-blue-400">&#9679;</span>
                  <span className="text-base">Follow us on Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-white">
                  <span className="text-red-500">&#9679;</span>
                  <span className="text-base">Add us on Google Plus</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-white">
                  <span className="text-pink-500">&#9679;</span>
                  <span className="text-base">Follow us on Dribbble</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-white">
                  <span className="text-red-600">&#9679;</span>
                  <span className="text-base">Follow us on Pinterest</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <ul className="space-y-3 text-base">
              <li>
                <span className="block">Coeus College Counseling</span>
                <span className="block">Lorem ipsum dolor</span>
                <span className="block">Glasglow Dr 40 Fe 72.</span>
              </li>
              <li>+1 (765) 418-8988</li>
              <li>
                <a href="mailto:coeuscollegecounseling@gmail.com" className="hover:text-white">
                coeuscollegecounseling@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-base text-gray-500">
        <p>&copy; 2024 Coeus College Counseling. All Rights Reserved | Website by H. M. Celik</p>
        <div className="mt-2">
          <a href="#" className="hover:text-white mx-3">
            Company Information
          </a>
          <a href="#" className="hover:text-white mx-3">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white mx-3">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
