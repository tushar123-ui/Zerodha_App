import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import DeleteAccount from "./DeleteAccount";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userData, setUserData] = useState({ username: "User", email: "hello@zerodha.com" });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const location = useLocation();
  
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

  const handleUpdateUsername = async () => {
    try {
      const response = await axios.put(`${API_URL}/auth/update-username`, { newUsername }, { withCredentials: true });
      if (response.data.success) {
        setUserData({ ...userData, username: response.data.username });
        setIsEditing(false);
        window.dispatchEvent(new CustomEvent("usernameChanged", { detail: response.data.username }));
      }
    } catch (error) {
      alert("Error updating username");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(`${API_URL}/auth/me`, {}, { withCredentials: true });
        if (response.data.success) {
          setUserData({ username: response.data.username, email: response.data.email });
        }
      } catch (error) {
        console.error("User verification failed");
      }
    };
    fetchUser();
  }, []);

  const avatarText = userData.username.substring(0, 2).toUpperCase();
  const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = async() => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
      localStorage.clear();
      window.location.href = `${FRONTEND_URL}/login`;
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const dropdownItemStyle = {
    width: "100%", textAlign: "left", padding: "8px 20px", margin: "0px",
    fontSize: "14px", cursor: "pointer", color: "#444", boxSizing: "border-box",
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white w-100 px-3 py-2">
      <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
        
        {/* MOBILE VIEW: Bootstrap Hamburger (Left) */}
        <button className="navbar-toggler border-0 px-0 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#zerodhaMenu" aria-controls="zerodhaMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* DESKTOP VIEW: Logo (Hidden on Mobile) */}
        <div className="navbar-brand d-none d-md-block m-0 p-0">
           <img src="logo.png" style={{ width: "37px" }} alt="logo" />
        </div>

        {/* MOBILE VIEW: User Avatar (Right) */}
        <div className="d-flex align-items-center gap-2 d-md-none position-relative" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
            <div className="avatar" style={{ width: "30px", height:"30px", background: "rgb(252, 229, 252)", color: "rgb(221, 139, 221)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>{avatarText}</div>
            <p className="username mb-0 text-muted" style={{ fontSize: "12px" }}>USERID</p>
        </div>

        {/* COLLAPSIBLE MENU ITEMS */}
        <div className="collapse navbar-collapse justify-content-end" id="zerodhaMenu">
          <ul className="navbar-nav align-items-md-center gap-3 gap-md-4 mt-3 mt-md-0 mb-0">
            <li className="nav-item"><Link className="nav-link p-0" to="/"><p className={`mb-0 ${location.pathname === "/" ? activeMenuClass : menuClass}`}>Dashboard</p></Link></li>
            <li className="nav-item"><Link className="nav-link p-0" to="/orders"><p className={`mb-0 ${location.pathname === "/orders" ? activeMenuClass : menuClass}`}>Orders</p></Link></li>
            <li className="nav-item"><Link className="nav-link p-0" to="/holdings"><p className={`mb-0 ${location.pathname === "/holdings" ? activeMenuClass : menuClass}`}>Holdings</p></Link></li>
            <li className="nav-item"><Link className="nav-link p-0" to="/positions"><p className={`mb-0 ${location.pathname === "/positions" ? activeMenuClass : menuClass}`}>Positions</p></Link></li>
            <li className="nav-item"><Link className="nav-link p-0" to="/funds"><p className={`mb-0 ${location.pathname === "/funds" ? activeMenuClass : menuClass}`}>Funds</p></Link></li>
            <li className="nav-item"><Link className="nav-link p-0" to="/apps"><p className={`mb-0 ${location.pathname === "/apps" ? activeMenuClass : menuClass}`}>Apps</p></Link></li>
          </ul>

          {/* DESKTOP VIEW: Profile Avatar & Dropdown */}
          <div className="d-none d-md-block position-relative ms-4">
            <div className="profile d-flex align-items-center gap-2" onClick={handleProfileClick} style={{ cursor: "pointer", marginLeft: "0" }}>
              <div className="avatar" style={{ width: "30px", height:"30px", background: "rgb(252, 229, 252)", color: "rgb(221, 139, 221)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>{avatarText}</div>
              <p className="username mb-0 text-muted" style={{ fontSize: "12px" }}>USERID</p>
            </div>
          </div>
        </div>

        {/* SHARED PROFILE DROPDOWN MENU */}
        {isProfileDropdownOpen && (
          <div className="profile-dropdown position-absolute" style={{ top: "100%", right: "10px", width: "230px", backgroundColor: "#ffffff", border: "1px solid #e0e0e0", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", borderRadius: "4px", zIndex: 9999 }}>
            <div style={{ padding: "15px 20px", textAlign: "left" }}>
              <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: "#444" }}>{userData.username}</h4>
              <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#9b9b9b" }}>{userData.email}</p>
            </div>
            <div style={{ height: "1px", backgroundColor: "#eee", margin: "0" }}></div>
            <div style={{ display: "flex", flexDirection: "column", padding: "5px 0", margin: "0" }}>
              <div style={dropdownItemStyle}><i className="fa fa-user"></i> My profile</div>
              <div style={dropdownItemStyle} onClick={() => { setNewUsername(userData.username); setIsEditing(true); setIsProfileDropdownOpen(false); }}><i className="fa fa-pencil"></i> Edit Username</div>
              <div style={dropdownItemStyle} onClick={() => { setIsDeletePopupOpen(true); setIsProfileDropdownOpen(false); }}><i className="fa fa-trash"></i> Delete Account</div>
              <div style={{ height: "1px", backgroundColor: "#eee", margin: "5px 0" }}></div>
              <div onClick={handleLogout} style={{ ...dropdownItemStyle, color: "#d13838" }}>Logout</div>
            </div>
          </div>
        )}

      </div>

      {/* Edit Username Popup */}
      {isEditing && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 10000, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "8px", width: "300px" }}>
            <h3 style={{ margin: 0, marginBottom: "15px" }}>Edit Username</h3>
            <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "15px" }} />
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-light border" onClick={() => setIsEditing(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleUpdateUsername}>Save</button>
            </div>
          </div>
        </div>
      )}
      <DeleteAccount isOpen={isDeletePopupOpen} onClose={() => setIsDeletePopupOpen(false)} />
    </nav>
  );
};

export default Menu;