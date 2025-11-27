import React from "react";
import { useNavigate } from "react-router-dom";

function VolunteerAvatar() {
  const navigate = useNavigate();
  const volunteer = JSON.parse(localStorage.getItem("volunteer"));

  if (!volunteer || !volunteer.firstName) return null;

  const initial = volunteer.firstName.charAt(0).toUpperCase();

  return (
    <div
      onClick={() => navigate("/volunteer-profile")}
      className="fixed top-4 right-4 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shadow-lg cursor-pointer hover:bg-blue-700 transition"
      title="View Profile"
    >
      {initial}
    </div>
  );
}

export default VolunteerAvatar;
