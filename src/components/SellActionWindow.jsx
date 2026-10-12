import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [errorMessage, setErrorMessage] = useState(""); // Error message ke liye state
  const [isOwned, setIsOwned] = useState(false); // Check karne ke liye ki stock hai ya nahi

  // Jaise hi popup khulega, yeh check karega ki stock Holdings mein hai ya nahi
  useEffect(() => {
    axios.get("http://localhost:8080/allHoldings").then((res) => {
      const holdings = res.data;
      // Check kar rahe hain ki current stock (uid) holdings list mein hai kya
      const stockExists = holdings.find((item) => item.name === uid);
      
      if (stockExists) {
        setIsOwned(true);
      } else {
        setIsOwned(false);
      }
    });
  }, [uid]);

  const handleSellClick = () => {
    // Agar stock holdings mein nahi hai, toh error dikhao aur function yahin rok do
    if (!isOwned) {
      setErrorMessage(`You do not have ${uid} in your holdings to sell.`);
      return; 
    }

    // Agar stock hai, toh normal Sell order pass karo
    axios.post("http://localhost:8080/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    GeneralContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
        
        {/* Agar error aaya toh yahan red color mein dikhega */}
        {errorMessage && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "10px", textAlign: "center" }}>
            {errorMessage}
          </p>
        )}
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" style={{ backgroundColor: "#ff5722" }} onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;