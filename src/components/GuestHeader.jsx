import React from 'react';

const GuestHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Sedap */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
            S<span className="text-orange-600">e</span>d<span className="text-orange-600">a</span>p<span className="text-orange-600">.</span>
          </span>
        </div>

        {/* Menu Navigasi */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="group flex items-baseline gap-1.5 text-gray-700 hover:text-orange-600 font-medium text-lg transition">
            <span className="text-xs text-orange-600 font-semibold mb-0.5">01.</span> Home <span className="text-xs text-gray-400 group-hover:text-orange-600 transition">&#9662;</span>
          </a>
          <a href="#about" className="group flex items-baseline gap-1.5 text-gray-700 hover:text-orange-600 font-medium text-lg transition">
            <span className="text-xs text-orange-600 font-semibold mb-0.5">02.</span> Tentang Kami <span className="text-xs text-gray-400 group-hover:text-orange-600 transition">&#9662;</span>
          </a>
          <a href="#products" className="group flex items-baseline gap-1.5 text-gray-700 hover:text-orange-600 font-medium text-lg transition">
            <span className="text-xs text-orange-600 font-semibold mb-0.5">03.</span> Produk <span className="text-xs text-gray-400 group-hover:text-orange-600 transition">&#9662;</span>
          </a>
          <a href="#testimonials" className="group flex items-baseline gap-1.5 text-gray-700 hover:text-orange-600 font-medium text-lg transition">
            <span className="text-xs text-orange-600 font-semibold mb-0.5">04.</span> Ulasan <span className="text-xs text-gray-400 group-hover:text-orange-600 transition">&#9662;</span>
          </a>
          <a href="#contact" className="group flex items-baseline gap-1.5 text-gray-700 hover:text-orange-600 font-medium text-lg transition">
            <span className="text-xs text-orange-600 font-semibold mb-0.5">05.</span> Contact
          </a>
        </nav>

        {/* Tombol Aksi */}
        <div className="flex items-center gap-4">
          <a href="/login" className="text-gray-700 font-semibold hover:text-orange-600 transition">Masuk</a>
          <button className="bg-gray-900 text-white px-7 py-3 rounded-xl font-semibold text-lg hover:bg-gray-800 transition shadow-md">
            Coba Gratis
          </button>
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;