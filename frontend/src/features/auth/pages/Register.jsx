import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    password: '',
    joinAsSeller: false,
  });
  const {registerHook} = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await registerHook({
        fullname: formData.fullName,
        email: formData.email,
        password: formData.password,
        contactNo: formData.contactNo,
        joinAsSeller: formData.joinAsSeller,
    });
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050907] text-neutral-300 p-4 font-sans">
      <div className="max-w-md w-full bg-[#0a100d] p-10 border border-[#141f1a] shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light tracking-[0.25em] text-white mb-3 uppercase">Snitch</h1>
          <p className="text-xs text-neutral-500 tracking-widest uppercase">Join the collective</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 mb-2 uppercase" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#050907] border border-[#141f1a] focus:outline-none focus:border-[#22c55e] text-white placeholder-neutral-700 rounded-none transition-colors"
              placeholder="Enter your name"
              required
            />
          </div>

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
            <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 mb-2 uppercase" htmlFor="contactNo">Contact No.</label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#050907] border border-[#141f1a] focus:outline-none focus:border-[#22c55e] text-white placeholder-neutral-700 rounded-none transition-colors"
              placeholder="Enter your number"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 mb-2 uppercase" htmlFor="password">Password</label>
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

          <div className="flex items-center pt-2">
            <input
              type="checkbox"
              id="joinAsSeller"
              name="joinAsSeller"
              checked={formData.joinAsSeller}
              onChange={handleChange}
              className="w-4 h-4 accent-[#22c55e] bg-[#050907] border-[#141f1a] rounded-none cursor-pointer"
            />
            <label htmlFor="joinAsSeller" className="ml-3 text-[10px] font-semibold tracking-widest text-neutral-400 uppercase cursor-pointer">
              Join as a Seller
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 bg-[#22c55e] text-black hover:bg-[#16a34a] font-bold text-xs tracking-[0.2em] uppercase rounded-none transition-colors"
          >
            Create Account
          </button>
          <a  
            href="/api/auth/google"
            className="w-full py-4 mt-4 bg-[#22c55e] text-black hover:bg-[#16a34a] font-bold text-xs tracking-[0.2em] uppercase rounded-none transition-colors"
          >
            Continue With Google
          </a>
        </form>

        <div className="mt-10 text-center">
          <p className="text-xs text-neutral-500 tracking-wider">
            Already a member?{' '}
            <Link to="/login" className="text-white hover:text-[#22c55e] transition-colors ml-1 border-b border-transparent hover:border-[#22c55e] pb-0.5">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
