import React from 'react';

const GuestFooter = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Info Brand & Kontak */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">S<span className="text-orange-600">e</span>d<span className="text-orange-600">a</span>p<span className="text-orange-600">.</span></h3>
          <p className="mb-4 text-gray-400">Menyajikan hidangan terbaik langsung ke meja makan Anda.</p>
          <div className="space-y-1.5 text-sm">
            <p><strong>Email:</strong> halo@sedap.id</p>
            <p><strong>Telepon:</strong> +62 811 2233 4455</p>
            <p><strong>Alamat:</strong> Jl. Sudirman No. 123, Jakarta</p>
          </div>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="text-lg font-bold text-white mb-5">Ikuti Kami</h4>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-orange-500 transition text-xl">IG</a>
            <a href="#" className="hover:text-orange-500 transition text-xl">TW</a>
            <a href="#" className="hover:text-orange-500 transition text-xl">FB</a>
            <a href="#" className="hover:text-orange-500 transition text-xl">TT</a>
          </div>
        </div>

        {/* Gambar Partner */}
        <div>
          <h4 className="text-lg font-bold text-white mb-5">Partner Kami</h4>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 px-5 py-2.5 rounded-lg flex items-center justify-center font-bold text-gray-500 hover:text-white transition">Gojek</div>
            <div className="bg-gray-800 px-5 py-2.5 rounded-lg flex items-center justify-center font-bold text-gray-500 hover:text-white transition">Grab</div>
            <div className="bg-gray-800 px-5 py-2.5 rounded-lg flex items-center justify-center font-bold text-gray-500 hover:text-white transition">OVO</div>
            <div className="bg-gray-800 px-5 py-2.5 rounded-lg flex items-center justify-center font-bold text-gray-500 hover:text-white transition">Dana</div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Aplikasi Sedap. All rights reserved.
      </div>
    </footer>
  );
};

export default GuestFooter;