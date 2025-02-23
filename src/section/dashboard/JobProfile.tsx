import { Pencil } from "lucide-react";
import React from "react";

const JobProfile = () => {
  return (
    <main className="w-full h-full p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Additional Info</h1>
        </div>
        <button className="text-purple-400 hover:text-purple-300">
          <Pencil size={20} />
        </button>
      </div>

      <div className="bg-[#1a1a2e] rounded-lg p-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="text-gray-400 block mb-1">Your Gender</label>
              <p className="text-white">Male</p>
            </div>
            <div>
              <label className="text-gray-400 block mb-1">
                Primary Device Type
              </label>
              <p className="text-white">Computer</p>
            </div>
            <div>
              <label className="text-gray-400 block mb-1">
                Years Of Experience
              </label>
              <p className="text-white">0</p>
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Area Type</label>
              <p className="text-white">Town</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-gray-400 block mb-1">Age Range</label>
              <p className="text-white">20-25</p>
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Internet Type</label>
              <p className="text-white">Broadband</p>
            </div>
            <div>
              <label className="text-gray-400 block mb-1">
                Employment Role
              </label>
              <p className="text-white">None</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobProfile;
