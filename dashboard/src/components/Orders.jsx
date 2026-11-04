import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  // Cache check for instant load
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("cache_orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/orders/get-orders`, { withCredentials: true })
      .then((res) => {
        if(res.data.success) {
          setOrders(res.data.data);
          // Data update in cache
          localStorage.setItem("cache_orders", JSON.stringify(res.data.data));
        }
      })
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({orders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Instrument</th>
                  <th>Product</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  const dateObj = new Date(order.createdAt);
                  const timeString = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  const dateString = dateObj.toLocaleDateString();

                  return (
                    <tr key={index}>
                      <td>{dateString} {timeString}</td>
                      <td style={{ color: order.mode === "BUY" ? "#4caf50" : "#ff5722", fontWeight: "bold" }}>
                        {order.mode}
                      </td>
                      <td>{order.name}</td>
                      <td>CNC</td>
                      <td>{order.qty}</td>
                      <td>{order.price.toFixed(2)}</td>
                      <td style={{ color: "#4caf50" }}>COMPLETED</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;