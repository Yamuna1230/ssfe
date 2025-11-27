// src/pages/ResponsePage.jsx
import React, { useEffect, useState } from "react";
import { User, Phone, Mail, MapPin, AlertTriangle, MessageCircle, Users, Shield, Clock, CheckCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function ResponsePage() {
  const [data, setData] = useState(null);
  const [isAssigned, setIsAssigned] = useState(false);
  const [assignedVolunteer, setAssignedVolunteer] = useState("");
  const [allRequests, setAllRequests] = useState([]);
  const { user } = useAuth();

  // Fetch all help requests from backend
  useEffect(() => {
    const fetchHelpRequests = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/help/all");
        if (response.ok) {
          const requests = await response.json();
          setAllRequests(requests);
          
          // Assign a random request to the volunteer
          if (requests.length > 0) {
            const randomRequest = requests[Math.floor(Math.random() * requests.length)];
            setData(randomRequest);
            setAssignedVolunteer(user?.name || "Volunteer");
            setIsAssigned(true);
          }
        }
      } catch (error) {
        console.error("Error fetching help requests:", error);
        // Fallback to mock data if API fails
        const mockRequests = [
          {
            id: 1,
            name: "Emergency Request",
            contact: "+91 9876543210",
            email: "emergency@example.com",
            location: "Srikakulam, Andhra Pradesh",
            emergencyType: "flood",
            peopleAffected: "2-5",
            description: "Need immediate assistance",
            timestamp: new Date().toLocaleString()
          }
        ];
        setAllRequests(mockRequests);
        setData(mockRequests[0]);
        setAssignedVolunteer(user?.name || "Volunteer");
        setIsAssigned(true);
      }
    };

    fetchHelpRequests();
  }, [user]);

  const handleAcceptRequest = () => {
    alert(`Emergency request accepted! You are now assigned to help ${data?.name}.`);
    // Here you would typically update the backend to mark this request as assigned
  };

  const handleDeclineRequest = () => {
    // Assign a different random request from the available requests
    if (allRequests.length > 0) {
      const newRandomRequest = allRequests[Math.floor(Math.random() * allRequests.length)];
      setData(newRandomRequest);
      alert("Request declined. Assigned a new emergency request.");
    } else {
      alert("No other requests available at the moment.");
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg font-semibold">Checking for emergency requests...</p>
          <p className="text-gray-500 text-sm mt-2">Looking for people who need help in your area</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 flex justify-center px-4 pt-20">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden">

        {/* Header with Assignment Status */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <Shield className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Emergency Response Assignment</h1>
                <p className="text-blue-100 text-sm">Assigned to: {assignedVolunteer}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <Clock size={16} />
                <span className="text-sm font-medium">{data.timestamp || new Date().toLocaleString()}</span>
              </div>
              {isAssigned && (
                <div className="flex items-center gap-1 mt-2">
                  <CheckCircle size={16} className="text-green-300" />
                  <span className="text-green-300 text-sm">ACTIVE ASSIGNMENT</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Emergency Alert Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-red-600" size={24} />
            <div>
              <p className="text-red-800 font-semibold">URGENT: Immediate Response Required</p>
              <p className="text-red-600 text-sm">Priority: High • Response Time: Critical</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left Column - Personal Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Requester Details</h2>
              
              {/* Name */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
                <User className="text-blue-600" size={22} />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-semibold text-gray-800">{data.name || "Not provided"}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
                <Phone className="text-blue-600" size={22} />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold text-gray-800">{data.contact}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
                <Mail className="text-blue-600" size={22} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-800">{data.email || "Not provided"}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
                <MapPin className="text-blue-600" size={22} />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-800">{data.location}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Emergency Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Emergency Details</h2>

              {/* Emergency Type */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                <AlertTriangle className="text-red-600" size={22} />
                <div>
                  <p className="text-sm text-gray-500">Emergency Type</p>
                  <p className="font-semibold text-gray-800 capitalize">{data.emergencyType}</p>
                </div>
              </div>

              {/* People Affected */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-50 border border-orange-200">
                <Users className="text-orange-600" size={22} />
                <div>
                  <p className="text-sm text-gray-500">People Affected</p>
                  <p className="font-semibold text-gray-800">{data.peopleAffected} people</p>
                </div>
              </div>

              {/* Description */}
              <div className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <MessageCircle className="text-gray-600 mt-1" size={22} />
                <div>
                  <p className="text-sm text-gray-500">Emergency Description</p>
                  <p className="font-semibold text-gray-800">{data.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <button
              onClick={handleAcceptRequest}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle size={20} />
              Accept & Respond
            </button>
            <button
              onClick={handleDeclineRequest}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <AlertTriangle size={20} />
              Assign Different Case
            </button>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="bg-blue-50 border-t border-blue-200 p-4">
          <div className="text-center">
            <p className="text-blue-800 text-sm font-medium">
              🚨 You are currently assigned to this emergency response. Please act promptly.
            </p>
            <p className="text-blue-600 text-xs mt-1">
              Assigned Volunteer: {assignedVolunteer} • Response ID: #{data.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsePage;