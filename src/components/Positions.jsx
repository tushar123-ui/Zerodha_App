import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    // YAHAN FIX KIYA HAI: 'allPositions' ki jagah apni live 'orders/get-holdings' API lagayi hai
    // kyunki hamare database me abhi orders/holdings ka data hi save hai.
    axios.get("http://localhost:8080/orders/get-holdings", { withCredentials: true })
      .then((res) => {
        if(res.data.success) {
          setAllPositions(res.data.data);
        }
      })
      .catch((err) => console.error("Error fetching positions:", err));
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table mb-5">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.length === 0 ? (
              <tr>
                <td colSpan="7" style={{textAlign: "center", padding: "20px", color: "#888"}}>
                  No open positions for today.
                </td>
              </tr>
            ) : (
              allPositions.map((stock, index) => {
                const qty = Number(stock.qty) || 0;
                // Avg. Buy Price
                const avg = Number(stock.avgCost) || Number(stock.price) || 0;
                
                // LIVE FEELING KE LIYE: 3% ka random up/down fluctuation (LTP)
                const mockLtp = (Number(stock.price) || 0) * (1 + (Math.random() * 0.06 - 0.03));
                
                const curValue = mockLtp * qty;
                const investment = avg * qty;
                const pnl = curValue - investment;

                const isProfit = pnl >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                
                // Change Percentage
                const changePct = investment !== 0 ? (pnl / investment) * 100 : 0;
                const changeClass = changePct >= 0 ? "profit" : "loss";
                const changeStr = `${changePct >= 0 ? '+' : ''}${changePct.toFixed(2)}%`;

                return (
                  <tr key={index}>
                    {/* Hamesha MIS (Intraday) dikhayega positions mein */}
                    <td style={{color: "#4184f3", fontWeight: 500}}>MIS</td> 
                    <td>{stock.name}</td>
                    <td>{qty}</td>
                    <td>{avg.toFixed(2)}</td>
                    <td>{mockLtp.toFixed(2)}</td>
                    <td className={profClass}>{pnl.toFixed(2)}</td>
                    <td className={changeClass}>{changeStr}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;