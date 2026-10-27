import React from "react";
import axios from "axios";

const DeleteAccount = ({ isOpen, onClose }) => {
  // Agar popup open nahi karna hai, toh kuch bhi render mat karo
  if (!isOpen) return null;

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:8080/auth/delete-account",
        { withCredentials: true }
      );
      
      if (response.data.success) {
        window.location.href = "http://localhost:5173/signup";
      }
    } catch (error) {
      alert("Error deleting account");
      console.error(error);
    }
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 10000,
      display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{
        background: "white", padding: "20px 25px", borderRadius: "8px", 
        width: "320px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
      }}>
        <h3 style={{ marginTop: 0, color: "#d13838", fontSize: "18px", display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Warning!
        </h3>
        
        <p style={{ color: "#444", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
          Are you sure you want to permanently delete your account? This action cannot be undone and you will lose all your data.
        </p>
        
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button 
            onClick={onClose} 
            style={{ padding: "8px 15px", background: "#f5f5f5", color: "#444", border: "1px solid #ccc", cursor: "pointer", borderRadius: "4px" }}
          >
            Cancel
          </button>
          
          <button 
            onClick={handleConfirmDelete} 
            style={{ padding: "8px 15px", background: "#d13838", color: "white", border: "none", cursor: "pointer", borderRadius: "4px", fontWeight: "bold" }}
          >
            Destroy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;