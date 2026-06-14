import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Kenapa Memilih Sedap?</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          <strong className="text-orange-600">Sedap</strong> adalah platform pesan antar makanan terdepan yang menghubungkan Anda dengan ribuan restoran dan koki lokal terbaik. Kami berkomitmen menyajikan makanan berkualitas tinggi dengan pengiriman yang kilat. Keunggulan kami terletak pada kurasi menu yang ketat, kebersihan yang terjamin, dan harga yang bersahabat untuk semua kalangan.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;