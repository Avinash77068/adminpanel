"use client";
import React, { useState } from "react";
import {
  Camera,
  Edit,
  Globe,
  Moon,
  Sun,
  CheckCircle2,
  X,
  Save,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AstrologerProfileSettings() {
  const [profile, setProfile] = useState({
    name: "Astro Raj",
    phone: "+91 9876543210",
    email: "astro.raj@example.com",
    instagram: "https://instagram.com/astro.raj",
    language: "English",
    appearance: "Light mode",
    connected: true,
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState("");

  const handleEditClick = (field: string, value: string) => {
    setEditingField(field);
    setTempValue(value);
  };

  const handleSave = () => {
    if (editingField) {
      setProfile({ ...profile, [editingField]: tempValue });
      setEditingField(null);
    }
  };

  const handleUpload = () => {
    alert("Profile image upload clicked!");
  };

  return (
    <div className="flex bg-gray-50 ">
      <main className="flex-1 ">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border p-6 relative">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Astrologer"
                  className="w-20 h-20 rounded-full border object-cover"
                />
                <button
                  onClick={handleUpload}
                  className="absolute bottom-0 right-0 bg-indigo-600 text-white p-1.5 rounded-full hover:bg-indigo-700"
                >
                  <Camera size={14} />
                </button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {profile.name}
                </h3>
                <p className="text-gray-500 text-sm">{profile.email}</p>
              </div>
            </div>
            <button className="text-sm text-indigo-600 border border-indigo-600 px-4 py-1.5 rounded-lg hover:bg-indigo-50 transition">
              Upload
            </button>
          </div>

          {/* Profile Fields */}
          <div className="space-y-6">
            {[
              { label: "Name", key: "name", value: profile.name },
              { label: "Contacts", key: "phone", value: profile.phone },
              {
                label: "Social Media",
                key: "instagram",
                value: profile.instagram,
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <h4 className="font-semibold text-gray-800">{item.label}</h4>
                  <p className="text-gray-500 text-sm">{item.value}</p>
                </div>
                <button
                  onClick={() => handleEditClick(item.key, item.value)}
                  className="text-sm flex items-center gap-1 text-indigo-600 hover:underline"
                >
                  <Edit size={14} /> Edit
                </button>
              </div>
            ))}

            {/* Language */}
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h4 className="font-semibold text-gray-800">
                  Language & Currency
                </h4>
                <p className="text-gray-500 text-sm">English, INR</p>
              </div>
              <button className="text-sm flex items-center gap-1 text-indigo-600 hover:underline">
                <Globe size={14} /> Edit
              </button>
            </div>

            {/* Appearance */}
            <div className="flex justify-between items-center  pb-3">
              <div>
                <h4 className="font-semibold text-gray-800">Appearance</h4>
                <p className="text-gray-500 text-sm">{profile.appearance}</p>
              </div>
              <button
                onClick={() =>
                  setProfile({
                    ...profile,
                    appearance:
                      profile.appearance === "Light mode"
                        ? "Dark mode"
                        : "Light mode",
                  })
                }
                className="text-sm flex items-center gap-1 text-indigo-600 hover:underline"
              >
                {profile.appearance === "Light mode" ? (
                  <Moon size={14} />
                ) : (
                  <Sun size={14} />
                )}{" "}
                Toggle
              </button>
            </div>

       
          </div>

          {/* 🧩 Inline Mini Modal */}
          <AnimatePresence>
            {editingField && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg w-80">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800 capitalize">
                      Edit {editingField}
                    </h3>
                    <button
                      onClick={() => setEditingField(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <input
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <div className="flex justify-end mt-4 gap-2">
                    <button
                      onClick={() => setEditingField(null)}
                      className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-1"
                    >
                      <Save size={14} /> Save
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
