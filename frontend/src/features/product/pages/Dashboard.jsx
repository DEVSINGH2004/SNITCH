import React, { useEffect } from 'react';
import { useProduct } from '../hooks/useProduct';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const { handleGetAllProducts } = useProduct();
  const sellerProducts = useSelector((state) => state.product.sellerProducts) || [];
  const navigate = useNavigate();

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#050907] text-neutral-300 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-[#141f1a] pb-6">
          <div>
            <h1 className="text-4xl font-light tracking-[0.25em] text-white mb-2 uppercase">Dashboard</h1>
            <p className="text-xs text-neutral-500 tracking-widest uppercase">Manage your collective products</p>
          </div>
          <button
            onClick={() => navigate('/products')}
            className="mt-6 md:mt-0 bg-[#22c55e] text-black hover:bg-[#16a34a] font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-none transition-colors"
          >
            Add New Product
          </button>
        </div>

        {sellerProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#0a100d] border border-[#141f1a]">
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">No products found</p>
            <button
              onClick={() => navigate('/products')}
              className="text-[#22c55e] hover:text-white text-xs tracking-[0.2em] uppercase transition-colors underline underline-offset-4"
            >
              Create your first product
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sellerProducts.map((product) => (
              <div key={product._id || product.id} className="bg-[#0a100d] border border-[#141f1a] shadow-2xl group hover:border-[#22c55e]/30 transition-colors duration-300 flex flex-col">
                <div className="w-full h-56 bg-[#030605] overflow-hidden relative border-b border-[#141f1a] group-hover:border-[#22c55e]/30 transition-colors">
                  {product.image && product.image.length > 0 ? (
                    <img 
                      src={product.image[0]?.url || product.image[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#141f1a]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-light tracking-[0.1em] text-white uppercase mb-2 truncate">{product.name}</h3>
                  <p className="text-xs text-neutral-500 mb-6 line-clamp-2 leading-relaxed flex-1">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#22c55e] font-semibold text-sm tracking-wider">
                      {product.price?.currency === 'USD' ? '$' : product.price?.currency === 'EUR' ? '€' : product.price?.currency === 'GBP' ? '£' : product.price?.currency === 'INR' ? '₹' : product.price?.currency} {product.price?.amount || product.amount}
                    </span>
                    <button className="text-[10px] text-neutral-400 hover:text-white uppercase tracking-widest transition-colors font-semibold">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;