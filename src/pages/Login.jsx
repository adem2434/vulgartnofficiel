import React, { useState, useContext } from 'react';
    import { useNavigate, Link } from 'react-router-dom';
    import { FiArrowLeft } from 'react-icons/fi';
    import { AuthContext } from '../context/AuthContext';

    function Login() {
      const navigate = useNavigate();
      const { login } = useContext(AuthContext);
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleBack = () => {
        navigate(-1);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        navigate('/');
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <button onClick={handleBack} className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center">
              <FiArrowLeft size={14} className="mr-1" /> Back
            </button>
            <h1 className="text-2xl md:text-3xl font-light">Login</h1>
          </div>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 text-sm mb-1">Email</label>
                <input type="email" id="email" className="newsletter-input" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-400 text-sm mb-1">Password</label>
                <input type="password" id="password" className="newsletter-input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="newsletter-button w-full">
                Login
              </button>
            </form>
            <p className="mt-4 text-gray-400 text-sm text-center">
              Don't have an account? <Link to="/register" className="text-white hover:underline">Register</Link>
            </p>
          </div>
        </div>
      );
    }

    export default Login;
