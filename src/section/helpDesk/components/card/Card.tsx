import React from "react";

interface CardProps {
  company: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  batch: string;
}

const Card: React.FC<CardProps> = ({
  company,
  name,
  role,
  quote,
  image,
  batch,
}) => {
  return (
    <div className="flex items-center bg-[#0a081f] text-white rounded-xl p-4 shadow-lg w-full max-w-lg">
      {/* Left Side - Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-xl"
        />
        <span className="absolute bottom-0 left-0 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
          {batch}
        </span>
      </div>

      {/* Right Side - Text Content */}
      <div className="ml-4 flex-1">
        <h6 className="text-xs font-semibold text-gray-400">{company}</h6>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-300">{role}</p>
        <p className="text-sm text-gray-400 mt-2">
          {quote}{" "}
          <span className="text-yellow-400 font-semibold cursor-pointer">
            See More
          </span>
        </p>
      </div>

      {/* Quote Icon */}
      <div className="text-gray-500 text-2xl">&#8221;</div>
    </div>
  );
};

export default Card;
