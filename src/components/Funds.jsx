import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Funds = () => {
  const [availableBalance, setAvailableBalance] = useState(0);
  const [usedMargin, setUsedMargin] = useState(0);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); 
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const API_URL = "http://localhost:8080/funds";

  useEffect(() => {
    fetchFunds();
  }, []);

  const fetchFunds = async () => {
    try {
      const res = await axios.get(`${API_URL}/get-funds`, { withCredentials: true });
      if (res.data.success) {
        setAvailableBalance(res.data.availableBalance);
        setUsedMargin(res.data.usedMargin);
      }
    } catch (error) {
      console.error("Error fetching funds", error);
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setAmount("");
    setErrorMessage("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAmount("");
    setErrorMessage("");
  };

  const handleTransaction = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setErrorMessage("Please enter a valid positive amount.");
      return;
    }

    if (modalType === "WITHDRAW" && Number(amount) > availableBalance) {
      setErrorMessage(
        "Insufficient balance. Please enter an amount within your available balance."
      );
      return;
    }

    setErrorMessage("");

    try {
      const res = await axios.post(
        `${API_URL}/update-funds`,
        { amount: Number(amount), type: modalType },
        { withCredentials: true }
      );

      if (res.data.success) {
        setAvailableBalance(res.data.availableBalance);
        closeModal();
      }
    } catch (error) {
      setErrorMessage("Transaction failed. Please try again.");
    }
  };

  return (
    <>
      {/* NORMAL FUNDS PAGE UI (Ab ye apni jagah se nahi hilega) */}
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button className="btn btn-green" onClick={() => openModal("ADD")} style={{ border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
          Add funds
        </button>
        <button className="btn btn-blue" onClick={() => openModal("WITHDRAW")} style={{ border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
          Withdraw
        </button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{availableBalance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{usedMargin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{availableBalance.toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{availableBalance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        {/* <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div> */}
      </div>

      {/* PROFESSIONAL POPUP MODAL (Sabse niche render hoga taaki baaki screen cover ho sake properly) */}
      {isModalOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3 style={{ marginTop: 0, color: "#424242", fontWeight: 500 }}>
              {modalType === "ADD" ? "Add Funds" : "Withdraw Funds"}
            </h3>
            
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "10px" }}>
              Amount (₹)
            </p>
            
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => {
                setAmount(e.target.value);
                setErrorMessage("");
              }}
              placeholder="Enter amount"
              style={inputStyle}
              autoFocus
            />

            {errorMessage && (
              <div
                className="alert alert-danger mt-3 mb-0 py-2 px-3"
                role="alert"
                style={{
                  fontSize: "13px",
                  borderRadius: "5px",
                }}
              >
                <strong>Error:</strong> {errorMessage}
              </div>
            )}
            
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
              <button 
                onClick={closeModal} 
                style={{ ...btnStyle, backgroundColor: "#fff", color: "#424242", border: "1px solid #ccc" }}
              >
                Cancel
              </button>
              <button 
                onClick={handleTransaction} 
                style={{ ...btnStyle, backgroundColor: modalType === "ADD" ? "#4caf50" : "#f34141", color: "#fff" }}
              >
                {modalType === "ADD" ? "Add" : "Withdraw"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// YAHAN FIX KIYA HAI: Background blur aur poori screen cover karne ka professional look
const overlayStyle = {
  position: "fixed",
  top: 0, left: 0, 
  width: "100vw", // Poori screen width block karega
  height: "100vh", // Poori screen height block karega
  backgroundColor: "rgba(0, 0, 0, 0.4)", // Thoda light transparent rakha hai
  backdropFilter: "blur(4px)", // Peeche ka table ab perfectly blur hoke dikhega, gayab nahi hoga
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999 // Ensure karta hai ki baaki sab element iske peeche rahein
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "25px",
  borderRadius: "8px",
  width: "350px",
  boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
  fontFamily: "sans-serif"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "1.1rem",
  border: "1px solid #d1d1d1",
  borderRadius: "4px",
  boxSizing: "border-box",
  outline: "none"
};

const btnStyle = {
  padding: "8px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: 500
};

export default Funds;