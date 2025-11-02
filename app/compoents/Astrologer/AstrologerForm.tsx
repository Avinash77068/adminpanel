"use client"
import { X } from "lucide-react";

export const AstrologerFormUI = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-linear-to-r from-orange-500 to-amber-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">Add New Astrologer</h2>
          <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <form className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value="Pandit Ramesh Sharma"
                onChange={(e) => console.log(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value="rameshastro@example.com"
                onChange={(e) => console.log(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                value="+91 9876543210"
                onChange={(e) => console.log(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Image URL *
              </label>
              <input
                type="url"
                value="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                onChange={(e) => console.log(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Experience (years) *
              </label>
              <input
                type="number"
                value="8"
                onChange={(e) => console.log(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rating *
              </label>
              <input
                type="number"
                step="0.1"
                value="4.8"
                onChange={(e) => console.log(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hourly Rate (₹) *
              </label>
              <input
                type="number"
                value="600"
                onChange={(e) => console.log(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>Free</option>
                <option>Busy</option>
                <option>Offline</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total Consultations
              </label>
              <input
                type="number"
                value="340"
                onChange={(e) => console.log(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Joined Date
              </label>
              <input
                type="date"
                value="2023-10-10"
                  onChange={(e) => console.log(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Specializations */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Specialization
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Vedic Astrology",
                "Tarot Reading",
                "Palmistry",
                "Numerology",
                "Vastu",
                "Love & Relationship",
              ].map((spec) => (
                <button
                  key={spec}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    ["Vedic Astrology", "Tarot Reading"].includes(spec)
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Languages
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {["Hindi", "English", "Sanskrit", "Gujarati"].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    ["Hindi", "English"].includes(lang)
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              value="Astrologer Ramesh has over 8 years of experience in Vedic astrology and tarot reading. Specializes in love and relationship guidance."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              rows={4}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-linear-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition font-medium shadow-md hover:shadow-lg"
            >
              Add Astrologer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
