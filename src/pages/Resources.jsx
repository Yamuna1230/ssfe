// src/pages/Resources.jsx
import React from "react";
import { BookOpen, Video, Download, Shield, FirstAid, Home, Phone, Clock } from "lucide-react";

function Resources() {
  const resources = [
    {
      category: "Emergency Guides",
      items: [
        {
          title: "Emergency Preparedness Checklist",
          type: "PDF Guide",
          icon: Shield,
          description: "Complete checklist for emergency preparedness",
          downloads: 1247
        },
        {
          title: "First Aid Manual",
          type: "PDF Guide",
          icon: FirstAid,
          description: "Comprehensive first aid procedures",
          downloads: 892
        },
        {
          title: "Evacuation Planning Guide",
          type: "PDF Guide",
          icon: Home,
          description: "Step-by-step evacuation planning",
          downloads: 567
        }
      ]
    },
    {
      category: "Training Materials",
      items: [
        {
          title: "Disaster Response Training",
          type: "Video Series",
          icon: Video,
          description: "10-part video training series",
          downloads: 345
        },
        {
          title: "Volunteer Handbook",
          type: "PDF Guide",
          icon: BookOpen,
          description: "Complete volunteer training manual",
          downloads: 678
        },
        {
          title: "Emergency Communication Protocols",
          type: "PDF Guide",
          icon: Phone,
          description: "Communication guidelines during emergencies",
          downloads: 432
        }
      ]
    },
    {
      category: "Quick References",
      items: [
        {
          title: "Emergency Contact Cards",
          type: "Printable",
          icon: Phone,
          description: "Printable emergency contact information",
          downloads: 789
        },
        {
          title: "Disaster Timeline Checklist",
          type: "PDF Guide",
          icon: Clock,
          description: "Timeline for disaster response actions",
          downloads: 234
        },
        {
          title: "Shelter Setup Guide",
          type: "PDF Guide",
          icon: Home,
          description: "Emergency shelter setup procedures",
          downloads: 156
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-red-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Emergency Resources</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Access essential guides, training materials, and reference documents for disaster preparedness and response
          </p>
        </div>

        {/* Resources by Category */}
        <div className="space-y-8">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{category.category}</h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((resource, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <resource.icon className="text-blue-600" size={24} />
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-gray-800 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{resource.downloads} downloads</span>
                        <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition">
                          <Download size={14} />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Information Section */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-red-600" size={24} />
            <h3 className="text-xl font-semibold text-red-800">Emergency Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-red-700">
            <div>
              <strong>Immediate Emergency Contacts:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Police/Fire/Medical: 100</li>
                <li>• Disaster Hotline:112</li>
                <li>• Poison Control: 1800-425-1213</li>
              </ul>
            </div>
            <div>
              <strong>Important Reminders:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Keep emergency kits updated</li>
                <li>• Have evacuation routes planned</li>
                <li>• Maintain communication devices charged</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;