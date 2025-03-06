import React from "react";

const DeviceActivity = () => {
  const deviceActivities = [
    {
      serial: 1,
      platform: "Windows 10",
      date: "20-02-2025 03:56 PM",
      action: "Remove",
    },
  ];

  return (
    <div>
      <h2 className="mt-5 text-xl font-semibold bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text mb-4 border-b border-dashed border-[#2d1e38] pb-4">
        Device Activity
      </h2>
      <div className="rounded-lg overflow-hidden mt-8">
        <table className="w-full">
          <thead className="bg-[#231b2c]">
            <tr>
              <th className="text-left p-4 text-gray-400">Serial</th>
              <th className="text-left p-4 text-gray-400">Platform</th>
              <th className="text-left p-4 text-gray-400">Date</th>
              <th className="text-left p-4 text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {deviceActivities.map((activity) => (
              <tr key={activity.serial} className="text-gray-400">
                <td className="p-4">{activity.serial}</td>
                <td className="p-4">{activity.platform}</td>
                <td className="p-4">{activity.date}</td>
                <td className="p-4">
                  <button className="font-semibold bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text">
                    {activity.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceActivity;
