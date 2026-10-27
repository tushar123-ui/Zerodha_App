import React, { useState, useEffect } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/me",
          {},
          { withCredentials: true }
        );
        if (response.data.success) {
          setIsAuthenticated(true);
          setIsLoading(false);
        }
      } catch (error) {
        // Agar token nahi hai, toh seedha bahar phenko
        window.location.href = "http://localhost:5173/login";
      }
    };
    verifyUser();
  }, []);

  // Jab tak verification chal rahi hai, poori screen par sirf loading aayega
  if (isLoading) {
    return (
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
        <h2>Verifying User...</h2>
      </div>
    );
  }

  // Agar user asli hai, tabhi usko andar ka Dashboard dikhega
  return isAuthenticated ? children : null;
};

export default ProtectedRoute;