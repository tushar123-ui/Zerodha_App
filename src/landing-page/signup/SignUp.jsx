import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // Har field ke error ko alag track karne ke liye object banaya
  const [errors, setErrors] = useState({}); 
  const [globalError, setGlobalError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    setGlobalError(""); 

    // Frontend Validations
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

    // Agar koi error hai, toh form aage submit nahi hoga
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup", 
        { email, username, password },
        { withCredentials: true } 
      );

      if (response.data.success) {
        window.location.href = "http://localhost:5174"; 
      }
    } catch (err) {
      setGlobalError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="mb-4">SignUp</h2>
          
          {/* Backend se aane wala global error yahan dikhega (Jaise: User already exists) */}
          {globalError && <div className="alert alert-danger p-2">{globalError}</div>}
          
          <form onSubmit={handleSignup} noValidate>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input 
                type="email" 
                // Agar email error hai toh 'is-invalid' class input box ko red kar degi
                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" }); // Type karte hi error hat jayega
                }}
              />
              {/* Box ke theek niche error message */}
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

            <button type="submit" className="btn btn-primary w-100 mb-4" style={{ backgroundColor: "#387ed1", border: "none" }}>
              Create Account
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