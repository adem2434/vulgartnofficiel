import React, { useContext, useState } from 'react';
    import { useNavigate, useParams } from 'react-router-dom';
    import { FiArrowLeft, FiInfo, FiShare2, FiHeart } from 'react-icons/fi';
    import { CartContext } from '../context/CartContext';
    import ImageGallery from '../components/ImageGallery';

    function ProductDetails() {
      const navigate = useNavigate();
      const { productId } = useParams();
      const { addToCart } = useContext(CartContext);
      const [showSizeGuide, setShowSizeGuide] = useState(false);
      const [selectedColor, setSelectedColor] = useState('');
      const [selectedSize, setSelectedSize] = useState('');
      const [quantity, setQuantity] = useState(1);
      const [zoomImage, setZoomImage] = useState(null);
      const [wishlist, setWishlist] = useState([]);
      const [showShareOptions, setShowShareOptions] = useState(false);

      // Placeholder product data
      const products = [
        { id: 9, name: 'Vagabond Hoodie', price: '85DT', category: 'Tops', image: 'https://i.ibb.co/jrBdNkJ/Oversized-punk-devil-design-print-hoodies-women-y2k-tops-goth-streetwear-harajuku-sweatshirt-hoodie.jpg', description: 'A comfortable and stylish hoodie with a unique tribal design.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Gray'], images: ['https://i.ibb.co/jrBdNkJ/Oversized-punk-devil-design-print-hoodies-women-y2k-tops-goth-streetwear-harajuku-sweatshirt-hoodie.jpg', 'https://i.ibb.co/TWMKHh2/download-15.jpg'] },
        { id: 10, name: 'Black Widow Hoodie', price: '85DT', category: 'Tops', image: 'https://i.ibb.co/qdqqfgT/growlxxstudios-on-ig-1.jpg', description: 'A sleek and edgy hoodie with a black widow design.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Red'], images: ['https://i.ibb.co/qdqqfgT/growlxxstudios-on-ig-1.jpg', 'https://i.ibb.co/xLgwxQ4/download-16.jpg'] },
        { id: 11, name: 'Vagabond Jacket', price: '200DT', category: 'Outerwear', image: 'https://i.ibb.co/QN8Prwr/download-20.jpg', description: 'A stylish and durable jacket with a tribal pattern.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Brown'], images: ['https://i.ibb.co/QN8Prwr/download-20.jpg', 'https://i.ibb.co/SwLWHyt/Tribal-metal-shape-3d-rendering-abstract-chrome-shape.jpg'] },
        { id: 12, name: 'Urban Glasses', price: '75DT', category: 'Accessories', image: 'https://iili.io/2ihDpuR.jpg', description: 'Step into the future with Urban Glasses. These aren\'t just eyewear; they\'re a statement. Designed for the modern explorer, they blend cutting-edge style with unparalleled clarity. Whether you\'re navigating city streets or making a bold statement, Urban Glasses are your perfect companion.', sizes: ['One Size'], colors: ['Black', 'Silver'], images: ['https://iili.io/2ihDpuR.jpg'] },
        { id: 13, name: 'Oversized Long Sleeves', price: '$120', category: 'Tops', image: 'https://i.ibb.co/djGvtpw/IMG-5066.jpg', description: 'Embrace the art of relaxed rebellion with our Oversized Long Sleeves. This isn\'t just a top; it\'s a canvas for your individuality. Crafted for comfort and designed for impact, it drapes effortlessly, allowing you to move with freedom and confidence. Whether you\'re layering up for a night out or making a statement on your own, these long sleeves are your go-to for effortless style.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White'], images: ['https://i.ibb.co/djGvtpw/IMG-5066.jpg'] },
        { id: 14, name: 'Oversized T-Shirt', price: '55DT', category: 'Tops', image: 'https://iili.io/2iZATut.jpg', description: 'Unleash your inner icon with our Oversized T-Shirt. This isn\'t just a basic tee; it\'s a statement of effortless cool. Designed for those who dare to be different, it offers a relaxed fit that drapes perfectly, allowing you to move with freedom and confidence. Whether you\'re hitting the streets or chilling at home, this t-shirt is your go-to for laid-back style.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White', 'Gray'], images: ['https://iili.io/2iZATut.jpg', 'https://i.ibb.co/SnL8TZs/IMG-5065.jpg'] }
      ];

      const product = products.find(p => p.id === parseInt(productId));

      if (!product) {
        return <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in">Product not found</div>;
      }

      const handleBack = () => {
        navigate(-1);
      };

      const handleAddToCart = () => {
        if (selectedSize && selectedColor) {
          addToCart({...product, selectedSize, selectedColor, quantity});
        } else {
          alert('Please select a size and color.');
        }
      };

      const toggleSizeGuide = () => {
        setShowSizeGuide(!showSizeGuide);
      };

      const handleColorSelect = (color) => {
        setSelectedColor(color);
      };

      const handleSizeSelect = (size) => {
        setSelectedSize(size);
      };

      const handleQuantityChange = (type) => {
        if (type === 'inc') {
          setQuantity(quantity + 1);
        } else if (type === 'dec' && quantity > 1) {
          setQuantity(quantity - 1);
        }
      };

      const handleImageZoom = (image) => {
        setZoomImage(image);
      };

      const handleCloseZoom = () => {
        setZoomImage(null);
      };

      const handleAddToWishlist = () => {
        const updatedWishlist = [...wishlist, product];
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      };

      const toggleShareOptions = () => {
        setShowShareOptions(!showShareOptions);
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <button onClick={handleBack} className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center">
              <FiArrowLeft size={14} className="mr-1" /> Back
            </button>
            <h1 className="text-2xl md:text-3xl font-light">{product.name}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="overflow-hidden">
              <ImageGallery images={product.images} onZoom={handleImageZoom} />
            </div>
            <div>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-lg font-light mb-1">Sizes</h4>
                <button onClick={toggleSizeGuide} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <FiInfo size={14} className="mr-1" /> Size Guide
                </button>
              </div>
              {showSizeGuide && (
                <div className="mb-4 p-3 border border-zinc-800 bg-zinc-900">
                  <h5 className="text-lg font-light mb-1">Size Guide</h5>
                  <p className="text-gray-400 text-sm">
                    Please refer to the size chart below for accurate measurements.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-sm mt-1">
                    <li>S: Chest 34-36", Waist 28-30"</li>
                    <li>M: Chest 38-40", Waist 32-34"</li>
                    <li>L: Chest 42-44", Waist 36-38"</li>
                    <li>XL: Chest 46-48", Waist 40-42"</li>
                  </ul>
                </div>
              )}
              <div className="mb-4">
                <h4 className="text-lg font-light mb-1">Colors</h4>
                <div className="flex space-x-1">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      className={`px-2 py-1 border border-zinc-800 text-sm ${selectedColor === color ? 'bg-zinc-700' : 'hover:bg-zinc-900'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-light mb-1">Select Size</h4>
                <div className="flex space-x-1">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`px-2 py-1 border border-zinc-800 text-sm ${selectedSize === size ? 'bg-zinc-700' : 'hover:bg-zinc-900'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4 flex items-center space-x-2">
                <h4 className="text-lg font-light mb-1">Quantity</h4>
                <div className="flex items-center space-x-1">
                  <button onClick={() => handleQuantityChange('dec')} className="px-2 py-1 border border-zinc-800 text-sm hover:bg-zinc-900 transition-colors duration-300">-</button>
                  <span className="text-sm">{quantity}</span>
                  <button onClick={() => handleQuantityChange('inc')} className="px-2 py-1 border border-zinc-800 text-sm hover:bg-zinc-900 transition-colors duration-300">+</button>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-lg font-light">Price: {product.price}</p>
              <div className="flex space-x-2">
                <button onClick={handleAddToCart} className="px-4 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  Add to Cart
                </button>
                <button onClick={handleAddToWishlist} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <FiHeart size={18} />
                </button>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-light mb-2">Customer Reviews</h4>
                <p className="text-gray-400 text-sm">Reviews will be added in the future.</p>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-light mb-2">Related Products</h4>
                <p className="text-gray-400 text-sm">Related products will be added in the future.</p>
              </div>
              <div className="mt-6 flex items-center space-x-3">
                <h4 className="text-lg font-light">Share</h4>
                <button onClick={toggleShareOptions} className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FiShare2 size={20} />
                </button>
                {showShareOptions && (
                  <div className="absolute mt-2 p-2 bg-zinc-900 border border-zinc-800 rounded-md">
                    <p className="text-gray-400 text-sm">Share options will be added in the future.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {zoomImage && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50 cursor-zoom-out" onClick={handleCloseZoom}>
              <img src={zoomImage} alt="Zoomed Product" className="max-w-full max-h-full object-contain" />
            </div>
          )}
        </div>
      );
    }

    export default ProductDetails;
