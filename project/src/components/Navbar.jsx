import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingBag, FiSearch } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-light tracking-widest hover:opacity-80 transition-opacity duration-300">vulgar</Link>
            <img 
              src="https://flagcdn.com/w20/tn.png" 
              alt="Tunisia Flag" 
              className="w-4 h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              title="Proudly Tunisian"
            />
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-zinc-600 transition-colors duration-300"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300">
                <FiSearch size={16} />
              </button>
            </div>
          </form>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-sm text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
            <Link to="/shop" className="nav-link text-sm text-gray-400 hover:text-white transition-colors duration-300">Shop</Link>
            <Link to="/about" className="nav-link text-sm text-gray-400 hover:text-white transition-colors duration-300">About</Link>
            <button className="text-gray-400 hover:text-white transition-colors duration-300">
              <FiShoppingBag size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-zinc-600"
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FiSearch size={16} />
                </button>
              </div>
            </form>
            <Link
              to="/"
              className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
