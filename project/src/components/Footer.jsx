import React from 'react';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-8 py-20 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl font-light tracking-widest mb-8">vulgar</h3>
            <p className="text-gray-400">Elevate your style with timeless pieces.</p>
          </div>
          <div>
            <h4 className="text-lg font-light mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/shop" className="text-gray-400 hover:text-white transition-colors duration-300">Shop</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-light mb-8">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-zinc-800 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 vulgar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
