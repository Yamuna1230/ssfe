import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

function VolunteerAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    skills: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const err = {};
    if (!isLogin && !formData.fullName) err.fullName = "Name is required";
    if (!formData.email) err.email = "Email is required";
    if (!formData.password) err.password = "Password required";
    if (!isLogin && formData.password !== formData.confirmPassword)
      err.confirmPassword = "Passwords do not match";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const err = validateForm();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      setIsLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // LOGIN API CALL
        const loginData = {
          email: formData.email,
          password: formData.password
        };

        console.log("Login API call:", loginData);

        const res = await fetch("http://localhost:8080/api/volunteer/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        });

        const responseData = await res.json();
        console.log("Login response:", responseData);

        if (!res.ok) {
          throw new Error(responseData.error || responseData.message || "Login failed");
        }

        // Login successful - store user data and redirect to ResponsePage
        const userData = {
          ...responseData,
          isLoggedIn: true,
          loginTime: new Date().toISOString()
        };
        
        login(userData);
        navigate("/volunteer-dashboard");

      } else {
        // SIGNUP API CALL
        const signupData = {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          skills: formData.skills,
          location: formData.location
        };

        console.log("Signup API call:", signupData);

        const res = await fetch("http://localhost:8080/api/volunteer/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signupData),
        });

        const responseData = await res.json();
        console.log("Signup response:", responseData);

        if (!res.ok) {
          throw new Error(responseData.error || responseData.message || "Signup failed");
        }

        // Signup successful - show success message and clear form
        setSignupSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          skills: "",
          location: "",
        });
      }

    } catch (error) {
      console.error("Submission error:", error);
      alert(error.message || "Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  const handleSwitchToLogin = () => {
    setSignupSuccess(false);
    setIsLogin(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 p-4">
      <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Left Panel */}
        <div className="hidden md:flex flex-col justify-center items-center w-2/5 bg-gradient-to-b from-blue-800 to-blue-600 text-white p-10">
          <ShieldCheck className="w-16 h-16 mb-4 text-blue-200" />
          <h1 className="text-3xl font-bold mb-4">Rescue Operations</h1>
          <p className="text-blue-100 text-center">
            Join our network of volunteers helping communities in need.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-3/5 px-6 md:px-12 py-8">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-blue-100 mb-3">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {isLogin ? "Volunteer Login" : "Volunteer Sign Up"}
            </h2>
          </div>

          {/* Success Message after Signup */}
          {signupSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <p className="font-semibold">Signup successful!</p>
              </div>
              <p className="text-sm mt-1">Please login with your credentials.</p>
              <button
                onClick={handleSwitchToLogin}
                className="mt-2 text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
              >
                Continue to Login
              </button>
            </div>
          )}

          {/* Toggle - Hide when signup success is shown */}
          {!signupSuccess && (
            <div className="flex mb-8 bg-blue-50 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-lg transition-colors ${
                  isLogin 
                    ? "bg-blue-600 text-white shadow-md" 
                    : "text-blue-700 hover:bg-blue-100"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-lg transition-colors ${
                  !isLogin 
                    ? "bg-blue-600 text-white shadow-md" 
                    : "text-blue-700 hover:bg-blue-100"
                }`}
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Form - Hide when signup success is shown */}
          {!signupSuccess && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-blue-500" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone + Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Skills */}
                  <input
                    type="text"
                    name="skills"
                    placeholder="Skills (e.g., First Aid, CPR, Rescue Operations)"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </>
              )}

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-blue-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-blue-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password (Signup only) */}
              {!isLogin && (
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 text-blue-500" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-colors ${
                  isLoading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isLoading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default VolunteerAuth;