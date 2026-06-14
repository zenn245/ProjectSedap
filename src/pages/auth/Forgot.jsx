import React from 'react';

const ForgotPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        
        {/* Logo Tengah */}
        <div className="text-center mb-8">
          <a href="/" className="text-4xl font-extrabold text-gray-900 tracking-tight inline-block">
            S<span className="text-orange-600">e</span>d<span className="text-orange-600">a</span>p<span className="text-orange-600">.</span>
          </a>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Lupa Kata Sandi? 🔒</h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Jangan khawatir! Masukkan email Anda yang terdaftar, dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Alamat Email
            </label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition"
              placeholder="contoh@email.com"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-orange-600 text-white font-bold py-3.5 rounded-xl hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition shadow-lg transform hover:-translate-y-0.5"
          >
            Kirim Tautan Reset
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="/login" className="text-sm font-bold text-gray-600 hover:text-orange-600 transition flex items-center justify-center gap-2">
            <span>&larr;</span> Kembali ke Halaman Masuk
          </a>
        </div>

      </div>
    </div>
  );
};

export default ForgotPage;