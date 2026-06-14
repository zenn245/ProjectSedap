import { GiNotebook } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdFastfood } from "react-icons/md"; // <-- 1. SUDAH DITAMBAHKAN IMPORT ICON
import { Link, NavLink } from "react-router-dom"; // <-- Disederhanakan import-nya
import { BiNote } from "react-icons/bi";

export default function Sidebar() {
  // 2. SUDAH DITAMBAHKAN FUNGSI UNTUK MENU CLASS (OTOMATIS BERUBAH WARNA SAAT AKTIF)
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 font-medium transition-all ${
      isActive
        ? "bg-green-200 text-hijau"
        : "text-gray-600 hover:bg-green-200 hover:text-hijau"
    }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <Link
              id="menu-1"
              to="/"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200"
            >
              <TbLayoutDashboard className="mr-4 text-xl" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              id="menu-2"
              to="/orders"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200"
            >
              <GiNotebook className="mr-4 text-xl" />
              Orders
            </Link>
          </li>
          <li>
            <Link
              id="menu-3"
              to="/customers"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200"
            >
              <HiOutlineUserGroup className="mr-4 text-xl" />
              Customers
            </Link>
          </li>
          <li>
            {/* 3. MENU PRODUCTS SEKARANG SUDAH AMAN */}
            <NavLink id="menu-4" to="/products" className={menuClass}>
              <MdFastfood className="mr-4 text-xl" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-5" to="/notes" className={menuClass}>
              <BiNote className="mr-4 text-xl" />
              Notes
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-20 rounded-full"
            src="/foto/beauty.png"
            alt="avatar"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}