// src/pages/Contact.jsx
import React, { useState } from "react";
import { Mail, User, MessageCircle, Phone, Send } from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to backend API
    fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((msg) => {
        alert(msg); // Show response from backend
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Left Panel */}
        <div className="hidden md:flex flex-col justify-center items-center w-2/5 bg-gradient-to-b from-blue-800 to-blue-600 text-white p-10">
          <MessageCircle className="w-16 h-16 mb-4 text-blue-200" />
          <h1 className="text-3xl font-bold mb-4">Rescue Operations</h1>
          <p className="text-blue-100 text-center">
            Get in touch with our team. We're here to help you 24/7.
          </p>
          
          {/* Emergency Contact */}
          <div className="mt-8 p-4 bg-blue-700 rounded-lg text-center">
            <Phone className="w-8 h-8 mx-auto mb-2 text-blue-200" />
            <p className="text-blue-100 text-sm">Emergency Hotline</p>
            <p className="text-white font-bold text-xl">9032025629-HELP</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-3/5 px-6 md:px-12 py-8">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-blue-100 mb-3">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mt-2">
              Send us a message and we'll get back to you soon.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name Field */}
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-blue-500" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-blue-500" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3.5 text-blue-500" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>

          {/* Emergency Notice */}
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 text-red-500 mr-2" />
              <p className="text-red-700 text-sm text-center">
                <strong>Emergency Contact:</strong> 9032025629-HELP
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              We typically respond within 24 hours. For urgent matters, please call our emergency hotline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;