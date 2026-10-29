import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5 px-3">
      <div className="row">
        
        <div className="col-12 mb-4">
            <h2 className="fs-4 text-muted">To create a ticket, select a relevant topic</h2>
        </div>

        {/* Support Category 1 */}
        <div className="col-12 col-md-4 p-3 mb-4">
          <h5 className="mb-4">
            <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> Account Opening
          </h5>
          <div className="d-flex flex-column gap-2 ms-4">
            <a href="#" className="text-decoration-none">Online Account Opening</a>
            <a href="#" className="text-decoration-none">Offline Account Opening</a>
            <a href="#" className="text-decoration-none">Company, Partnership and HUF Account Opening</a>
            <a href="#" className="text-decoration-none">NRI Account Opening</a>
            <a href="#" className="text-decoration-none">Charges at Zerodha</a>
            <a href="#" className="text-decoration-none">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
            <a href="#" className="text-decoration-none">Getting Started</a>
          </div>
        </div>

        {/* Support Category 2 */}
        <div className="col-12 col-md-4 p-3 mb-4">
          <h5 className="mb-4">
            <i className="fa fa-user-circle me-2" aria-hidden="true"></i> Your Zerodha Account
          </h5>
          <div className="d-flex flex-column gap-2 ms-4">
            <a href="#" className="text-decoration-none">Login Credentials</a>
            <a href="#" className="text-decoration-none">Account Modification and Segment Addition</a>
            <a href="#" className="text-decoration-none">DP ID and bank details</a>
            <a href="#" className="text-decoration-none">Your Profile</a>
            <a href="#" className="text-decoration-none">Transfer and conversion of shares</a>
          </div>
        </div>

        {/* Support Category 3 */}
        <div className="col-12 col-md-4 p-3 mb-4">
          <h5 className="mb-4">
            <i className="fa fa-bar-chart me-2" aria-hidden="true"></i> Trading and Markets
          </h5>
          <div className="d-flex flex-column gap-2 ms-4">
            <a href="#" className="text-decoration-none">Margin/ leverage, Product and Order types</a>
            <a href="#" className="text-decoration-none">Kite Web and Mobile</a>
            <a href="#" className="text-decoration-none">Trading FAQs</a>
            <a href="#" className="text-decoration-none">Corporate Actions</a>
            <a href="#" className="text-decoration-none">Sentinel</a>
            <a href="#" className="text-decoration-none">Kite API</a>
            <a href="#" className="text-decoration-none">Pi and other platform</a>
            <a href="#" className="text-decoration-none">Stockreports+</a>
            <a href="#" className="text-decoration-none">GTT</a>
          </div>
        </div>
        
        {/* Support Category 4 */}
        <div className="col-12 col-md-4 p-3 mb-4 mt-md-4">
          <h5 className="mb-4">
            <i className="fa fa-credit-card me-2" aria-hidden="true"></i> Funds
          </h5>
          <div className="d-flex flex-column gap-2 ms-4">
            <a href="#" className="text-decoration-none">Adding Funds</a>
            <a href="#" className="text-decoration-none">Fund Withdrawal</a>
            <a href="#" className="text-decoration-none">eMandates</a>
            <a href="#" className="text-decoration-none">Adding Bank Accounts</a>
          </div>
        </div>

        {/* Support Category 5 */}
        <div className="col-12 col-md-4 p-3 mb-4 mt-md-4">
          <h5 className="mb-4">
            <i className="fa fa-circle-o-notch me-2" aria-hidden="true"></i> Console
          </h5>
          <div className="d-flex flex-column gap-2 ms-4">
            <a href="#" className="text-decoration-none">Reports</a>
            <a href="#" className="text-decoration-none">Ledger</a>
            <a href="#" className="text-decoration-none">Portfolio</a>
            <a href="#" className="text-decoration-none">60 Day Challenge</a>
            <a href="#" className="text-decoration-none">IPO</a>
            <a href="#" className="text-decoration-none">Referral Program</a>
          </div>
        </div>

        {/* Support Category 6 */}
        <div className="col-12 col-md-4 p-3 mb-4 mt-md-4">
          <h5 className="mb-4">
            <i className="fa fa-circle-o me-2" aria-hidden="true"></i> Coin
          </h5>
          <div className="d-flex flex-column gap-2 ms-4">
            <a href="#" className="text-decoration-none">Understanding Mutual Funds</a>
            <a href="#" className="text-decoration-none">About Coin</a>
            <a href="#" className="text-decoration-none">Buying and Selling through Coin</a>
            <a href="#" className="text-decoration-none">Starting an SIP</a>
            <a href="#" className="text-decoration-none">Managing your Portfolio</a>
            <a href="#" className="text-decoration-none">Coin App</a>
            <a href="#" className="text-decoration-none">Moving to Coin</a>
            <a href="#" className="text-decoration-none">Government Securities</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;