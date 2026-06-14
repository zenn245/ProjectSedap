import { useState, useEffect } from "react"; // <-- 1. Ditambahkan useState & useEffect
import PageHeader from "../components/PageHeader";
import axios from "axios"; // <-- 2. Ditambahkan import axios
import { BsFillExclamationDiamondFill } from "react-icons/bs"; // <-- 3. Ditambahkan import icon
import { Link } from "react-router-dom";

export default function Products() {
  const breadcrumb = ["Dashboard", "Product List"];
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // 4. Membungkus axios dengan useEffect agar API HANYA DIPANGGIL 1 KALI saat halaman dibuka
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        setProducts(response.data.products);
      })
      .catch((err) => {
        setError(err.message || "An unknown error occurred");
      });
  }, []); // Array kosong [] ini yang mengunci agar tidak terjadi infinite loop

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  return (
    <div>
      <PageHeader title="Products" breadcrumb={breadcrumb} />

      {/* 5. Menampilkan info error di sini jika API gagal dipanggil */}
      {errorInfo}

      <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
        <thead>
          <tr className="bg-emerald-600 text-white text-left text-sm font-semibold">
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Vendor</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
          {products.map((item, index) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-6 py-4 font-medium text-gray-700">
                {index + 1}.
              </td>
              <td className="px-6 py-4">
                <Link
                  to={`/products/${item.id}`}
                  className="text-emerald-400 hover:text-emerald-500"
                >
                  {item.title}
                </Link>
              </td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">
                Rp {(item.price * 15000).toLocaleString("id-ID")}
              </td>
              {/* Catatan: Di atas, kurs harga disesuaikan dan diformat agar rapi */}
              <td className="px-6 py-4">{item.brand || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
