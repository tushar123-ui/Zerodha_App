import React from "react";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.icon}>🛠️</h1>
        <h2 style={styles.title}>Apps Coming Soon</h2>
        <p style={styles.text}>
          We are currently working on this section. New tools and features will be available here shortly.
        </p>
        <Link to="/" style={styles.button}>
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

// Ekdum simple aur clean CSS object
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75vh",
  },
  card: {
    textAlign: "center",
    maxWidth: "400px",
    padding: "20px",
  },
  icon: {
    fontSize: "3rem",
    margin: "0 0 15px 0",
  },
  title: {
    fontSize: "1.5rem",
    color: "#424242",
    fontWeight: "500",
    marginBottom: "10px",
  },
  text: {
    fontSize: "0.95rem",
    color: "#666",
    lineHeight: "1.5",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#4184f3", // Zerodha blue
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "3px",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "500",
  }
};

export default Apps;