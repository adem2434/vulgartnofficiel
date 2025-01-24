import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="hero-title text-[48px] font-bold mb-6">TIMELESS</h1>
          <p className="text-[18px] text-gray-400 mb-8 slide-up">Discover our latest collection of premium clothing</p>
          <div className="flex justify-center gap-4">
            <Link
              to="/shop"
              className="inline-block border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition-all duration-500"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-light mb-4">Winter Collection</h2>
              <p className="text-gray-400 mb-8">Embrace the season with our curated selection of premium pieces.</p>
              <Link 
                to="/shop" 
                className="inline-flex items-center text-sm hover:ml-2 transition-all duration-300"
              >
                Explore Collection <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="overflow-hidden">
              <img 
                src="https://i.ibb.co/TWMKHh2/download-15.jpg" 
                alt="Winter Collection" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light text-center mb-12">Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Women', description: 'Elegant essentials' },
              { name: 'Men', description: 'Modern classics' },
              { name: 'Accessories', description: 'Finishing touches' }
            ].map((category) => (
              <Link to="/shop" key={category.name} className="group">
                <div className="h-[400px] bg-zinc-900 mb-4 product-card"></div>
                <h3 className="text-lg font-light mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-light mb-6">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-8">Stay updated with our latest collections and exclusive offers.</p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent border border-zinc-800 px-4 py-2 text-sm focus:outline-none focus:border-white transition-colors duration-300"
            />
            <button 
              type="submit" 
              className="px-6 py-2 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
