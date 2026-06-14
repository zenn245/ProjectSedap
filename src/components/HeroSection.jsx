import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Kolom Teks (Kiri) */}
      <div className="text-center md:text-left space-y-8">
        <span className="text-orange-600 font-semibold text-lg inline-block px-5 py-2 bg-orange-50 rounded-full">
          Selamat Datang di Sedap.
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Nikmati Hidangan <span className="relative inline-block">
            <span className="relative z-10 text-orange-600">Lezat</span>
            <span className="absolute bottom-1 left-0 w-full h-2.5 bg-red-500/20 -rotate-1 rounded-full"></span>
          </span> Setiap Hari
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
          Sedap menghadirkan makanan favorit langsung ke pintu rumah Anda. Cepat, hangat, dan pastinya menggugah selera. Pesan sekarang dan nikmati kelezatannya!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
          <button className="bg-orange-600 text-white px-10 py-4.5 rounded-full font-bold text-xl hover:bg-orange-700 transition shadow-xl transform hover:scale-105">
            Pesan Sekarang
          </button>
        </div>
      </div>

      {/* Kolom Gambar (Kanan) */}
      <div className="relative p-6 bg-orange-50/50 rounded-3xl border border-orange-100 shadow-inner">
         <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-100/50 rounded-full blur-xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1594179047519-f347310d3322?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
          alt="Hidangan Burger Sedap" 
          className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
        />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-orange-200/50 rounded-full"></div>
         <div className="absolute -bottom-8 -left-8 w-20 h-20 border border-dotted border-orange-200/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;