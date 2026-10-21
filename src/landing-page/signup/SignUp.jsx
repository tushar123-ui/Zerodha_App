import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios import kiya

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // refresh UI and center me aa jayega

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      // Backend ke /auth/signup route par data bhej rahe hain
      const response = await axios.post(
        "http://localhost:8080/auth/signup", 
        {
          email: email,
          username: username,
          password: password
        },
        { withCredentials: true } // Yeh line security Cookie set karne ke liye sabse zaroori hai!
      );

      // Agar backend ne success bheja
      if (response.data.success) {
        alert("Account created successfully!");
        // User ko seedha Dashboard (Port 5174) par redirect kar do
        window.location.href = "http://localhost:5174"; 
      }
    } catch (error) {
      // Agar koi error aaya (jaise email already exists)
      const errorMsg = error.response?.data?.message || "Something went wrong";
      alert("Signup Failed: " + errorMsg);
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="mb-4">SignUp</h2>
          
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input 
                type="text" 
                className="form-control" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-4" style={{ backgroundColor: "#387ed1", border: "none" }}>
              Create Account
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;