"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CustomDropdownProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-2 relative">
      {/* Label */}
      {label && (
        <label className="text-sm font-semibold text-gray-700">{label}</label>
      )}

      {/* Dropdown button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded-lg 
                    text-sm sm:text-base bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent 
                    transition-all ${isOpen ? "ring-2 ring-orange-500" : ""}`}
      >
        <span className={`${!value ? "text-gray-400" : "text-gray-800"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-auto">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange?.(opt);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm cursor-pointer transition-all 
                ${
                  value === opt
                    ? "bg-orange-100 text-orange-700 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
