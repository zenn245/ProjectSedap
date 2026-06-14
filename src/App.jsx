import "./assets/tailwind.css";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";
import Guest from "./pages/GuestPage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail"; // <-- 1. PERBAIKAN: Mengubah 'productDetail' jadi 'ProductDetail' (P Besar)
import Notes from "./pages/Note";

// --- Tambahan Import Halaman Auth ---
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";

import { Route, Routes, Outlet } from "react-router-dom";

// 1. Buat komponen Layout khusus untuk area Dasbor
const DashboardLayout = () => {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div id="main-content" className="flex-1 p-4">
        <Header />
        {/* Outlet akan merender halaman sesuai rute yang aktif di dalam layout ini */}
        <Outlet /> 
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* 2. Rute Standalone: Tanpa Sidebar & Header (Landing Page & Auth) */}
      {/* Saya asumsikan landing page utama diakses di /guest */}
      <Route path="/guest" element={<Guest />} />
      
      {/* Rute Halaman Autentikasi */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<Forgot />} />

      {/* 3. Rute Dasbor: Dibungkus dengan DashboardLayout */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        {/* 2. PERBAIKAN: Mengubah element-nya menjadi <ProductDetail /> agar membuka halaman detail */}
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/notes" element={<Notes />}/> 
      </Route>
    </Routes>
  );
}

export default App;