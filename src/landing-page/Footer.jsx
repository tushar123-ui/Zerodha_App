import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row  mt-5">
          <div className="col footer-padding ">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p className="mt-3">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>

            <div className="mt-4  pb-4 mb-4">
              <a href="#" className="text-muted me-4 fs-5">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" className="text-muted me-4 fs-5">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a href="#" className="text-muted me-4 fs-5">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              {/* Yahan LinkedIn me 'me-4' add kiya hai spacing ke liye */}
              <a href="#" className="text-muted me-4 fs-5">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              {/* Telegram aakhri icon hai, isliye isme me-4 nahi chahiye */}
              <a href="#" className="text-muted fs-5">
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="col">
            <p>Company</p>
            <div className="d-flex flex-column gap-3">
            <a href="#" className="footerlinks" >About</a> 
            <a href="#" className="footerlinks ">Products</a>
           
            <a href="#" className="footerlinks">Pricing</a> 
            <a href="#" className="footerlinks" >Referral programme</a> 
            <a href="#" className="footerlinks" >Careers</a> 
            <a href="#" className="footerlinks" >Zerodha.tech</a> 
            <a href="#" className="footerlinks" >Press & media</a> 
            <a href="#" className="footerlinks" >Zerodha cares (CSR)</a>
          </div>
          </div>

          <div className="col">
            <p>Support</p>
            <div className="d-flex flex-column gap-3">
            <a href="#" className="footerlinks" >Contact</a> 
            <a href="#" className="footerlinks" >Support portal</a>
            <a href="#" className="footerlinks" >Z-Connect blog</a> 
            <a href="#" className="footerlinks" >List of charges</a> 
            <a href="#" className="footerlinks" >Download & resources</a> 
            </div>
          </div>

          <div className="col">
            <p>Account</p>
            <div className="d-flex flex-column gap-3">
            <a href="#"  className="footerlinks" >Open an Account</a> 
            <a href="#" className="footerlinks"  >Fund transfer</a>
            <a href="#" className="footerlinks"  >60 day challenge</a> 
            </div>
          </div>
        </div>

        <div className="mt-5  text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        {/* Yeh wo bottom links wala hissa hai jise aap fix karna chahte the */}
        <div className="text-center mt-3 mb-4" style={{ fontSize: "14px" }}>
          {/* Har link ke aage thoda chhota gap (mx-3 ki jagah ab hum margin kam kar rahe hain) */}
          <a href="#" className="text-muted bottom-link me-3">
            NSE
          </a>
          <a href="#" className="text-muted bottom-link me-3">
            BSE
          </a>
          <a href="#" className="text-muted bottom-link me-3">
            MCX
          </a>
          <a href="#" className="text-muted bottom-link me-3">
            MSEI
          </a>
          <a href="#" className="text-muted bottom-link me-3">
            Terms & conditions
          </a>
          <a href="#" className="text-muted bottom-link me-3">
            Policies & procedures
          </a>
          <a href="#" className="text-muted bottom-link me-3">
            Privacy policy
          </a>
          <a href="#" className="text-muted bottom-link me-3">
            Disclosure
          </a>
          <a href="#" className="text-muted bottom-link me-3">
            For investor's attention
          </a>
          <a href="#" className="text-muted bottom-link me-3">
            Investor charter
          </a>
          <a href="#" className="text-muted bottom-link">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
