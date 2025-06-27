import React from "react";

function Universe( { imageURL,}) {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4  p-3 text-center text-muted">
          <img src="media/zerodhaFundhouse.png" style={{height:"40%" }} 
          />
          <p style={{textSizeAdjust:"100%" , fontFamily:"Inter, serif" , color:"rgb(66, 66, 66)"}}>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 ">
          <img src="media/sensibullLogo.svg" style={{height:"25%" }}/>
        </div>
        <div className="col-4 p-3 ">
          <img src="media/tijori.svg" style={{height:"40%" }}/>
        </div>
      </div>
    </div>
  );
}

export default Universe;
