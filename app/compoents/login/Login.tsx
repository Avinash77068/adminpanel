"use client";
import { useState } from "react";
import { LogIn, User, Lock } from "lucide-react";

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login = ({ onLoginSuccess }: LoginProps) => {
  const [email, setEmail] = useState("admin@astrology.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic authentication logic
    if (email === "admin@astrology.com" && password === "admin123") {
      onLoginSuccess(); // Move to dashboard
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-50 flex items-center justify-center">
      <div className="relative w-full max-w-lg backdrop-blur-xl bg-white/80 shadow-2xl rounded-3xl border border-white/30 p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full shadow-lg mb-5 animate-pulse">
            <LogIn className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Admin Login</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Astrologer Management System
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none shadow-sm"
                placeholder="admin@astrology.com"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none shadow-sm"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95"
          >
            Sign In
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p className="bg-white/60 backdrop-blur-md p-3 rounded-xl border border-gray-100 shadow-sm">
            <span className="block mb-1 text-gray-700 font-semibold">
              Demo Credentials:
            </span>
            <span className="font-mono text-orange-700 font-medium">
              admin@astrology.com / admin123
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
