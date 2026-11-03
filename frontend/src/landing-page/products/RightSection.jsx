import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
return (
    <div className="container mt-5 mb-5 p-3">
        <div className="row align-items-center">
            {/* order-2 on mobile, order-md-1 on desktop to keep text on left */}
            <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
                <h1 className="mb-3">{productName}</h1>
                <p className="mb-4">{productDescription}</p>

                <div>
                    <a href={learnMore} className="text-decoration-none">
                        Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

            {/* order-1 on mobile so image stays on top, order-md-2 on desktop */}
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-1 order-md-2">
                <img src={imageURL} className="img-fluid" alt={productName} />
            </div>
        </div>
    </div>
);
}

export default RightSection;