import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5">
        <h1>Charges</h1>
        <p className="text-muted">List of all charges and taxes</p>
        <div className="row mt-5 text-muted">
          
          <div className="col p-5" >
            <img src="media/pricing-eq(1).svg" className="mb-3" alt="Equity"></img>
            <h1>Free equity delivery</h1>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
         
          <div className="col p-5" >
            <img src="media/pricing(20).svg" className="mb-3" alt="F&O" ></img>
            <h1>Intraday and F&O trades</h1>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          
          <div className="col p-5" >
            <img src="media/pricing-eq(1).svg" className="mb-3" alt="Mutual Fund"></img>
            <h1>Free direct MF</h1>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Hero;
