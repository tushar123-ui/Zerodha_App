import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userData, setUserData] = useState({ username: "User", email: "hello@zerodha.com" });

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

  const handleLogout = () => {
    window.location.href = "http://localhost:5173/login";
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
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
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
                right: "-10px",
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
                <div style={dropdownItemStyle}><i class="fa fa-pencil" aria-hidden="true"></i> Edit Username</div>
                <div style={dropdownItemStyle}><i class="fa fa-trash" aria-hidden="true"></i> Delete Account</div>
                
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
    </div>
  );
};

export default Menu;