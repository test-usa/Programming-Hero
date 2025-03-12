import React from 'react';
import { ChevronRight, BookOpen, AlertCircle } from 'lucide-react';

interface AssignmentViewerProps {
  assignment: {
    id: string;
    title: string;
    totalMark: number;
    deadline: string;
    instructions?: string[];
    runningModules?: {
      title: string;
      duration: string;
      progress: string;
    }[];
  } | null;
}

function AssignmentViewer({ assignment }: AssignmentViewerProps) {
  if (!assignment) return <div>No assignment data available.</div>;

  return (
    <div className=" bg-[#0f1117] text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white">3</span>
          </div>
          <h1 className="text-2xl font-semibold">{assignment.title}</h1>
        </div>

        {/* Main Content */}
        <div className="bg-[#1a1b23] rounded-xl p-8">
          <h2 className="text-[#ff9f43] text-xl mb-6 text-center">Details</h2>
          
          {assignment.instructions && (
            <ul className="space-y-3 text-gray-300 mb-8">
              {assignment.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  {instruction}
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-between items-center border-t border-gray-700 pt-6">
            <div>
              <p className="text-sm text-gray-400">Total Marks</p>
              <p className="text-2xl font-semibold">{assignment.totalMark}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Submit Deadline</p>
              <p className="text-2xl font-semibold">{new Date(assignment.deadline).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Running Modules Section */}
        {assignment.runningModules && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Running Modules</h4>
            <div className="space-y-2">
              {assignment.runningModules.map((module, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-300 font-semibold">{module.title}</p>
                  <p className="text-gray-400">Duration: {module.duration}</p>
                  <p className="text-gray-400">Progress: {module.progress}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AssignmentViewer;