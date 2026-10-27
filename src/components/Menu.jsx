import React, { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import axios from "axios";
import DeleteAccount from "./DeleteAccount";

const Menu = () => {
  // const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userData, setUserData] = useState({ username: "User", email: "hello@zerodha.com" });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const location = useLocation();
  
  // 1. Edit mode ke liye 2 naye states
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  // 2. Naya naam backend bhejney ka function
  const handleUpdateUsername = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8080/auth/update-username",
        { newUsername },
        { withCredentials: true }
      );
      
      if (response.data.success) {
        // UI me naya naam turant update karna
        setUserData({ ...userData, username: response.data.username });
        setIsEditing(false); // Edit mode band karna

        window.dispatchEvent(new CustomEvent("usernameChanged", { 
          detail: response.data.username
        }));
      }
    } catch (error) {
      alert("Error updating username");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/me",
          {},
          { withCredentials: true } 
        );
        if (response.data.success) {
          setUserData({
            username: response.data.username,
            email: response.data.email
          });
        }
      } catch (error) {
        console.error("User verification failed");
      }
    };
    fetchUser();
  }, []);

  const avatarText = userData.username.substring(0, 2).toUpperCase();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async() => {
    try {
      // 1. Backend ko bolkar cookie (token) delete karwao
      await axios.post(
        "http://localhost:8080/auth/logout",
        {},
        { withCredentials: true }
      );
      
      // 2. LocalStorage me save kiya hua naam bhi hata do taaki cache saaf ho jaye
      localStorage.removeItem("username");
      
      // 3. Ab login page par redirect karo
      window.location.href = "http://localhost:5173/login";
      
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // Naya Div style jo global CSS se interfere nahi karega
  const dropdownItemStyle = {
    width: "100%",
    textAlign: "left",
    padding: "8px 20px", // Top-bottom padding kam kar di gayi hai
    margin: "0px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#444",
    boxSizing: "border-box",
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "37px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={location.pathname === "/" ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={location.pathname === "/orders" ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={location.pathname === "/holdings" ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={location.pathname === "/positions" ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={location.pathname === "/funds" ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={location.pathname === "/apps" ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />

        <div className="profile-section" style={{ position: "relative" }}>
          
          <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
            <div className="avatar">{avatarText}</div>
            <p className="username">USERID</p>
          </div>

          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "55px",
                right: "10px",
                width: "230px",
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
                zIndex: 9999,
                display: "block",
              }}
            >
              <div style={{ padding: "15px 20px", textAlign: "left" }}>
                <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: "#444" }}>{userData.username}</h4>
                <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#9b9b9b" }}>{userData.email}</p>
              </div>

              {/* <hr> ki jagah naya custom divider jisme koi extra margin nahi hai */}
              <div style={{ height: "1px", backgroundColor: "#eee", margin: "0" }}></div>
              
              {/* <ul> ki jagah normal div use kiya hai */}
              <div style={{ display: "flex", flexDirection: "column", padding: "5px 0", margin: "0" }}>
                <div style={dropdownItemStyle}><i class="fa fa-user" aria-hidden="true"></i>  My profile / Settings</div>
                <div style={dropdownItemStyle}><i class="fa fa-dot-circle-o" aria-hidden="true"></i> Console</div>
                <div style={dropdownItemStyle}> <i class="fa fa-circle-o-notch" aria-hidden="true"></i> Coin</div>

                <div style={dropdownItemStyle} 
                    onClick={() => {
                      setNewUsername(userData.username);
                      setIsEditing(true);
                      setIsProfileDropdownOpen(false);
                      }}
                    ><i 
                    class="fa fa-pencil" 
                    aria-hidden="true"></i> Edit Username</div>

                <div 
                style={dropdownItemStyle}
                onClick={() => {
                  setIsDeletePopupOpen(true);
                  setIsProfileDropdownOpen(false); // Menu band kardo
                }}
                >
                  <i class="fa fa-trash" aria-hidden="true"></i> Delete Account
                </div>
                
                {/* Custom Divider before Logout */}
                <div style={{ height: "1px", backgroundColor: "#eee", margin: "5px 0" }}></div>
                
                <div onClick={handleLogout} style={{ ...dropdownItemStyle, color: "#d13838" }}>
                  Logout
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
      {/* PROFESSIONAL EDIT POPUP */}
      {isEditing && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 10000,
          display: "flex", justifyContent: "center", alignItems: "center"
        }}>
          <div style={{
            background: "white", padding: "20px 25px", borderRadius: "8px", 
            width: "300px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
          }}>
            <h3 style={{ marginTop: 0, color: "#444", fontSize: "18px" }}>Edit Username</h3>
            
            <input 
              type="text" 
              value={newUsername} 
              onChange={(e) => setNewUsername(e.target.value)} 
              style={{ 
                width: "100%", padding: "10px", marginBottom: "20px", 
                border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" 
              }}
              autoFocus
            />
            
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button 
                onClick={() => setIsEditing(false)} 
                style={{ padding: "8px 15px", background: "#f5f5f5", color: "#444", border: "1px solid #ccc", cursor: "pointer", borderRadius: "4px" }}
              >
                Cancel
              </button>
              <button 
                onClick={handleUpdateUsername} 
                style={{ padding: "8px 15px", background: "#387ed1", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {/* POPUP END */}

      <DeleteAccount 
        isOpen={isDeletePopupOpen} 
        onClose={() => setIsDeletePopupOpen(false)} 
      />
    </div>
  );
};

export default Menu;