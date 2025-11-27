// src/pages/About.jsx
import React from "react";
import { 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  MapPin, 
  Phone, 
  Star,
  Award,
  Target
} from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Emergency Response Platform</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting those in need with trained volunteers during emergencies through technology and community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              To create a network of compassionate volunteers ready to assist community members during emergencies, 
              ensuring no one faces crisis alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
              <p className="text-gray-600">
                Connect those in need with nearby volunteers within minutes, not hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Powered</h3>
              <p className="text-gray-600">
                Leverage the power of local communities to provide immediate, relevant assistance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Volunteers</h3>
              <p className="text-gray-600">
                All volunteers are vetted and trained to handle emergency situations appropriately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Request Help</h3>
              <p className="text-gray-600">
                Submit a help request with details about your emergency situation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Alert Volunteers</h3>
              <p className="text-gray-600">
                Nearby trained volunteers are immediately notified of your request.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Assist</h3>
              <p className="text-gray-600">
                Volunteers respond and provide appropriate assistance based on the situation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow-up</h3>
              <p className="text-gray-600">
                We ensure the situation is resolved and provide additional resources if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <p className="text-blue-200">Trained Volunteers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <p className="text-blue-200">Assistance Requests</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">94%</div>
              <p className="text-blue-200">Response Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Heart className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Compassion</h3>
              </div>
              <p className="text-gray-600">
                We approach every situation with empathy and understanding, recognizing that emergencies are stressful and traumatic experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <Clock className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Responsiveness</h3>
              </div>
              <p className="text-gray-600">
                Time is critical in emergencies. We've built our platform to facilitate the fastest possible connection between those in need and helpers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Shield className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Safety</h3>
              </div>
              <p className="text-gray-600">
                The wellbeing of both requesters and volunteers is our top priority. All volunteers undergo background checks and emergency response training.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Community</h3>
              </div>
              <p className="text-gray-600">
                We believe that strong communities are the best resource in times of crisis, and we're building technology to strengthen those bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Mission</h2>
          <p className="text-gray-600 text-lg mb-8">
            Whether you want to request help, become a volunteer, or support our mission, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Request Assistance
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-semibold py-3 px-6 rounded-lg transition">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;