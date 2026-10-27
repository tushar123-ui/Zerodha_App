import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "User");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/me",
          {},
          { withCredentials: true } 
        );
        if (response.data.success) {
          setUsername(response.data.username);

          // NAYA LOGIC: API se data aate hi usko localStorage me save kar do
          localStorage.setItem("username", response.data.username);
        }
      } catch (error) {
        console.error("User verification failed");
      }
    };
    fetchUser();


    const handleNameChange = (event) => {
      setUsername(event.detail); // Signal se naya naam le liya
      localStorage.setItem("username", event.detail); // Naya naam localStorage me bhi update karega
    };

    window.addEventListener("usernameChanged", handleNameChange);

    return () => {
      window.removeEventListener("usernameChanged", handleNameChange);
    };
  }, []);


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
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;