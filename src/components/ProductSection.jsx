import React from 'react';

const productData = [
  { id: 1, name: "Ayam Bakar Spesial", price: "Rp 35.000", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 2, name: "Nasi Goreng Seafood", price: "Rp 30.000", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 3, name: "Sate Ayam Madura", price: "Rp 25.000", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 4, name: "Rendang Daging Sapi", price: "Rp 40.000", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Produk Unggulan Kami</h2>
          <p className="text-gray-500 mt-4">Menu favorit yang paling sering dipesan oleh pelanggan Sedap</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-orange-600 font-bold text-lg">{product.price}</span>
                  <button className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition">
                    Beli
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;