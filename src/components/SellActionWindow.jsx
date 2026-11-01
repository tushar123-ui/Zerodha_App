import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [errorMessage, setErrorMessage] = useState("");
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    setErrorMessage("");

    if (stockQuantity <= 0 || stockPrice <= 0) {
      setErrorMessage("Please enter valid Quantity and Price.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/orders/place-order", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      }, { withCredentials: true });

      if (res.data.success) {
        closeSellWindow();
        window.location.reload(); 
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Transaction failed.");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        
        {/* Simple Text Header (Like Add Funds) */}
        <h3 style={styles.headerTitle}>
          Sell {uid} <span style={styles.qtyText}></span>
        </h3>

        <div style={styles.inputContainer}>
          <div style={styles.inputGroup}>
            <p style={styles.label}>Qty.</p>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => {
                setStockQuantity(e.target.value);
                setErrorMessage("");
              }}
              style={styles.input}
              autoFocus
            />
          </div>

          <div style={styles.inputGroup}>
            <p style={styles.label}>Price (₹)</p>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => {
                setStockPrice(e.target.value);
                setErrorMessage("");
              }}
              style={styles.input}
            />
          </div>
        </div>

        {errorMessage && (
          <div style={styles.errorBox}>
            {errorMessage}
          </div>
        )}

        {/* Footer Area with Margin text and Buttons */}
        <div style={styles.footerRow}>
           <span style={styles.marginText}>Value: ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
           <div style={styles.btnGroup}>
             <button onClick={() => closeSellWindow()} style={styles.cancelBtn}>
               Cancel
             </button>
             <button onClick={handleSellClick} style={{...styles.actionBtn, backgroundColor: "#f34141"}}>
               Sell
             </button>
           </div>
        </div>

      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(4px)",
    display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999, padding: "15px", boxSizing: "border-box"
  },
  modal: {
    backgroundColor: "#fff", borderRadius: "8px", width: "100%", maxWidth: "350px",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.2)", padding: "25px", fontFamily: "sans-serif", boxSizing: "border-box"
  },
  headerTitle: {
    marginTop: 0, color: "#424242", fontWeight: 500, fontSize: "1.4rem", marginBottom: "20px"
  },
  qtyText: {
    fontSize: "0.9rem", color: "#666", fontWeight: "normal"
  },
  inputContainer: {
    display: "flex", gap: "15px", marginBottom: "10px"
  },
  inputGroup: {
    flex: 1
  },
  label: {
    fontSize: "0.9rem", color: "#666", margin: "0 0 8px 0"
  },
  input: {
    width: "100%", padding: "10px", fontSize: "1.1rem", border: "1px solid #d1d1d1",
    borderRadius: "4px", boxSizing: "border-box", outline: "none"
  },
  errorBox: {
    color: "#d32f2f", backgroundColor: "#fdecea", padding: "8px 12px", borderRadius: "4px", fontSize: "0.85rem", marginBottom: "15px", border: "1px solid #f8c1bc"
  },
  footerRow: {
    display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "15px"
  },
  marginText: {
    fontSize: "0.8rem", color: "#888", paddingBottom: "5px"
  },
  btnGroup: {
    display: "flex", gap: "10px"
  },
  cancelBtn: {
    padding: "8px 20px", border: "1px solid #ccc", borderRadius: "4px", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, backgroundColor: "#fff", color: "#424242"
  },
  actionBtn: {
    padding: "8px 20px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, color: "#fff"
  }
};

export default SellActionWindow;