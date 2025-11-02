"use client";
import React from "react";

interface GenericButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const GenericButton: React.FC<GenericButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  icon,
  fullWidth = false,
  disabled = false,
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all text-sm sm:text-base";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md hover:from-orange-600 hover:to-amber-700 hover:shadow-lg cursor-pointer",
    secondary:
      "bg-gray-800 text-white hover:bg-gray-700 shadow-sm hover:shadow-md cursor-pointer",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 cursor-pointer",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg cursor-pointer",
    ghost: "bg-transparent text-gray-700 cursor-pointer",
  };

  const disabledStyles =
    "opacity-50 cursor-not-allowed hover:shadow-none hover:bg-none";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${disabled ? disabledStyles : ""}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {label}
    </button>
  );
};
