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
    <div className="container border-bottom mb-5">
      <div className="row">
        <div className="col-4 p-5">
          <img src={imageURL} className="p-5" />
        </div>
        <div className="col-4"></div>
        <div className="col-4 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {" "}
            <a href={tryDemo} style={{ textDecoration: "none" }}>tryDemo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px" ,textDecoration:"none"}}>
              learnMore <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-5">
            {" "}
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="media/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"
                style={{ marginLeft: "50px", textDecoration: "none" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
