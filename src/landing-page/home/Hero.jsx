import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container p-3 p-md-5 mb-5">
            <div className="row text-center">
                <div className="col-12">
                    <img src="media/images/homeHero.png" alt="Image not Found" className="img-fluid mb-5" />
                    <h1 className="mt-5">Invest in Everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds</p>
                    {/* Hardcoded 20% width hatayi taaki mobile par dab na jaye */}
                    <Link to="/signup" className="btn btn-primary p-2 fs-5 mb-5" style={{ margin: "0 auto" }}>SignUp Now</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;