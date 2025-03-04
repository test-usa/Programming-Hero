import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CustomModal({ isOpen, onClose }: CustomModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#2D1B64] text-white p-6 rounded-lg w-[700px] relative">
        <button 
          className="absolute top-4 right-3 text-gray-300 hover:text-white"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <p className="text-lg leading-relaxed">
          আমাদের কম্পানি ওয়েব ডেভেলপমেন্ট ১২তম ব্যাচের কোর্স এনরোলমেন্ট শুরু হবে জুন ৩০ তারিখ
          আর এনরোলমেন্ট শেষ হবে জুন ২৪ তারিখ। জুন ২৪ তারিখের পর প্রজেক্টকে এই ব্যাচে সুযোগ দেওয়া হবে না।
        </p>
        <div className="mt-4 flex justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base py-2 px-4 rounded-lg shadow-md hover:opacity-90">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
