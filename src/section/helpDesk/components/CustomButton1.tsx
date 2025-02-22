import React from "react";

interface ButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton1: React.FC<ButtonProps> = ({
  icon,
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-black font-semibold border-1 
                  hover:bg-[#ECE0F4] active:bg-[#ECE0F4] rounded-lg 
                  transition-all duration-300 hover:opacity-90 ${className}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default CustomButton1;
