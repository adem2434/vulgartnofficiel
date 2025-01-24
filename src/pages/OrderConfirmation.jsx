import React from 'react';
    import { useNavigate } from 'react-router-dom';
    import { FiArrowLeft } from 'react-icons/fi';

    function OrderConfirmation() {
      const navigate = useNavigate();

      const handleBack = () => {
        navigate('/');
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <button onClick={handleBack} className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center">
              <FiArrowLeft size={14} className="mr-1" /> Back to Home
            </button>
            <h1 className="text-2xl md:text-3xl font-light">Order Confirmation</h1>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-4">Thank you for your order!</p>
            <p className="text-gray-400 text-sm">Your order has been placed successfully. You will receive an email confirmation shortly.</p>
          </div>
        </div>
      );
    }

    export default OrderConfirmation;
