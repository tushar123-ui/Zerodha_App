import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    // mt-5 mb-5 ko thoda adjust kiya aur unnecessary spacing hata di
    <div className="container mt-4 mb-4 text-center">
      {/* Yahan se pt-5 pb-5 hata diya taaki upar-neeche ka extra gap khatam ho */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          
          {/* Professional Illustration Image */}
          <img 
            src="media/images/No data-bro.svg" 
            alt="Page not found" 
            className="img-fluid mb-4" 
            style={{ maxWidth: "300px" }} 
          />

          {/* Clean and Professional Text */}
          <h2 className="mb-3 fw-normal" style={{ color: "#333" }}>
            This page doesn't exist
          </h2>
          <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
            Please check your URL or return to the home page.
          </p>

          {/* Fixed: Outlined Pill Button (LinkedIn Style) */}
          <Link 
            to="/" 
            className="btn px-4 py-2 fw-semibold shadow-none" 
            style={{ 
              borderRadius: "50px", 
              border: "1.5px solid #387ed1", 
              color: "#387ed1", 
              backgroundColor: "transparent",
              textDecoration: "none" 
            }}
            onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(56, 126, 209, 0.1)';
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
            }}
          >
            Go to home
          </Link>

        </div>
      </div>
    </div>
  );
}

export default NotFound;