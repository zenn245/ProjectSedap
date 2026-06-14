import React, { useState, useEffect } from 'react';
import GuestHeader from '../components/GuestHeader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductSection from '../components/ProductSection';
import TestimonialSection from '../components/TestimonialSection';
import GuestFooter from '../components/GuestFooter';

const GuestPage = () => {
  // 1. Buat state untuk mengatur status loading (default: true)
  const [isLoading, setIsLoading] = useState(true);

  // 2. Gunakan useEffect untuk mensimulasikan proses loading
  useEffect(() => {
    // Simulasi loading selama 2 detik (2000 ms)
    // Di dunia nyata, Anda bisa menaruh fungsi fetch API di sini
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Membersihkan timer saat komponen di-unmount
    return () => clearTimeout(timer);
  }, []);

  // 3. Tampilan Loading Screen (Jika isLoading masih true)
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center">
        {/* Animasi Spinner menggunakan Tailwind */}
        <div className="w-16 h-16 border-4 border-orange-100 border-t-orange-600 rounded-full animate-spin"></div>
        <p className="mt-5 text-xl font-bold text-gray-800 tracking-tight">
          S<span className="text-orange-600">e</span>d<span className="text-orange-600">a</span>p<span className="text-orange-600">.</span>
        </p>
        <p className="mt-2 text-sm text-gray-500 font-medium">Menyiapkan hidangan...</p>
      </div>
    );
  }

  // 4. Tampilan Halaman Utama (Jika isLoading sudah false)
  return (
    // Tambahkan class animasi transisi agar saat muncul lebih smooth (opsional)
    <div className="min-h-screen bg-white font-sans text-gray-800 relative overflow-hidden transition-opacity duration-700 ease-in-out">
      
      {/* Elemen Dekoratif Latar Belakang */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40 -ml-24 -mb-24"></div>

      {/* Memanggil Komponen Header */}
      <GuestHeader />

      {/* Memanggil Komponen Konten Utama */}
      <main className="pt-32 pb-24 relative z-10">
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <TestimonialSection />
        <GuestFooter />
      </main>

    </div>
  );
};

export default GuestPage;