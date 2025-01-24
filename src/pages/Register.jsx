import React, { useState, useContext } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { FiArrowLeft } from 'react-icons/fi';
    import { AuthContext } from '../context/AuthContext';

    function Register() {
      const navigate = useNavigate();
      const { register } = useContext(AuthContext);
      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [address, setAddress] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');

      const handleBack = () => {
        navigate(-1);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        register(fullName, email, password, address, phoneNumber);
        navigate('/');
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <button onClick={handleBack} className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center">
              <FiArrowLeft size={14} className="mr-1" /> Back
            </button>
            <h1 className="text-2xl md:text-3xl font-light">Register</h1>
          </div>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-400 text-sm mb-1">Full Name</label>
                <input type="text" id="fullName" className="newsletter-input" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 text-sm mb-1">Email</label>
                <input type="email" id="email" className="newsletter-input" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-400 text-sm mb-1">Password</label>
                <input type="password" id="password" className="newsletter-input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-400 text-sm mb-1">Address</label>
                <input type="text" id="address" className="newsletter-input" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-400 text-sm mb-1">Phone Number</label>
                <input type="tel" id="phoneNumber" className="newsletter-input" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
              </div>
              <button type="submit" className="newsletter-button w-full">
                Register
              </button>
            </form>
            <p className="mt-4 text-gray-400 text-sm text-center">
              Already have an account? <Link to="/login" className="text-white hover:underline">Login</Link>
            </p>
          </div>
        </div>
      );
    }

    export default Register;
