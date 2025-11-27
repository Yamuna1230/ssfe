import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertTriangle, Users, Heart, Map, Shield, Phone } from "lucide-react";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message || "");

  // Clear message after 4 seconds (optional)
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#1e3a5f] text-white">
      
      {/* ✅ Login Success Message */}
      {message && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold z-50">
          {message}
        </div>
      )}

      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/vedios/img1.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0d1b2a]/70 to-[#1b263b]/90"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-cyan-300 drop-shadow-md">
            Disaster Relief Network
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200">
            Connecting those in need with volunteers during emergencies and
            natural disasters
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/request-help")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
            >
              <AlertTriangle size={24} />
              Request Emergency Help
            </button>

            <button
              onClick={() => navigate("/volunteer-login")}
              className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-green-400/30"
            >
              <Users size={24} />
              Join as Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-[#102030]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-300">
            How We Help During Disasters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-cyan-400" size={32} />,
                title: "Immediate Response",
                desc: "Rapid connection with nearby volunteers during emergencies",
              },
              {
                icon: <Map className="text-green-400" size={32} />,
                title: "Resource Mapping",
                desc: "Real-time tracking of available resources and needs",
              },
              {
                icon: <Heart className="text-blue-400" size={32} />,
                title: "Community Support",
                desc: "Mobilizing local volunteers to assist those affected",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[#1b2b40]/80 p-6 rounded-xl text-center shadow-lg border border-cyan-500/10 hover:border-cyan-400/40 hover:shadow-cyan-400/20 transition-all duration-300"
              >
                <div className="bg-[#0f1f33]/60 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4 bg-[#0d1b2a] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-300">
            Our Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "5,000+", label: "Volunteers Registered", color: "cyan" },
              { num: "2,500+", label: "Crisis Responses", color: "green" },
              { num: "48", label: "Cities Covered", color: "blue" },
              { num: "24/7", label: "Support Available", color: "white" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 text-${stat.color}-400`}
                >
                  {stat.num}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-[#1b263b] via-[#1e3a5f] to-[#1b263b] text-white border-t border-cyan-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-300">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-10 text-gray-300">
            If you're in immediate danger, please contact emergency services
            first.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 bg-[#0f1f33]/60 text-cyan-300 px-8 py-4 rounded-lg shadow-md border border-cyan-500/30 hover:bg-[#0d1b2a]/80 transition">
              <Phone size={24} />
              <span className="text-lg font-semibold">Call 100</span>
            </div>
            <div className="flex items-center gap-3 bg-[#0f1f33]/60 text-cyan-300 px-8 py-4 rounded-lg shadow-md border border-cyan-500/30 hover:bg-[#0d1b2a]/80 transition">
              <Phone size={24} />
              <span className="text-lg font-semibold">
                Emergency Hotline: 1-800-123-HELP
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
