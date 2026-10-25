import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    setGlobalError("");

    // Frontend Validations
    if (!email) {
      validationErrors.email = "Email is required!";
    }
    if (!password) {
      validationErrors.password = "Password is required!";
    }
    
    setErrors(validationErrors);

    // Agar koi error hai, toh form aage submit nahi hoga
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.data.success) {
        window.location.href = "http://localhost:5174"; // Dashboard par redirect
      }
    } catch (err) {
      setGlobalError(err.response?.data?.message || "Invalid Email or Password");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="mb-4">Login</h2>
          
          {globalError && <div className="alert alert-danger p-2">{globalError}</div>}
          
          <form onSubmit={handleLogin} noValidate>
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

            <button type="submit" className="btn btn-primary w-100 mb-3" style={{ backgroundColor: "#387ed1", border: "none" }}>
              Login
            </button>

            {/* Signup page par jane ka link */}
            <div className="text-center text-muted mt-3">
              Don't have an account? <Link to="/signup" style={{ textDecoration: "none" }}>Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;