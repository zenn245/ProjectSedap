import React from 'react';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex bg-white font-sans text-gray-800">
      
      {/* Kolom Kiri: Form Register */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12">
        <div className="absolute top-8 left-8 sm:left-16 lg:left-24">
          <a href="/" className="text-3xl font-extrabold text-gray-900 tracking-tight">
            S<span className="text-orange-600">e</span>d<span className="text-orange-600">a</span>p<span className="text-orange-600">.</span>
          </a>
        </div>

        <div className="max-w-md w-full mx-auto mt-12 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Buat Akun Baru 🚀</h2>
          <p className="text-gray-500 mb-8">Bergabunglah dengan Sedap dan nikmati berbagai hidangan lezat.</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input 
                type="text" id="name" required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Alamat Email</label>
              <input 
                type="email" id="email" required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition"
                placeholder="contoh@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Kata Sandi</label>
              <input 
                type="password" id="password" required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition"
                placeholder="Minimal 8 karakter"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-orange-600 text-white font-bold py-3.5 rounded-xl hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition shadow-lg transform hover:-translate-y-0.5 mt-2"
            >
              Daftar Sekarang
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Sudah punya akun?{' '}
            <a href="/login" className="font-bold text-orange-600 hover:text-orange-700 transition">
              Masuk di sini
            </a>
          </p>
        </div>
      </div>

      {/* Kolom Kanan: Gambar */}
      <div className="hidden md:block md:w-1/2 relative bg-orange-50">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Makanan Sedap" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h3 className="text-3xl font-bold mb-2">Eksplorasi Rasa Tanpa Batas.</h3>
          <p className="text-gray-200">Daftar sekarang dan dapatkan promo gratis ongkir untuk pesanan pertama Anda!</p>
        </div>
      </div>

    </div>
  );
};

export default RegisterPage;