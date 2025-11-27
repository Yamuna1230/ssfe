import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function VolunteerProfile() {
  const [volunteer, setVolunteer] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setVolunteer(user);
    } else {
      navigate("/volunteer-login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!volunteer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white text-center">
            <div className="w-32 h-32 rounded-full bg-blue-200 text-blue-700 mx-auto flex items-center justify-center text-5xl font-bold mb-4 border-4 border-white shadow-lg">
              {volunteer?.fullName?.charAt(0)?.toUpperCase() || "V"}
            </div>
            <h1 className="text-3xl font-bold mb-2">
              {volunteer.fullName || "Volunteer"}
            </h1>
            <p className="text-blue-100 text-lg">{volunteer.email}</p>
            <p className="text-blue-200 mt-2">Role: Volunteer</p>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Profile Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Full Name
                  </label>
                  <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded-lg">
                    {volunteer.fullName || "Not provided"}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded-lg">
                    {volunteer.email}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Phone
                  </label>
                  <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded-lg">
                    {volunteer.phone || "Not provided"}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Role
                  </label>
                  <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded-lg">
                    Volunteer
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Location
                  </label>
                  <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded-lg">
                    {volunteer.location || "Not provided"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Member Since
                  </label>
                  <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded-lg">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Skills
              </label>
              <div className="bg-gray-50 p-4 rounded-lg">
                {volunteer.skills ? (
                  <p className="text-lg text-gray-800">{volunteer.skills}</p>
                ) : (
                  <p className="text-gray-500">No skills listed</p>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Details</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700">
                  This is your volunteer profile. Contact administration to update any information 
                  or add more details to your profile.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/volunteer-dashboard")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => navigate("/")}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
              >
                Back to Home
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerProfile;