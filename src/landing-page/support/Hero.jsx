import React from 'react';

function Hero() {
  return (
    <section className="container-fluid pb-5" id="supportHero">
      
      <div className="pt-5" id="supportWrapper">
        <h4 className="fs-5 ps-4">Support Portal</h4>
        <a href="" style={{ textDecoration: "underline" }}>Track Tickets</a>
      </div>

      <div className="row mt-5" style={{ margin: "0 150px" }}>
        
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg. how do I activate F&O, why is my order getting rejected.." />
          <br /><br />
          
          <a href="">Track account opening</a> &nbsp;&nbsp;&nbsp;
          <a href="">Track segment activation</a> &nbsp;&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;
          <a href="">Kite user manual</a>
        </div>

        <div className="col-6 p-3 my-custom-padding">
          <h1 className="fs-3 mb-4">Featured</h1>
          <ol>
            <li className="mb-3"><a href="">Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;