import React from 'react';

function Hero() {
  return (
    <section className="container-fluid pb-5 px-3 px-md-5" id="supportHero">
      
      {/* Top Header - Removed margin-left to rely on container padding */}
      <div className="d-flex justify-content-between align-items-center pt-5 w-100 mx-auto" style={{ maxWidth: "1200px" }}>
        <h4 className="fs-5 m-0 text-white">Support Portal</h4>
        <a href="#" className="text-white" style={{ textDecoration: "underline" }}>Track Tickets</a>
      </div>

      {/* Main Content Area - Replaced hardcoded margins with responsive max-width */}
      <div className="row mt-5 mx-auto text-white" style={{ maxWidth: "1200px" }}>
        
        {/* Left Column - Search and Quick Links */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3 mb-4">Search for an answer or browse help topics to create a ticket</h1>
          <input 
            type="text" 
            className="form-control p-3 mb-4" 
            placeholder="Eg: how do I activate F&O, why is my order getting rejected.." style={{ textOverflow: "ellipsis" }}
          />
          
          <div className="d-flex flex-wrap gap-3">
            <a href="#" className="text-white" style={{ textDecoration: "underline" }}>Track account opening</a>
            <a href="#" className="text-white" style={{ textDecoration: "underline" }}>Track segment activation</a>
            <a href="#" className="text-white" style={{ textDecoration: "underline" }}>Intraday margins</a>
            <a href="#" className="text-white" style={{ textDecoration: "underline" }}>Kite user manual</a>
          </div>
        </div>

        {/* Right Column - Featured Links */}
        <div className="col-12 col-md-6 p-3 px-md-5 mt-4 mt-md-0">
          <h1 className="fs-3 mb-4">Featured</h1>
          <ol className="ps-3">
            <li className="mb-3"><a href="#" className="text-white">Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="#" className="text-white">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;