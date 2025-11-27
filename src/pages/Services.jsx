// src/pages/Services.jsx
import React from "react";
import { 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  MapPin, 
  Phone,
  Ambulance,
  Home,
  Car,
  AlertTriangle,
  FirstAid,
  Wifi,
  MessageCircle
} from "lucide-react";

function Services() {
  const emergencyServices = [
    {
      icon: <Ambulance className="text-red-600" size={28} />,
      title: "Medical Emergency Response",
      description: "Immediate assistance for medical emergencies including first aid, CPR, and transportation to medical facilities.",
      features: ["First aid support", "Emergency medical transport", "Medication assistance"]
    },
    {
      icon: <Home className="text-blue-600" size={28} />,
      title: "Natural Disaster Support",
      description: "Help during and after natural disasters like floods, earthquakes, hurricanes, and wildfires.",
      features: ["Evacuation assistance", "Shelter coordination", "Supply distribution"]
    },
    {
      icon: <Car className="text-green-600" size={28} />,
      title: "Stranded Transportation",
      description: "Assistance when you're stranded due to vehicle breakdown, lack of transportation, or other issues.",
      features: ["Vehicle troubleshooting", "Transportation alternatives", "Ride coordination"]
    },
    {
      icon: <Shield className="text-purple-600" size={28} />,
      title: "Safety Escort Services",
      description: "Safe accompaniment for vulnerable individuals in potentially dangerous situations.",
      features: ["Walking companions", "Virtual check-ins", "Safety planning"]
    }
  ];

  const nonEmergencyServices = [
    {
      icon: <Wifi className="text-indigo-600" size={28} />,
      title: "Resource Connection",
      description: "Connecting individuals with essential resources like food, shelter, and social services.",
      features: ["Resource database", "Appointment scheduling", "Follow-up support"]
    },
    {
      icon: <MessageCircle className="text-teal-600" size={28} />,
      title: "Crisis Counseling",
      description: "Emotional support and guidance during difficult times from trained volunteers.",
      features: ["Active listening", "Coping strategies", "Professional referrals"]
    },
    {
      icon: <Heart className="text-pink-600" size={28} />,
      title: "Elderly Assistance",
      description: "Specialized support for senior citizens including wellness checks and daily task help.",
      features: ["Wellness checks", "Medication reminders", "Grocery assistance"]
    },
    {
      icon: <Users className="text-orange-600" size={28} />,
      title: "Community Training",
      description: "Educational programs to prepare community members for emergency situations.",
      features: ["CPR/First Aid classes", "Disaster preparedness", "Response training"]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">

      <section className="py-12 px-4 bg-white mt-24">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Our Services
    </h1>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
      Comprehensive emergency and community support services designed to keep you safe and connected.
    </p>
  </div>
</section>


      {/* Emergency Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="text-red-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Emergency Response Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Immediate assistance when you need it most. Our network of trained volunteers is ready to respond 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg bg-gray-100 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Request Help */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How to Request Assistance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-700">{num}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {["Submit Request", "Get Matched", "Receive Help", "Follow-up"][idx]}
                </h3>
                <p className="text-gray-600 text-sm">
                  {[
                    "Fill out our emergency form with details about your situation.",
                    "Our system matches you with the most appropriate volunteers.",
                    "Volunteers provide assistance based on your specific needs.",
                    "We ensure your situation is resolved and offer additional resources."
                  ][idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Emergency Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
              <Heart className="text-green-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Community Support Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Beyond emergencies, we offer ongoing support to strengthen community resilience and wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nonEmergencyServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg bg-gray-100 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Stats */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Volunteers Make It Possible</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every service is provided by trained community volunteers who are ready to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <p className="text-blue-200">Trained Volunteers</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-200">Availability</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">30min</div>
              <p className="text-blue-200">Average Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Assistance or Want to Help?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Whether you need support or want to join our network of volunteers, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
              <AlertTriangle size={20} />
              Request Emergency Help
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
              <Users size={20} />
              Become a Volunteer
            </button>
          </div>
          <p className="mt-8 text-gray-500">
            For immediate life-threatening emergencies, always call 100 first.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Services;
