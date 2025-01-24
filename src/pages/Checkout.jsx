import React, { useContext, useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { FiArrowLeft } from 'react-icons/fi';
    import { CartContext } from '../context/CartContext';
    import { AuthContext } from '../context/AuthContext';

    function Checkout() {
      const navigate = useNavigate();
      const { cart, clearCart } = useContext(CartContext);
      const { user } = useContext(AuthContext);
      const [fullName, setFullName] = useState(user ? user.fullName : '');
      const [address, setAddress] = useState(user ? user.address : '');
      const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : '');
      const [shippingCost] = useState(10);

      const handleBack = () => {
        navigate(-1);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        clearCart();
        navigate('/order-confirmation');
      };

      const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price.replace('$', '') * item.quantity), 0);
      };

      const calculateTotalWithShipping = () => {
        return calculateTotal() + shippingCost;
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <button onClick={handleBack} className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center">
              <FiArrowLeft size={14} className="mr-1" /> Back
            </button>
            <h1 className="text-2xl md:text-3xl font-light">Checkout</h1>
          </div>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-400 text-sm mb-1">Full Name</label>
                <input type="text" id="fullName" className="newsletter-input" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-400 text-sm mb-1">Address</label>
                <input type="text" id="address" className="newsletter-input" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-400 text-sm mb-1">Phone Number</label>
                <input type="tel" id="phoneNumber" className="newsletter-input" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-light mb-2">Order Summary</h4>
                <ul className="space-y-1">
                  {cart.map(item => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.price.replace('$', '') * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-2 border-t border-zinc-800 pt-2">
                  <span className="font-bold">Subtotal:</span>
                  <span className="font-bold">${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-bold">Shipping:</span>
                  <span className="font-bold">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-2 border-t border-zinc-800 pt-2">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">${calculateTotalWithShipping().toFixed(2)}</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-light mb-2">Payment Options</h4>
                <p className="text-gray-400 text-sm">Payment options will be added in the future.</p>
              </div>
              <button type="submit" className="newsletter-button w-full">
                Place Order
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default Checkout;
