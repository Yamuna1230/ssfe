// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, LifeBuoy } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-gray-100 to-red-50">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
        Disaster Relief Portal
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Please choose how you want to proceed — whether you need urgent help or want to volunteer for rescue operations.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          className="flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg"
          onClick={() => navigate("/volunteer-login")}
        >
          <Users className="w-6 h-6" />
          Volunteer Login
        </button>
        <button
          className="flex items-center gap-3 px-6 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition shadow-lg"
          onClick={() => navigate("/request-help")}
        >
          <LifeBuoy className="w-6 h-6" />
          Need Help
        </button>
      </div>
    </div>
  );
}

export default Login;
