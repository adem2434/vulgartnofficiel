import React, { useState, useEffect, useRef, useContext } from 'react';
    import { useNavigate, useLocation, Link } from 'react-router-dom';
    import { FiArrowLeft } from 'react-icons/fi';
    import { useLayoutEffect } from 'react';
    import { CartContext } from '../context/CartContext';

    function Shop() {
      const navigate = useNavigate();
      const location = useLocation();
      const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search));
      const [products, setProducts] = useState([
        { id: 9, name: 'Vagabond Hoodie', price: '85DT', category: 'Tops', image: 'https://i.ibb.co/jrBdNkJ/Oversized-punk-devil-design-print-hoodies-women-y2k-tops-goth-streetwear-harajuku-sweatshirt-hoodie.jpg', htmlId: 'tribal-hoodie', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Gray'] },
        { id: 10, name: 'Black Widow Hoodie', price: '85DT', category: 'Tops', image: 'https://i.ibb.co/qdqqfgT/growlxxstudios-on-ig-1.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Red'] },
        { id: 11, name: 'Vagabond Jacket', price: '200DT', category: 'Outerwear', image: 'https://i.ibb.co/QN8Prwr/download-20.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Brown'] },
        { id: 12, name: 'Urban Glasses', price: '75DT', category: 'Accessories', image: 'https://iili.io/2ihDpuR.jpg', sizes: ['One Size'], colors: ['Black', 'Silver'] },
        { id: 13, name: 'Oversized Long Sleeves', price: '$120', category: 'Tops', image: 'https://i.ibb.co/djGvtpw/IMG-5066.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White'] },
        { id: 14, name: 'Oversized T-Shirt', price: '55DT', category: 'Tops', image: 'https://iili.io/2iZATut.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White', 'Gray'] }
      ]);
      const [filteredProducts, setFilteredProducts] = useState(products);
      const [selectedCategory, setSelectedCategory] = useState('All Categories');
      const [sortOption, setSortOption] = useState('Default');
      const shopRef = useRef(null);
      const { addToCart } = useContext(CartContext);
      const [hoveredProduct, setHoveredProduct] = useState(null);

      useEffect(() => {
        const search = searchParams.get('search') || '';
        let filtered = products.filter(product =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );

        if (selectedCategory !== 'All Categories') {
          filtered = filtered.filter(product => product.category === selectedCategory);
        }

        if (sortOption === 'Price: Low to High') {
          filtered.sort((a, b) => parseFloat(a.price.replace('$', '').replace('DT', '')) - parseFloat(b.price.replace('$', '').replace('DT', '')));
        } else if (sortOption === 'Price: High to Low') {
          filtered.sort((a, b) => parseFloat(b.price.replace('$', '').replace('DT', '')) - parseFloat(a.price.replace('$', '').replace('DT', '')));
        }

        setFilteredProducts(filtered);
      }, [searchParams, products, selectedCategory, sortOption]);

      useEffect(() => {
        setSearchParams(new URLSearchParams(location.search));
      }, [location.search]);

      useLayoutEffect(() => {
        if (shopRef.current && !location.hash) {
          shopRef.current.scrollTo(0, 0);
        }
      }, [location]);

      const handleBack = () => {
        navigate(-1);
      };

      const handleBuyNow = (product) => {
        addToCart(product);
        navigate('/checkout');
      };

      const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
      };

      const handleSortChange = (e) => {
        setSortOption(e.target.value);
      };

      const handleProductHover = (productId) => {
        setHoveredProduct(productId);
      };

      const handleProductLeave = () => {
        setHoveredProduct(null);
      };

      const accessories = filteredProducts.filter(product => product.category === 'Accessories');
      const otherProducts = filteredProducts.filter(product => product.category !== 'Accessories');

      return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in" ref={shopRef}>
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <button onClick={handleBack} className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center">
              <FiArrowLeft size={14} className="mr-1" /> Back
            </button>
            <h1 className="text-2xl md:text-3xl font-light">Shop All</h1>
          </div>
          
          {/* Filters */}
          <div className="mb-6 md:mb-8">
            <div className="flex flex-wrap gap-3 md:gap-4">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="bg-black border border-zinc-800 rounded-none px-3 py-1 text-sm text-gray-400 focus:border-white transition-colors duration-300"
              >
                <option value="All Categories">All Categories</option>
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Outerwear">Outerwear</option>
                <option value="Accessories">Accessories</option>
              </select>
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="bg-black border border-zinc-800 rounded-none px-3 py-1 text-sm text-gray-400 focus:border-white transition-colors duration-300"
              >
                <option value="Default">Sort by</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {otherProducts.map((product) => (
              <div
                key={product.id}
                className={`group hover-lift ${hoveredProduct === product.id ? 'product-card-hovered' : ''}`}
                id={product.htmlId}
                onMouseEnter={() => handleProductHover(product.id)}
                onMouseLeave={handleProductLeave}
              >
                <Link to={`/shop/product/${product.id}`}>
                  <div className="aspect-w-1 aspect-h-1 w-full mb-2 md:mb-3 bg-zinc-900 product-card">
                    {product.image && <img src={product.image} alt={product.name} className="w-full h-full object-cover" />}
                  </div>
                </Link>
                <h3 className="text-base md:text-lg font-light">{product.name}</h3>
                <p className="mt-1 text-gray-400 text-sm">{product.category}</p>
                <p className="mt-1 text-gray-400 text-sm">{product.price}</p>
                <button onClick={() => handleBuyNow(product)} className="mt-3 px-4 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          {/* Accessories Section */}
          {accessories.length > 0 && (
            <div className="mt-10 md:mt-16">
              <h2 className="text-xl md:text-2xl font-light mb-6 md:mb-8">Accessories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {accessories.map((product) => (
                  <div
                    key={product.id}
                    className={`group hover-lift ${hoveredProduct === product.id ? 'product-card-hovered' : ''}`}
                    id={product.htmlId}
                    onMouseEnter={() => handleProductHover(product.id)}
                    onMouseLeave={handleProductLeave}
                  >
                    <Link to={`/shop/product/${product.id}`}>
                      <div className="aspect-w-1 aspect-h-1 w-full mb-2 md:mb-3 bg-zinc-900 product-card">
                        {product.image && <img src={product.image} alt={product.name} className="w-full h-full object-cover" />}
                      </div>
                    </Link>
                    <h3 className="text-base md:text-lg font-light">{product.name}</h3>
                    <p className="mt-1 text-gray-400 text-sm">{product.category}</p>
                    <p className="mt-1 text-gray-400 text-sm">{product.price}</p>
                    <button onClick={() => handleBuyNow(product)} className="mt-3 px-4 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    export default Shop;
