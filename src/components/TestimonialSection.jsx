import React from 'react';

const testimonialData = [
  { id: 1, name: "Budi Santoso", review: "Rasa makanannya sangat otentik dan pengirimannya cepat. Aplikasi Sedap mantap!", avatar: "https://avatar.iran.liara.run/public/boy" },
  { id: 2, name: "Siti Aminah", review: "Banyak pilihan menu dan sering ada diskon. Sangat membantu untuk makan siang di kantor.", avatar: "https://avatar.iran.liara.run/public/girl" },
  { id: 3, name: "Andi Saputra", review: "UI aplikasinya gampang dipakai. Menu unggulannya beneran enak-enak.", avatar: "https://avatar.iran.liara.run/public/13" },
  { id: 4, name: "Rina Marlina", review: "CS nya ramah kalau ada pesanan yang salah. Tetap pertahankan kualitasnya!", avatar: "https://avatar.iran.liara.run/public/80" },
  { id: 5, name: "Reza Rahadian", review: "Aplikasi andalan kalau lagi mager masak. Semuanya lengkap dan harganya terjangkau.", avatar: "https://avatar.iran.liara.run/public/45" },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Apa Kata Mereka?</h2>
          <p className="text-gray-500 mt-4">Ulasan jujur dari pelanggan setia Sedap</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonialData.slice(0, 3).map((testi) => (
            <div key={testi.id} className="bg-orange-50/50 border border-orange-100 rounded-2xl p-8 relative">
              <p className="text-gray-600 italic mb-6">"{testi.review}"</p>
              <div className="flex items-center">
                <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full border-2 border-orange-200" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testi.name}</h4>
                  <span className="text-sm text-gray-500">Pelanggan Sedap</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
           {testimonialData.slice(3, 5).map((testi) => (
            <div key={testi.id} className="bg-orange-50/50 border border-orange-100 rounded-2xl p-8 relative">
              <p className="text-gray-600 italic mb-6">"{testi.review}"</p>
              <div className="flex items-center">
                <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full border-2 border-orange-200" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testi.name}</h4>
                  <span className="text-sm text-gray-500">Pelanggan Sedap</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;