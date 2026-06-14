import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex bg-white font-sans text-gray-800">
      
      {/* Kolom Kiri: Form Login */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        
        {/* Logo (Bisa di-klik untuk kembali ke Home) */}
        <div className="absolute top-8 left-8 sm:left-16 lg:left-24">
          <a href="/" className="text-3xl font-extrabold text-gray-900 tracking-tight">
            S<span className="text-orange-600">e</span>d<span className="text-orange-600">a</span>p<span className="text-orange-600">.</span>
          </a>
        </div>

        <div className="max-w-md w-full mx-auto mt-16 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang Kembali! 👋</h2>
          <p className="text-gray-500 mb-8">Silakan masukkan email dan kata sandi Anda untuk melanjutkan.</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Alamat Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition"
                placeholder="contoh@email.com"
                required
              />
            </div>

            {/* Input Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Kata Sandi
                </label>
                <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-700">
                  Lupa sandi?
                </a>
              </div>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition"
                placeholder="Masukkan kata sandi Anda"
                required
              />
            </div>

            {/* Checkbox Ingat Saya */}
            <div className="flex items-center">
              <input 
                id="remember-me" 
                type="checkbox" 
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                Ingat saya
              </label>
            </div>

            {/* Tombol Masuk */}
            <button 
              type="submit" 
              className="w-full bg-orange-600 text-white font-bold py-3.5 rounded-xl hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition shadow-lg transform hover:-translate-y-0.5"
            >
              Masuk ke Akun
            </button>
          </form>

          {/* Pemisah (Divider) */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Atau masuk dengan</span>
            </div>
          </div>

          {/* Tombol Login Google (Simulasi) */}
          <div className="mt-8">
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition shadow-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Lanjutkan dengan Google
            </button>
          </div>

          {/* Link Daftar */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Belum punya akun?{' '}
            <a href="/register" className="font-bold text-orange-600 hover:text-orange-700 transition">
              Daftar sekarang
            </a>
          </p>

        </div>
      </div>

      {/* Kolom Kanan: Gambar Makanan (Hanya tampil di layar menengah ke atas) */}
      <div className="hidden md:block md:w-1/2 relative bg-orange-50">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Sate Ayam Sedap" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay gradasi agar teks/elemen (jika ada) di atas gambar lebih terbaca, atau sekadar estetika */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Dekorasi Teks di atas Gambar */}
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h3 className="text-3xl font-bold mb-2">Kelezatan di Setiap Gigitan.</h3>
          <p className="text-gray-200">Bergabunglah dengan ribuan pelanggan lainnya yang telah menikmati kemudahan memesan makanan favorit mereka melalui Sedap.</p>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;