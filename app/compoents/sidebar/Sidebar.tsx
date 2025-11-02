import React from "react";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export const SidebarUI = () => {
  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center px-4 py-3 shadow-lg z-40">
        <button className="p-2 rounded-md hover:bg-gray-700 transition">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold">Astro Admin</h1>
        <button className="p-2 rounded-md hover:bg-gray-700 transition">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div className="h-screen w-64 z-50 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col p-6 space-y-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/987/083/non_2x/user-icon-fake-photo-sign-profile-button-simple-style-social-media-poster-background-symbol-user-brand-logo-design-element-user-t-shirt-printing-for-sticker-free-vector.jpg"
            className="w-12 h-12 rounded-full"
            alt="Profile"
          />
          <h1 className="text-xl font-bold">Astro Admin</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-orange-500 text-white">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Users className="w-5 h-5" />
            <span>Users</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </nav>

        {/* Logout */}
        <div className="pt-4 border-t border-gray-700">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};
