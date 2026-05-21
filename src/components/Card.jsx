import React from "react";

const variants = {
  warning: {
    bg: "bg-orange-100",
    text: "text-orange-500",
  },
  success: {
    bg: "bg-green-100",
    text: "text-green-500",
  },
  danger: {
    bg: "bg-red-100",
    text: "text-red-500",
  },
  info: {
    bg: "bg-blue-100",
    text: "text-blue-500",
  },
};

export default function Card({
  title,
  value,
  percentage,
  icon,
  variant = "info",
}) {
  const colors = variants[variant];

  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-lg border border-gray-300 font-lexend">
      {/* Texto */}
      <div className="flex flex-col gap-2">
        <span className="text-gray-600 font-medium text-sm">{title}</span>

        <span className="text-4xl font-bold text-black">{value}</span>
        <span
          className={`text-gray-500 font-medium h-5 ${
            percentage ? "opacity-100" : "opacity-0"
          }`}
        >
          {percentage || "00%"}
        </span>
      </div>

      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full ${colors.bg} ${colors.text}`}
      >
        {icon}
      </div>
    </div>
  );
}
