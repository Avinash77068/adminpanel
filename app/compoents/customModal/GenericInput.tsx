"use client";
import React from "react";

interface CustomInputProps {
  label?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  step?: string;
  icon?: React.ReactNode;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  required = false,
  step,
  icon,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {/* Label */}
      {label && (
        <label className="text-sm font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Input with icon inside */}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          step={step}
          required={required}
          className={`w-full px-4 py-3 border border-gray-300 text-black rounded-lg text-sm sm:text-base
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none
                      transition-all bg-white placeholder-gray-400
                      ${icon ? "pl-10" : ""}`}
        />
      </div>
    </div>
  );
};
