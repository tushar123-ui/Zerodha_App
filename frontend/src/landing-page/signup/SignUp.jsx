import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im"; // Loader Icon import kiya

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [errors, setErrors] = useState({}); 
  const [globalError, setGlobalError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state add kiya

  const API_URL = import.meta.env.VITE_API_URL;
  const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    setGlobalError(""); 

    if (!email) {
      validationErrors.email = "Email is required!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Please enter a valid email address!";
    }

    if (!username) {
      validationErrors.username = "Username is required!";
    }

    if (!password) {
      validationErrors.password = "Password is required!";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long!";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    
    try {
      setIsLoading(true); // API call se pehle loader on
      const response = await axios.post(
        `${API_URL}/auth/signup`, 
        { email, username, password },
        { withCredentials: true } 
      );

      if (response.data.success) {
        window.location.href = DASHBOARD_URL; 
      }
    } catch (err) {
      setIsLoading(false); // Error aane par loader off
      setGlobalError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mt-5 mb-5 px-3">
      {/* CSS add kiya spinner ke liye */}
      <style>
        {`
          .spin-animation {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <h2 className="mb-4">SignUp</h2>
          
          {globalError && <div className="alert alert-danger p-2">{globalError}</div>}
          
          <form onSubmit={handleSignup} noValidate>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input 
                type="email" 
                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });
                }}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input 
                type="text" 
                className={`form-control ${errors.username ? 'is-invalid' : ''}`} 
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setErrors({ ...errors, username: "" });
                }}
              />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: "" });
                }}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            {/* Yahan naya button lagaya hai */}
            <button type="submit" className="btn btn-primary w-100 mb-4" disabled={isLoading} style={{ backgroundColor: "#387ed1", border: "none" }}>
              {isLoading ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <ImSpinner2 className="spin-animation" /> Creating Account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>

            <div className="text-center text-muted mt-3">
              Already have an account? <Link to="/login" style={{ textDecoration: "none" }}>Login</Link>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;