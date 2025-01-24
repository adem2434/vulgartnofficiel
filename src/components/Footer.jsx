import React from 'react';
    import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

    function Footer() {
      return (
        <footer className="bg-black border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-light tracking-widest mb-4 md:mb-6">vulgar</h3>
                <p className="text-gray-400 text-sm">Elevate your style with timeless pieces.</p>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-light mb-4 md:mb-6">Quick Links</h4>
                <ul className="space-y-1 md:space-y-2">
                  <li>
                    <a href="/shop" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Shop</a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-light mb-4 md:mb-6">Follow Us</h4>
                <div className="flex space-x-3 md:space-x-4">
                  <a href="https://www.instagram.com/vulgar.tn/" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FiInstagram size={16} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FiTwitter size={16} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FiFacebook size={16} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-10 border-t border-zinc-800 pt-4 md:pt-6 text-center">
              <p className="text-gray-400 text-sm">&copy; 2024 vulgar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    }

    export default Footer;
