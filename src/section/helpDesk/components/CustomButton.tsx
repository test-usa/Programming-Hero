import React from "react";

interface ButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  icon,
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-white font-normal lg:font-semibold 
                  bg-gradient-to-r from-[#cb43c2] to-[#0f16f1] rounded-lg 
                  transition-all duration-300 hover:opacity-90 ${className}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default CustomButton;
