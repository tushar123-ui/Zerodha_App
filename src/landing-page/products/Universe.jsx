import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h2 className="mb-4">The Zerodha Universe</h2>
                <p className="text-muted">Extend your trading and investment experience even further with our partner platforms</p>
                
                {/* First Row */}
                <div className="row">
                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/smallcaseLogo.png" style={{width: "50%"}} alt="Smallcase" />
                        <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Thematic investment platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/streakLogo.png" style={{width: "45%"}} alt="Streak" />
                        <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Algo & strategy platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/sensibullLogo.svg" style={{width: "55%"}} alt="Sensibull" />
                        <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Options trading platform</p>
                    </div>
                </div>

                {/* Second Row */}
                <div className="row">
                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/zerodhaFundhouse.png" style={{width: "60%"}} alt="Zerodha Fundhouse" />
                        <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Asset management</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/goldenpiLogo.png" style={{width: "45%"}} alt="GoldenPi" />
                        <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Bonds trading platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/dittoLogo.png" style={{width: "30%"}} alt="Ditto" />
                        <p className="text-muted mt-3" style={{fontSize: "14px", fontWeight: "500"}}>Insurance</p>
                    </div>
                </div>

                {/* Sign Up Button */}
                <button className="btn btn-primary p-2 fs-5 mb-5 mt-5" style={{width: "15%", margin: "0 auto"}}>
                    SignUp Now
                </button>
            </div>
        </div>
    );
}

export default Universe;