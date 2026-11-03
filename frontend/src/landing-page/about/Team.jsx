import React from 'react';

function Team() {
  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-12">
          <h1 className="text-center">People</h1>
        </div>
      </div>

      <div className="row p-3 text-muted align-items-center" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <div className="col-12 col-md-6 p-3 text-center mb-4 mb-md-0">
          <img src="media/images/image.png" alt="Tushar Gurupanch" className="img-fluid rounded-circle" style={{ maxWidth: "250px" }} />
          <h4 className="mt-4 text-dark">Tushar Gurupanch</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-12 col-md-6 p-3">
          <p>Tushar founded Zerodha with the vision of making investing simpler and more accessible. What started as an effort to change the way people approach the stock market grew into a platform that changed the way people trade and invest. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He believes in keeping financial markets simple, transparent, and easy to access, allowing more people to participate with confidence.</p>
          <p>Simplicity is his zen.</p>
          <p>Connect on <a href="#" className="text-decoration-none">Homepage</a> / <a href="#" className="text-decoration-none">TradingQnA</a> / <a href="#" className="text-decoration-none">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;