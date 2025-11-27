// src/pages/RequestHelp.jsx
import React, { useState } from "react";
import {
  AlertTriangle,
  MapPin,
  Phone,
  User,
  MessageCircle,
  Shield,
  Clock,
  Users,
  Mail,
} from "lucide-react";

function RequestHelp() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
    emergencyType: "",
    peopleAffected: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/help/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Help request sent successfully");
        setSubmitted(true);
      } else {
        console.error("Failed to send help request");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ------------------------------------------------------------
  // SUCCESS PAGE WITH DETAILS
  // ------------------------------------------------------------
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 py-10 px-4">
        <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
          {/* Header */}
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-3">
              <Shield className="text-green-600" size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Help Request Submitted!
            </h2>

            <p className="text-gray-600 mt-2 max-w-md">
              Volunteers in your area have been notified. Please stay reachable
              for quick assistance.
            </p>
          </div>

          {/* Submitted Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Your Submitted Details
            </h3>

            <div className="space-y-3 text-sm text-blue-900">
              <p>
                <strong>Name:</strong> {formData.name || "Not provided"}
              </p>
              <p>
                <strong>Phone:</strong> {formData.contact}
              </p>
              <p>
                <strong>Email:</strong> {formData.email || "Not provided"}
              </p>
              <p>
                <strong>Location:</strong> {formData.location}
              </p>
              <p>
                <strong>Emergency Type:</strong> {formData.emergencyType}
              </p>
              <p>
                <strong>People Affected:</strong> {formData.peopleAffected}
              </p>
              <p>
                <strong>Description:</strong> {formData.description}
              </p>
            </div>
          </div>

          {/* Safety Note */}
          <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 text-center">
            <p className="text-sm text-blue-800">
              ⚠️ <strong>Important:</strong> If you are in immediate danger,
              call <strong>100</strong> now.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ------------------------------------------------------------
  // FORM PAGE
  // ------------------------------------------------------------
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-10 px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        {/* Information Panel */}
        <div className="w-full md:w-2/5 bg-blue-700 text-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Emergency Assistance</h2>
          <p className="mb-6">
            We're here to help during emergencies. Fill out this form and nearby
            volunteers will be notified immediately.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="text-blue-200 mt-1" size={20} />
              <div>
                <h3 className="font-semibold">Quick Response</h3>
                <p className="text-blue-200 text-sm">
                  Volunteers typically respond within 15-30 minutes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="text-blue-200 mt-1" size={20} />
              <div>
                <h3 className="font-semibold">Community Support</h3>
                <p className="text-blue-200 text-sm">
                  Trained volunteers in your local area
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="text-blue-200 mt-1" size={20} />
              <div>
                <h3 className="font-semibold">No Login Required</h3>
                <p className="text-blue-200 text-sm">
                  Get help immediately without an account
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-3 bg-blue-800 rounded-lg">
            <p className="text-sm text-blue-200">
              <strong>Emergency Note:</strong> If you're in immediate danger,
              call <strong>100</strong> first.
            </p>
          </div>
        </div>

        {/* Form Panel */}
        <div className="w-full md:w-3/5 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="flex flex-col items-center gap-3 text-center mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertTriangle className="text-red-600" size={36} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Request Emergency Help
            </h2>

            <p className="text-gray-600 text-sm">
              Please provide accurate details so we can assist quickly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name (optional)"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 block w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="contact"
                  placeholder="Phone Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="pl-10 block w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 block w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="location"
                placeholder="Your Exact Location/Address"
                value={formData.location}
                onChange={handleChange}
                required
                className="pl-10 block w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="emergencyType"
                value={formData.emergencyType}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Type of Emergency</option>
                <option value="medical">Medical Emergency</option>
                <option value="natural">Natural Disaster</option>
                <option value="fire">Fire</option>
                <option value="flood">Flood</option>
                <option value="stranded">Stranded/Transportation</option>
                <option value="other">Other</option>
              </select>

              <select
                name="peopleAffected"
                value={formData.peopleAffected}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Number of People</option>
                <option value="1">1 Person</option>
                <option value="2-5">2-5 People</option>
                <option value="6-10">6-10 People</option>
                <option value="10+">10+ People</option>
              </select>
            </div>

            {/* Description */}
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <textarea
                name="description"
                placeholder="Describe your emergency..."
                value={formData.description}
                onChange={handleChange}
                rows="4"
                required
                className="pl-10 block w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-md transition flex items-center justify-center gap-2"
            >
              <AlertTriangle size={20} />
              Submit Emergency Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestHelp;
