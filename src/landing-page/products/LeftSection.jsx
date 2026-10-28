import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
  <div className="container mt-5 mb-5 p-3">
    <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img src={imageURL} className="img-fluid" alt={productName} />
        </div>

        <div className="col-12 col-md-6 p-3 p-md-5">
            <h1 className="mb-3">{productName}</h1>
            <p className="mb-4">{productDescription}</p>

            <div className="d-flex flex-wrap gap-4 mb-4">
                <a href={tryDemo} className="text-decoration-none">
                    Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>

                <a href={learnMore} className="text-decoration-none">
                    Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </div>

            <div className="d-flex flex-wrap gap-4 mt-3">
                <a href={googlePlay}>
                    <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
                </a>

                <a href={appStore}>
                    <img src="media/images/appstoreBadge.svg" alt="App Store" />
                </a>
            </div>
        </div>
    </div>
  </div>
  );
}
export default LeftSection;