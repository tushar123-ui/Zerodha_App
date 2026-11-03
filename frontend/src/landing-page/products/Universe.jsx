import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className="container mt-5 p-3">
            <div className="row text-center">
                <div className="col-12">
                    <h2 className="mb-4">The Zerodha Universe</h2>
                    <p className="text-muted">Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                
                {/* First Row */}
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-4 mt-md-5">
                    <img src="media/images/smallcaseLogo.png" className="img-fluid" style={{maxWidth: "150px"}} alt="Smallcase" />
                    <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Thematic investment platform</p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-3 mt-4 mt-md-5">
                    <img src="media/images/streakLogo.png" className="img-fluid" style={{maxWidth: "150px"}} alt="Streak" />
                    <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Algo & strategy platform</p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-3 mt-4 mt-md-5">
                    <img src="media/images/sensibullLogo.svg" className="img-fluid" style={{maxWidth: "150px"}} alt="Sensibull" />
                    <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Options trading platform</p>
                </div>

                {/* Second Row */}
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-4 mt-md-5">
                    <img src="media/images/zerodhaFundhouse.png" className="img-fluid" style={{maxWidth: "150px"}} alt="Zerodha Fundhouse" />
                    <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Asset management</p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-3 mt-4 mt-md-5">
                    <img src="media/images/goldenpiLogo.png" className="img-fluid" style={{maxWidth: "150px"}} alt="GoldenPi" />
                    <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Bonds trading platform</p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-3 mt-4 mt-md-5">
                    <img src="media/images/dittoLogo.png" className="img-fluid" style={{maxWidth: "100px"}} alt="Ditto" />
                    <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Insurance</p>
                </div>

                <div className="col-12">
                    {/* Width 15% removed, Bootstrap px-5 used for dynamic padding */}
                    <Link to="/signup" className="btn btn-primary px-5 py-2 fs-5 mb-5 mt-5" style={{margin: "0 auto"}}>
                        SignUp Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Universe;