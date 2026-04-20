import React, { useState } from 'react';
import { useProduct } from '../hooks/useProduct';
import { useNavigate } from 'react-router';

const CreateProduct = () => {
  const { handleCreateProduct } = useProduct()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    amount: '',
    currency: 'USD',
  });
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 7) {
      setError('You can only upload a maximum of 7 images.');
      setImages(files.slice(0, 7));
    } else {
      setError('');
      setImages(files);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try{
       const data = new FormData()
       data.append('name', formData.name)
       data.append('description', formData.description)
       data.append('amount', formData.amount)
       data.append('currency', formData.currency)
       images.forEach((image) => {
        data.append('images', image)
       })
       const response = await handleCreateProduct(data)
       console.log(response)
       navigate('/');
      } catch(err){
        console.log(err)
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050907] text-neutral-300 p-4 font-sans">
      <div className="max-w-xl w-full bg-[#0a100d] p-10 border border-[#141f1a] shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light tracking-[0.25em] text-white mb-3 uppercase">Create Product</h1>
          <p className="text-xs text-neutral-500 tracking-widest uppercase">Add a new item to the collective</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 mb-2 uppercase" htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#050907] border border-[#141f1a] focus:outline-none focus:border-[#22c55e] text-white placeholder-neutral-700 rounded-none transition-colors"
              placeholder="Enter product name"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 mb-2 uppercase" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 bg-[#050907] border border-[#141f1a] focus:outline-none focus:border-[#22c55e] text-white placeholder-neutral-700 rounded-none transition-colors resize-none"
              placeholder="Enter product description"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 mb-2 uppercase" htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                min="0"
                step="0.01"
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#050907] border border-[#141f1a] focus:outline-none focus:border-[#22c55e] text-white placeholder-neutral-700 rounded-none transition-colors"
                placeholder="0.00"
                required
              />
            </div>
            <div className="sm:w-1/3">
              <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 mb-2 uppercase" htmlFor="currency">Currency</label>
              <select
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#050907] border border-[#141f1a] focus:outline-none focus:border-[#22c55e] text-white rounded-none transition-colors appearance-none"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-neutral-400 mb-2 uppercase" htmlFor="images">Product Images (Max 7)</label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-3 bg-[#050907] border border-[#141f1a] focus:outline-none focus:border-[#22c55e] text-neutral-400 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-[#141f1a] file:text-neutral-300 hover:file:bg-[#1d2d26] transition-colors rounded-none"
            />
            {error && <p className="mt-2 text-[10px] text-red-500 font-semibold tracking-widest uppercase">{error}</p>}
            {images.length > 0 && !error && (
              <p className="mt-2 text-neutral-500 tracking-wider text-[10px] uppercase font-semibold">
                {images.length} image{images.length > 1 ? 's' : ''} selected
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-6 bg-[#22c55e] text-black hover:bg-[#16a34a] font-bold text-xs tracking-[0.2em] uppercase rounded-none transition-colors"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
