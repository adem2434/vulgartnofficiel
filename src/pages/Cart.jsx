import React, { useContext } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { FiArrowLeft } from 'react-icons/fi';
    import { CartContext } from '../context/CartContext';

    function Cart() {
      const navigate = useNavigate();
      const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

      const handleBack = () => {
        navigate(-1);
      };

      const handleCheckout = () => {
        navigate('/checkout');
      };

      const handleQuantityChange = (productId, event) => {
        updateQuantity(productId, event.target.value);
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <button onClick={handleBack} className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center">
              <FiArrowLeft size={14} className="mr-1" /> Back
            </button>
            <h1 className="text-2xl md:text-3xl font-light">Shopping Cart</h1>
          </div>
          {cart.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-400 text-center mb-4">Your cart is empty.</p>
              <button onClick={() => navigate('/shop')} className="px-4 py-2 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                Go to Shop
              </button>
            </div>
          ) : (
            <>
              <ul className="space-y-4">
                {cart.map((product) => (
                  <li key={product.id} className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <div className="flex items-center">
                      {product.image && <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-3" />}
                      <div>
                        <h3 className="text-base font-light">{product.name}</h3>
                        <p className="text-gray-400 text-sm">{product.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(product.id, e)}
                        className="w-12 bg-zinc-900 border border-zinc-800 rounded-none px-2 py-1 text-sm text-gray-400 focus:border-white transition-colors duration-300"
                      />
                      <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:text-red-400 transition-colors duration-300">Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-6">
                <button onClick={clearCart} className="px-4 py-2 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  Clear Cart
                </button>
                <button onClick={handleCheckout} className="px-6 py-2 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      );
    }

    export default Cart;
