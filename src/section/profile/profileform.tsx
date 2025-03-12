import React from "react";

interface ProfileFormProps {
  isEditing: boolean;
  hasChanged: boolean;
  saveChanges: () => void;
}

const ProfileForm = ({ isEditing, hasChanged, saveChanges }: ProfileFormProps) => {
  return (
    <div>
      {isEditing && (
        <button
          className={`p-2 rounded block ms-auto ${
            hasChanged
              ? "bg-purple-500 hover:bg-purple-600 text-white"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
          disabled={!hasChanged}
          onClick={saveChanges}
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default ProfileForm;
