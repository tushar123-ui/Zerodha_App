import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  // Cache check for instant load
  const [allHodlings, setAllHoldings] = useState(() => {
    const savedHoldings = localStorage.getItem("cache_holdings");
    return savedHoldings ? JSON.parse(savedHoldings) : [];
  });

  const API_URL = import.meta.env.VITE_API_URL;
  
  let totalInvestment = 0;
  let totalCurrentValue = 0;

  useEffect(() => {
    axios.get(`${API_URL}/orders/get-holdings`, { withCredentials: true })
      .then((res) => {
        if(res.data.success) {
          setAllHoldings(res.data.data);
          // Data update in cache
          localStorage.setItem("cache_holdings", JSON.stringify(res.data.data));
        }
      })
      .catch((error) => console.error("Error fetching holdings:", error));
  }, []);

  const labels = allHodlings.map((subArray) => subArray["name"] || "Unknown");
  const data = {
    labels,
    datasets: [
       {
        label: 'Current Value (₹)',
        data: allHodlings.map((stock) => {
          const qty = Number(stock.qty) || 0;
          const mockLtp = (Number(stock.price) || 0) * (1 + (Math.random() * 0.1 - 0.05)); 
          return mockLtp * qty;
        }), 
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHodlings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>

        <tbody>
          {allHodlings.length === 0 ? (
            <tr>
              <td colSpan="8" style={{textAlign: "center", padding: "20px", color: "#888"}}>
                No open holdings.
              </td>
            </tr>
          ) : (
            allHodlings.map((stock, index) => {
              const qty = Number(stock.qty) || 0;
              const avgCostValue = Number(stock.avgCost) || Number(stock.price) || 0; 
              const mockLtp = (Number(stock.price) || 0) * (1 + (Math.random() * 0.1 - 0.05));
              const curValue = mockLtp * qty;
              const investment = avgCostValue * qty;
              
              totalInvestment += investment;
              totalCurrentValue += curValue;

              const pnl = curValue - investment;
              const isProfit = pnl >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              
              const pnlPercentage = investment !== 0 ? (pnl / investment) * 100 : 0;
              const pnlPercentageStr = `${pnl >= 0 ? '+' : ''}${pnlPercentage.toFixed(2)}%`;

              return(
                <tr key={index}>
                  <td>{stock.name || "N/A"}</td>
                  <td>{qty}</td>
                  <td>{avgCostValue.toFixed(2)}</td>
                  <td>{mockLtp.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{pnlPercentageStr}</td>
                  <td className={profClass}>{pnlPercentageStr}</td>
                </tr>
              )
            })
          )}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {totalCurrentValue.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalCurrentValue - totalInvestment >= 0 ? "profit" : "loss"}>
             {(totalCurrentValue - totalInvestment).toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })} 
             <span style={{fontSize: '0.8rem', marginLeft: '5px'}}>
               ({totalInvestment !== 0 ? (((totalCurrentValue - totalInvestment)/totalInvestment)*100).toFixed(2) : 0}%)
             </span>
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <div className="holdings-chart-container">
         {allHodlings.length > 0 && <VerticalGraph data={data} />}
      </div>
    </>
  );
};

export default Holdings;