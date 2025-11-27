import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Save dynamic user data on login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    // ✅ Add this: also update the volunteer list (if you have one in localStorage)
    const volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];
    const exists = volunteers.some(v => v.email === userData.email);
    if (!exists) {
      volunteers.push(userData);
      localStorage.setItem("volunteers", JSON.stringify(volunteers));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
