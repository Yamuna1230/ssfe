// src/pages/Reports.jsx
import React, { useState } from "react";
import { FileText, Download, Calendar, MapPin, Filter, Search, Users, AlertTriangle, Clock } from "lucide-react";

function Reports() {
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [downloading, setDownloading] = useState(null);

  const reports = [
    {
      id: 1,
      title: "Krishna River Flood Response Report",
      type: "flood",
      date: "2024-01-15",
      location: "Vijayawada",
      status: "completed",
      downloads: 142,
      volunteers: 45,
      severity: "High",
      duration: "3 days",
      description: "Comprehensive report on flood response operations in Krishna river basin affecting Vijayawada and surrounding areas."
    },
    {
      id: 2,
      title: "Coastal Area Cyclone Assessment",
      type: "cyclone",
      date: "2024-01-10",
      location: "Kakinada",
      status: "ongoing",
      downloads: 89,
      volunteers: 23,
      severity: "Critical",
      duration: "5 days",
      description: "Damage assessment and relief operations for cyclone-affected coastal regions of East Godavari district."
    },
    {
      id: 3,
      title: "Rayalaseema Drought Situation Report",
      type: "drought",
      date: "2024-01-05",
      location: "Anantapur",
      status: "completed",
      downloads: 203,
      volunteers: 67,
      severity: "Medium",
      duration: "7 days",
      description: "Analysis of drought conditions and water scarcity relief efforts in Rayalaseema region."
    },
    {
      id: 4,
      title: "Visakhapatnam Industrial Area Fire Incident",
      type: "fire",
      date: "2024-01-01",
      location: "Visakhapatnam",
      status: "published",
      downloads: 317,
      volunteers: 12,
      severity: "High",
      duration: "1 day",
      description: "Emergency response report for major fire incident in industrial zone, Visakhapatnam."
    },
    {
      id: 5,
      title: "Guntur Medical Emergency Response",
      type: "medical",
      date: "2023-12-28",
      location: "Guntur",
      status: "completed",
      downloads: 76,
      volunteers: 34,
      severity: "Medium",
      duration: "2 days",
      description: "Coordination report for medical emergency response team deployment in Guntur district."
    },
    {
      id: 6,
      title: "Tirupati Pilgrim Management Report",
      type: "crowd",
      date: "2023-12-25",
      location: "Tirupati",
      status: "published",
      downloads: 154,
      volunteers: 18,
      severity: "Low",
      duration: "1 day",
      description: "Crowd management and emergency services report for major pilgrimage event."
    }
  ];

  const filteredReports = reports.filter(report => {
    const matchesType = selectedType === "all" || report.type === selectedType;
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         report.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "ongoing": return "bg-blue-100 text-blue-800";
      case "published": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical": return "text-red-600";
      case "High": return "text-orange-600";
      case "Medium": return "text-yellow-600";
      case "Low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  const downloadReport = async (report) => {
    setDownloading(report.id);
    
    // Simulate download delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create a detailed text content for the report
    const reportContent = `
ANDHRA PRADESH DISASTER RESPONSE SYSTEM
=======================================

REPORT DETAILS
--------------
Title: ${report.title}
Location: ${report.location}
Report Date: ${report.date}
Status: ${report.status.toUpperCase()}
Severity Level: ${report.severity}
Operation Duration: ${report.duration}
Volunteers Deployed: ${report.volunteers}
Total Downloads: ${report.downloads + 1}

EXECUTIVE SUMMARY
-----------------
${report.description}

RESPONSE METRICS
----------------
- Emergency Level: ${report.severity}
- Response Time: Immediate
- Volunteers Mobilized: ${report.volunteers} trained personnel
- Duration of Operations: ${report.duration}
- Areas Covered: ${report.location} and surrounding regions

KEY ACHIEVEMENTS
----------------
1. Successful deployment of emergency response teams
2. Efficient coordination with local authorities
3. Timely evacuation and relief operations
4. Medical assistance provided to affected individuals
5. Restoration of essential services

RECOMMENDATIONS
---------------
1. Enhance early warning systems in ${report.location}
2. Increase volunteer training programs
3. Improve emergency supply chain management
4. Strengthen community awareness programs

CONTACT INFORMATION
-------------------
AP Emergency Control Room: 1077
District Emergency Officer: 0866-XXXXXX
Volunteer Coordination: volunteer@aprescue.gov.in

---
Generated by Andhra Pradesh Rescue Operations
Report Generated on: ${new Date().toLocaleDateString()}
This is an official disaster response document.
    `.trim();

    // Create and download as text file (more reliable than fake PDF)
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AP_Report_${report.title.replace(/\s+/g, '_')}_${report.date}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Update download count
    report.downloads += 1;
    setDownloading(null);
    
    // Show success message with file info
    alert(`✅ Report downloaded successfully!\n\nFile: AP_Report_${report.title.replace(/\s+/g, '_')}_${report.date}.txt\n\nThe report contains detailed information about the disaster response operations.`);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "flood": return "🌊";
      case "cyclone": return "🌀";
      case "drought": return "☀️";
      case "fire": return "🔥";
      case "medical": return "🏥";
      case "crowd": return "👥";
      case "environmental": return "🌿";
      case "heatwave": return "🌡️";
      case "infrastructure": return "🏗️";
      default: return "📄";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Left Panel */}
          <div className="hidden lg:flex flex-col justify-center items-center w-1/3 bg-gradient-to-b from-blue-800 to-blue-600 text-white p-8">
            <FileText className="w-16 h-16 mb-4 text-blue-200" />
            <h1 className="text-3xl font-bold mb-4 text-center">AP Disaster Reports</h1>
            <p className="text-blue-100 text-center mb-6">
              Comprehensive disaster response reports from across Andhra Pradesh
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full mb-6">
              <div className="bg-blue-700 rounded-lg p-3 text-center">
                <Users className="w-6 h-6 mx-auto mb-1 text-blue-200" />
                <p className="text-xs text-blue-100">Total Volunteers</p>
                <p className="text-lg font-bold text-white">
                  {reports.reduce((sum, report) => sum + report.volunteers, 0)}
                </p>
              </div>
              <div className="bg-blue-700 rounded-lg p-3 text-center">
                <AlertTriangle className="w-6 h-6 mx-auto mb-1 text-blue-200" />
                <p className="text-xs text-blue-100">Active Reports</p>
                <p className="text-lg font-bold text-white">
                  {reports.filter(r => r.status === 'ongoing').length}
                </p>
              </div>
            </div>

            <div className="bg-yellow-600 rounded-lg p-4 text-center w-full">
              <Clock className="w-6 h-6 mx-auto mb-2 text-yellow-200" />
              <p className="text-sm text-yellow-100">Emergency Hotline</p>
              <p className="text-xl font-bold text-white">1077</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-2/3 p-6 lg:p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block p-3 rounded-full bg-blue-100 mb-3">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Andhra Pradesh Disaster Reports</h2>
              <p className="text-gray-600 mt-2">
                Official disaster response documentation and analysis
              </p>
            </div>

            {/* Filters and Search */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Filter size={20} className="text-blue-600" />
                    <span className="font-semibold text-gray-700">Filter:</span>
                  </div>
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="all">All Disaster Types</option>
                    <option value="flood">Flood</option>
                    <option value="cyclone">Cyclone</option>
                    <option value="drought">Drought</option>
                    <option value="fire">Fire</option>
                    <option value="medical">Medical</option>
                    <option value="crowd">Crowd Management</option>
                  </select>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search reports by location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-64"
                  />
                </div>
              </div>
            </div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
              {filteredReports.map((report) => (
                <div key={report.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                        <span className={`text-sm font-medium ${getSeverityColor(report.severity)}`}>
                          {report.severity}
                        </span>
                      </div>
                      <div className="text-2xl">
                        {getTypeIcon(report.type)}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-gray-800 mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} className="text-blue-500" />
                        <span className="font-medium">{report.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} className="text-blue-500" />
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{report.volunteers} volunteers</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{report.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{report.downloads} downloads</span>
                      <button 
                        onClick={() => downloadReport(report)}
                        disabled={downloading === report.id}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        {downloading === report.id ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download size={16} />
                            Download Report
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredReports.length === 0 && (
              <div className="text-center py-12">
                <FileText size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No reports found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;