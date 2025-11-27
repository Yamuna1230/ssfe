import React, { useState, useEffect } from "react";
import {
  Users,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  Filter,
  Search,
} from "lucide-react";

function VolunteerDashboard() {
  // --- Default sample data (demo) ---
  const defaultVolunteers = [
    {
      id: 1,
      name: "Keerthi",
      age: 40,
      email: "keerthi123@abhi.com",
      phone: "76642156780",
      location: "Vijayawada",
      skills: ["First Aid", "CPR", "Crisis Counseling"],
      status: "Available",
      joined: "2023-05-15",
      responses: 24,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Ajay",
      age: 28,
      email: "ajay@google.com",
      phone: "987778123",
      location: "Guntur",
      skills: ["Emergency Response", "Search & Rescue", "Translation"],
      status: "On Assignment",
      joined: "2023-02-10",
      responses: 42,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Vikram",
      age: 45,
      email: "vikram@yahoo.com",
      phone: "6555789078",
      location: "Nellore",
      skills: ["Medical", "Psychological First Aid", "Logistics"],
      status: "Available",
      joined: "2023-01-05",
      responses: 67,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Abhi",
      age: 29,
      email: "abhi@google.com",
      phone: "9991917728",
      location: "Ponnur",
      skills: ["Fire Safety", "Crowd Management", "Communication"],
      status: "Offline",
      joined: "2023-03-22",
      responses: 18,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Raju",
      age: 36,
      email: "raju@example.com",
      phone: "98222118672",
      location: "Kurnool",
      skills: ["Child Care", "Elderly Assistance", "Nutrition"],
      status: "Available",
      joined: "2023-04-18",
      responses: 31,
      rating: 4.9,
    },
    {
      id: 6,
      name: "Lakshmi",
      age: 41,
      email: "lakshmi@yahoo.com",
      phone: "888821999",
      location: "Hyderabad",
      skills: ["IT Support", "Coordination", "Transportation"],
      status: "Available",
      joined: "2023-06-30",
      responses: 12,
      rating: 4.5,
    },
  ];

  const [volunteers, setVolunteers] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // --- Load volunteers from localStorage + merge with default data ---
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("volunteers")) || [];
    const combined = [...defaultVolunteers];

    stored.forEach((v) => {
      if (!combined.some((d) => d.email === v.email)) {
        combined.push({
          ...v,
          id: combined.length + 1,
          name: v.fullName || v.name || "Unnamed",
          status: v.status || "Available",
          rating: v.rating || 4.5,
          responses: v.responses || 0,
          joined: v.joined || new Date().toISOString().split("T")[0],
          age: v.age || 30, // Add default age
        });
      }
    });

    setVolunteers(combined);
  }, []);

  // --- Apply filters and sorting ---
  useEffect(() => {
    let result = [...volunteers];

    if (searchTerm) {
      result = result.filter(
        (v) =>
          (v.name && v.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (v.location && v.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (Array.isArray(v.skills) 
            ? v.skills.some((skill) =>
                skill.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : (v.skills && v.skills.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    if (statusFilter !== "All") {
      result = result.filter((v) => v.status === statusFilter);
    }

    result.sort((a, b) => {
      if (sortBy === "name") return (a?.name || "").localeCompare(b?.name || "");
      if (sortBy === "age") return (a.age || 0) - (b.age || 0);
      if (sortBy === "joined")
        return new Date(a.joined) - new Date(b.joined);
      if (sortBy === "responses") return (b.responses || 0) - (a.responses || 0);
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

    setFilteredVolunteers(result);
  }, [volunteers, searchTerm, statusFilter, sortBy]);

  const statusColors = {
    Available: "bg-green-100 text-green-800",
    "On Assignment": "bg-blue-100 text-blue-800",
    Offline: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="min-h-screen bg-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Volunteer Management
          </h1>
          <p className="text-gray-600">
            View and manage all registered volunteers in the system
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Volunteers</p>
                <p className="text-2xl font-bold">{volunteers.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Shield className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Available Now</p>
                <p className="text-2xl font-bold">
                  {volunteers.filter((v) => v.status === "Available").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center">
              <div className="bg-amber-100 p-3 rounded-lg mr-4">
                <Star className="text-amber-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Avg. Rating</p>
                <p className="text-2xl font-bold">
                  {(
                    volunteers.reduce((acc, v) => acc + (v.rating || 0), 0) /
                    (volunteers.length || 1)
                  ).toFixed(1)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Clock className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Responses</p>
                <p className="text-2xl font-bold">
                  {volunteers.reduce((acc, v) => acc + (v.responses || 0), 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search volunteers by name, location, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex items-center">
                <Filter className="text-gray-400 mr-2" size={18} />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="Available">Available</option>
                  <option value="On Assignment">On Assignment</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="name">Sort by Name</option>
                <option value="age">Sort by Age</option>
                <option value="joined">Sort by Join Date</option>
                <option value="responses">Sort by Responses</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Volunteer
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Age
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Contact
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Location
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Skills
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredVolunteers.map((volunteer) => (
                  <tr key={volunteer.id} className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center font-semibold mr-3">
                          {(volunteer.name?.[0] || "?").toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {volunteer.name || "Unnamed"}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Star
                              className="text-amber-400 mr-1"
                              size={14}
                              fill="currentColor"
                            />
                            <span>{volunteer.rating}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Calendar className="text-gray-400 mr-2" size={16} />
                        <span>{volunteer.age} years</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <Mail className="text-gray-400 mr-2" size={14} />
                          <span className="text-sm">{volunteer.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="text-gray-400 mr-2" size={14} />
                          <span className="text-sm">{volunteer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <MapPin className="text-gray-400 mr-2" size={14} />
                        <span>{volunteer.location}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {Array.isArray(volunteer.skills) ? (
                          // If skills is an array (demo data)
                          volunteer.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))
                        ) : (
                          // If skills is a string (database data)
                          <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                            {volunteer.skills || "No skills listed"}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          statusColors[volunteer.status] || "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {volunteer.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-500">
                        <p>{volunteer.responses} responses</p>
                        <p>
                          Joined{" "}
                          {new Date(volunteer.joined).toLocaleDateString()}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredVolunteers.length === 0 && (
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No volunteers found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VolunteerDashboard;