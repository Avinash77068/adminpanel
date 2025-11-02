"use client";
import React, { useState } from "react";
import { X, Mail, Phone, User, Star, Image as ImageIcon } from "lucide-react";
import { CustomInput } from "../customModal/GenericInput";
import { CustomDropdown } from "../customModal/GenericDropDown";


export const AstrologerFormUI = ({ onClose, setStatus }: any) => {
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([
    "Vedic Astrology",
    "Tarot Reading",
  ]);
  const [selectedLangs, setSelectedLangs] = useState<string[]>([
    "Hindi",
    "English",
  ]);

  const specializations = [
    "Vedic Astrology",
    "Tarot Reading",
    "Palmistry",
    "Numerology",
    "Vastu",
    "Love & Relationship",
    "Career Guidance",
    "Marriage Compatibility",
  ];

  const languages = [
    "Hindi",
    "English",
    "Sanskrit",
    "Gujarati",
    "Tamil",
    "Marathi",
    "Bengali",
    "Punjabi",
  ];

  const toggleSelection = (
    item: string,
    selectedList: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-3 sm:p-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-linear-to-r z-50 from-orange-500 to-amber-600 text-white p-5 sm:p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">Add New Astrologer</h2>
          <button
            className="p-2 hover:bg-white/20 rounded-lg transition"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form className="p-5 sm:p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <CustomInput
              label="Full Name"
              icon={<User size={18} />}
              value="Pandit Ramesh Sharma"
              onChange={(e) => console.log(e.target.value)}
            />
            <CustomInput
              label="Email Address"
              icon={<Mail size={18} />}
              type="email"
              value="rameshastro@example.com"
            />
            <CustomInput
              label="Phone Number"
              icon={<Phone size={18} />}
              type="tel"
              value="+91 9876543210"
            />
            <CustomInput
              label="Profile Image URL"
              icon={<ImageIcon size={18} />}
              type="url"
              value="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
            />
            <CustomInput
              label="Experience (Years)"
              type="number"
              value="8"
              required
            />
            <CustomInput
              label="Rating"
              icon={<Star size={18} />}
              type="number"
              step="0.1"
              value="4.8"
            />
            <CustomInput label="Total Calls" type="number" value="600" />
            <CustomDropdown
              label="Current Status"
              options={["Free", "Busy", "Offline"]}
              value={"Free"}
              onChange={setStatus}
            />
          </div>

          {/* Specializations */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Specializations
            </label>
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec) => {
                const isActive = selectedSpecs.includes(spec);
                return (
                  <button
                    key={spec}
                    type="button"
                    onClick={() =>
                      toggleSelection(spec, selectedSpecs, setSelectedSpecs)
                    }
                    className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all border ${
                      isActive
                        ? "bg-orange-100 text-orange-700 border-orange-300"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {spec}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Languages Known
            </label>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => {
                const isActive = selectedLangs.includes(lang);
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() =>
                      toggleSelection(lang, selectedLangs, setSelectedLangs)
                    }
                    className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all border ${
                      isActive
                        ? "bg-amber-100 text-amber-700 border-amber-300"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              value="Astrologer Ramesh has over 8 years of experience in Vedic astrology and tarot reading. Specializes in love and relationship guidance."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
              rows={4}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="flex z-50 sticky bottom-0 py-2 bg-white flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition font-medium shadow-md hover:shadow-lg"
            >
              Add Astrologer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
