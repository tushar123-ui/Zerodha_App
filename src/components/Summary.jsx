import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "User");
  
  // YAHAN FIX KIYA HAI: Initial state 0 ki jagah LocalStorage se aayegi taaki blink na ho
  const [funds, setFunds] = useState(() => {
    const savedFunds = localStorage.getItem("summary_funds");
    return savedFunds ? JSON.parse(savedFunds) : { availableBalance: 0, usedMargin: 0 };
  });
  
  const [holdingsStats, setHoldingsStats] = useState(() => {
    const savedStats = localStorage.getItem("summary_holdings");
    return savedStats ? JSON.parse(savedStats) : { count: 0, totalInvestment: 0, currentValue: 0 };
  });

  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    // 1. User Name Fetching Logic
    const fetchUser = async () => {
      try {
        const response = await axios.post(
          `${API_URL}/auth/me`,
          {},
          { withCredentials: true } 
        );
        if (response.data.success) {
          setUsername(response.data.username);
          localStorage.setItem("username", response.data.username);
        }
      } catch (error) {
        console.error("User verification failed");
      }
    };
    fetchUser();

    // 2. Funds Fetching Logic
    const fetchFunds = async () => {
      try {
        const res = await axios.get(`${API_URL}/funds/get-funds`, { withCredentials: true });
        if (res.data.success) {
          const newFunds = {
            availableBalance: res.data.availableBalance || 0,
            usedMargin: res.data.usedMargin || 0
          };
          setFunds(newFunds);
          // Data aate hi use save kar lo taaki tab switch karne par turant dikhe
          localStorage.setItem("summary_funds", JSON.stringify(newFunds));
        }
      } catch (error) {
        console.error("Error fetching funds", error);
      }
    };
    fetchFunds();

    // 3. Holdings Fetching & Calculation Logic
    const fetchHoldings = async () => {
      try {
        const res = await axios.get(`${API_URL}/orders/get-holdings`, { withCredentials: true });
        if (res.data.success) {
          const allHoldings = res.data.data || [];
          
          let investment = 0;
          let currentVal = 0;

          allHoldings.forEach(stock => {
            const qty = Number(stock.qty) || 0;
            const avg = Number(stock.avgCost) || Number(stock.price) || 0;
            const mockLtp = (Number(stock.price) || 0) * (1 + (Math.random() * 0.06 - 0.03));
            
            investment += (avg * qty);
            currentVal += (mockLtp * qty);
          });

          const newStats = {
            count: allHoldings.length,
            totalInvestment: investment,
            currentValue: currentVal
          };
          
          setHoldingsStats(newStats);
          // Holdings ka data bhi cache mein daal diya
          localStorage.setItem("summary_holdings", JSON.stringify(newStats));
        }
      } catch (error) {
        console.error("Error fetching holdings", error);
      }
    };
    fetchHoldings();

    // Custom Event Listener for Username change
    const handleNameChange = (event) => {
      setUsername(event.detail); 
      localStorage.setItem("username", event.detail); 
    };
    window.addEventListener("usernameChanged", handleNameChange);

    return () => {
      window.removeEventListener("usernameChanged", handleNameChange);
    };
  }, []);

  // Format Helper: Number ko k ya m format me badalna
  const formatNumber = (num) => {
    if (num >= 10000000) return (num / 10000000).toFixed(2) + "Cr";
    if (num >= 100000) return (num / 100000).toFixed(2) + "L";
    if (num >= 1000) return (num / 1000).toFixed(2) + "k";
    return num.toFixed(2);
  };

  // Profit/Loss Calculations
  const pnl = holdingsStats.currentValue - holdingsStats.totalInvestment;
  const isProfit = pnl >= 0;
  const pnlClass = isProfit ? "profit" : "loss";
  const pnlPercentage = holdingsStats.totalInvestment > 0 ? (pnl / holdingsStats.totalInvestment) * 100 : 0;
  const pnlPercentageStr = `${isProfit ? '+' : ''}${pnlPercentage.toFixed(2)}%`;

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{formatNumber(funds.availableBalance)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{formatNumber(funds.usedMargin)}</span>{" "}
            </p>
            <p>
              Opening balance <span>{formatNumber(funds.availableBalance)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdingsStats.count})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 style={{ color: pnl >= 0 ? "#4caf50" : "#ff5722" }}>
              {formatNumber(Math.abs(pnl))} <small>{pnlPercentageStr}</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatNumber(holdingsStats.currentValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{formatNumber(holdingsStats.totalInvestment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;