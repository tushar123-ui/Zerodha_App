import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      {/* FIX 1: row se 'p-5' hata diya taaki upar ka lamba gap khatam ho jaye */}
      <div className="row mt-5 mb-5">
        
        {/* FIX 2: heading se 'ps-5' hata diya aur 'mb-4' lagaya taaki columns ke sath perfect align ho aur chhota gap de */}
        <h1 className="fs-3 mb-4">To create a ticket, select a relevant topic</h1>

        {/* FIX 3: Har column me p-5 ko p-3 kiya taaki text upar sarak jaye. */}
        {/* FIX 4: Sabhi icons mein 'class' ki jagah 'className' kar diya taaki React error na de. */}
        <div className="col-4 p-3">
          <h5 className="mb-4">
            <i className="fa fa-plus-circle small-icon" aria-hidden="true"></i> Account Opening
          </h5>
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Online Account Opening</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Offline Account Opening</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Company, Partnership and HUF Account Opening</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>NRI Account Opening</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Charges at Zerodha</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Getting Started</a> <br />
        </div>

        <div className="col-4 p-3">
          <h5 className="mb-4">
            <i className="fa fa-user-circle small-icon" aria-hidden="true"></i> Your Zerodha Account
          </h5>
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Login Credentials</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Account Modification and Segment Addition</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>DP ID and bank details</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Your Profile</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Transfer and conversion of shares</a> <br />
        </div>

        <div className="col-4 p-3">
          <h5 className="mb-4">
            <i className="fa fa-bar-chart small-icon" aria-hidden="true"></i> Trading and Markets
          </h5>
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Margin/ leverage, Product and Order types</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Kite Web and Mobile</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Trading FAQs</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Corporate Actions</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Sentinel</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Kite API</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Pi and other platform </a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Stockreports+ </a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>GTT </a> <br />
        </div>
        
        {/* Niche ki line wale columns ko thoda margin-top (mt-4) diya hai taaki upar wale section se mix na ho */}
        <div className="col-4 p-3 mt-4">
          <h5 className="mb-4">
            <i className="fa fa-credit-card small-icon" aria-hidden="true"></i> Funds
          </h5>
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Adding Funds</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Fund Withdrawal</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>eMandates</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Adding Bank Accounts</a> <br />
        </div>

        <div className="col-4 p-3 mt-4">
          <h5 className="mb-4">
            <i className="fa fa-circle-o-notch small-icon" aria-hidden="true"></i> Console
          </h5>
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Reports</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Ledger</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Portfolio</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>60 Day Challenge</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>IPO</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Referral Program</a> <br />
        </div>

        <div className="col-4 p-3 mt-4">
          <h5 className="mb-4">
            <i className="fa fa-circle-o small-icon" aria-hidden="true"></i> Coin
          </h5>
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Understanding Mutual Funds</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>About Coin</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Buying and Selling through Coin</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Starting an SIP</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Managing your Portfolio</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Coin App</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Moving to Coin</a> <br />
          <a href="" className="text-decoration" style={{lineHeight: "2.5"}}>Government Securities</a> <br />
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;