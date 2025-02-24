import React from 'react';

interface AbsoluteCardProps {
  icon: React.ElementType | string;  // Accepts a React component or image URL
  value: string;
  label: string;
}

const AbsoluteCard: React.FC<AbsoluteCardProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center md:px-8 px-2  md:border-r md:last:border-r-0 border-white/20 ">
      <div className="flex items-center gap-2">
        <span className="md:text-4xl text-2xl font-bold text-white">{value}</span>
        {/* Check if icon is a React component or image path */}
        {typeof icon === 'string' ? (
          <img src={icon} alt={label} className=" h-8 w-7" />
        ) : (
          // Ensure we are correctly using the React component
          React.createElement(icon, { className: "text-white text-3xl" })
        )}
      </div>
      <p className="text-base text-white">{label}</p>
    </div>
  );
};

export default AbsoluteCard;
