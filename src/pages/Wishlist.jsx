import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { FiArrowLeft } from 'react-icons/fi';

    function Wishlist() {
      const navigate = useNavigate();
      const [wishlist, setWishlist] = useState([]);

      useEffect(() => {
        // Load wishlist from local storage or state
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          setWishlist(JSON.parse(storedWishlist));
        }
      }, []);

      const handleBack = () => {
        navigate(-1);
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <button onClick={handleBack} className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center">
              <FiArrowLeft size={14} className="mr-1" /> Back
            </button>
            <h1 className="text-2xl md:text-3xl font-light">Wishlist</h1>
          </div>
          {wishlist.length === 0 ? (
            <p className="text-gray-400 text-center">Your wishlist is empty.</p>
          ) : (
            <ul className="space-y-4">
              {wishlist.map((product) => (
                <li key={product.id} className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center">
                    {product.image && <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-3" />}
                    <div>
                      <h3 className="text-base font-light">{product.name}</h3>
                      <p className="text-gray-400 text-sm">{product.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    export default Wishlist;
