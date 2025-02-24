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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMessage = () => {
    setIsTruncated((prevState) => !prevState);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            onClick={openModal}
          >
            More
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

      {/* Modal */}
      {isModalOpen && (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`}>
          <div className="bg-[rgba(78,36,82,0.85)] rounded-lg p-6  w-[80vw] max-w-[800px] border border-[rgb(51,13,55)]">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <button
                onClick={closeModal}
                className="text-white font-bold text-lg"
              >
                X
              </button>
            </div>
            <div className="mt-4">
              <blockquote className="text-lg">{message}</blockquote>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img
                src={imageUrl}
                alt={name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-lg">{position}</p>
                <p className="text-base">{company}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
