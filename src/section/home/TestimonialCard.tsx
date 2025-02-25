import React, { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  imageUrl: string;
  message: string;
  bgColor: string;
  buttonColor: string;
  textColor: string;
  batch: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  imageUrl,
  message,
  bgColor,
  buttonColor,
  textColor,
  batch
}) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleMessage = () => {
    setIsTruncated((prevState) => !prevState);
  };

  const truncatedMessage = message.length > 100 ? message.slice(0, 100) + '... ' : message;

  return (
    <div className={`max-w-md p-6 rounded-lg shadow-md ${bgColor} text-${textColor} mr-3`}>
      <div className="flex justify-between items-center pb-5">
        <RiDoubleQuotesL className="text-white mb-4" size={24} />
        <button className={`px-3 py-2 text-white rounded-lg ${buttonColor}`}>{batch}</button>
      </div>

      <blockquote className="text-lg">
        "{isTruncated ? truncatedMessage : message}"
        {message.length > 100 && (
          <span
            className="text-[#A922E1] cursor-pointer"
            onClick={toggleMessage}
          >
            {isTruncated ? "More" : "Less"}
          </span>
        )}
      </blockquote>

      <div className="mt-4 flex items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-base">{position}</p>
          <p className="text-base">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
