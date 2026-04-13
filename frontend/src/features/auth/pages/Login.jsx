import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { loginHook } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // Add logic for login
    await loginHook({
        email: formData.email,
        password: formData.password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050907] text-neutral-300 p-4 font-sans">
      <div className="max-w-md w-full bg-[#0a100d] p-10 border border-[#141f1a] shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light tracking-[0.25em] text-white mb-3 uppercase">Snitch</h1>
          <p className="text-xs text-neutral-500 tracking-widest uppercase">Elevate your style</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 mb-2 uppercase" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#050907] border border-[#141f1a] focus:outline-none focus:border-[#22c55e] text-white placeholder-neutral-700 rounded-none transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 uppercase" htmlFor="password">Password</label>
              <a href="#" className="text-[10px] tracking-wider text-neutral-500 hover:text-[#22c55e] transition-colors uppercase">Forgot?</a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#050907] border border-[#141f1a] focus:outline-none focus:border-[#22c55e] text-white placeholder-neutral-700 rounded-none transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-2 bg-[#22c55e] text-black hover:bg-[#16a34a] font-bold text-xs tracking-[0.2em] uppercase rounded-none transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-xs text-neutral-500 tracking-wider">
            New to Snitch?{' '}
            <Link to="/register" className="text-white hover:text-[#22c55e] transition-colors ml-1 border-b border-transparent hover:border-[#22c55e] pb-0.5">
              CREATE ACCOUNT
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
