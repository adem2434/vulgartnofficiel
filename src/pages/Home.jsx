import React from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { FiArrowRight } from 'react-icons/fi';
    import VideoPlayer from '../components/VideoPlayer';
    import LookbookItem from '../components/LookbookItem';

    function Home() {
      const navigate = useNavigate();

      const handleShopNavigation = (hash) => {
        window.scrollTo(0, 0);
        navigate(`/shop${hash}`);
      };

      return (
        <div className="fade-in">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <img
                src="https://iili.io/2iM9fTB.jpg"
                alt="Hero Background"
                className="w-full h-full object-cover opacity-20 md:opacity-30"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
            <div className="max-w-3xl text-center relative z-10">
              <img
                src="https://iili.io/2iXzDpp.png"
                alt="Hero Title"
                className="w-[900px] md:w-[1200px] mb-4 md:mb-6 mx-auto"
              />
              <div className="flex justify-center gap-3">
                <Link
                  to="/shop"
                  className="inline-block border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-all duration-500"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </section>

          {/* Promotional Banner */}
          <section className="bg-zinc-900 text-center">
            <div className="inline-block">
              <p className="text-gray-400 text-[10px] py-0 px-2">
                New Arrivals: Check out our latest collection!
              </p>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-8 md:py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <VideoPlayer src="https://www.youtube.com/embed/Miy_RpwBqFg" />
            </div>
          </section>

          {/* Lookbook Section */}
          <section className="py-8 md:py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <LookbookItem
                  onClick={() => handleShopNavigation('#tribal-hoodie')}
                  images={[
                    "https://i.ibb.co/cw6Nvkv/IMG-5098.jpg"
                  ]}
                  title="Vanguard Collection"
                />
                <div onClick={() => handleShopNavigation('')} className="lookbook-item cursor-pointer">
                  <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
                    <img
                      src="https://iili.io/2iGbUXe.jpg"
                      alt="Vagabond Collection"
                      className="absolute inset-0 w-full h-full object-cover" style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="lookbook-overlay">
                    <div className="text-left">
                      <h3 className="text-2xl font-light mb-2">Vagabond Collection</h3>
                      <div className="inline-flex items-center text-sm hover:ml-2 transition-all duration-300">
                        Explore Collection <FiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-8 md:py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl md:text-2xl font-light text-center mb-6 md:mb-8">Collections</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { name: 'Women', description: 'Elegant essentials', image: 'https://iili.io/2itFZVS.jpg' },
                  { name: 'Men', description: 'Modern classics', image: 'https://iili.io/2iZZId7.jpg' },
                  { name: 'Accessories', description: 'Finishing touches', image: 'https://iili.io/2ihDpuR.jpg' }
                ].map((category) => (
                  <Link to="/shop" key={category.name} className="group">
                    <div className="aspect-square bg-zinc-900 mb-2 md:mb-3 product-card">
                      {category.image && <img src={category.image} alt={category.name} className="w-full h-full object-cover" />}
                    </div>
                    <h3 className="text-base font-light mb-1 md:mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-8 md:py-16 px-4">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-light mb-4 md:mb-6">Newsletter</h2>
              <p className="text-gray-400 text-sm mb-6 md:mb-8">Stay updated with our latest collections and exclusive offers.</p>
              <form className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-transparent border border-zinc-800 px-2 py-1 text-sm focus:outline-none focus:border-white transition-colors duration-300"
                />
                <button 
                  type="submit" 
                  className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300"
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
