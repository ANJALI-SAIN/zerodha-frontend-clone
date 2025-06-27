import React from 'react';


function CreateTicket({heading, links}) {
    return ( 
       <div className="container border-bottom mb-5">
      <div className="row text-muted">
        <div className="col-4 p-5">
            <h3>{heading}  <i class="fa-solid fa-circle-plus"></i> Account Opening</h3><br></br>
           <a href={links} style={{ textDecoration: "none" }}> Resident individual</a><br></br><br></br>
            <a href={links} style={{ textDecoration: "none" }}>Minor </a><br></br><br></br>
             <a href={links} style={{ textDecoration: "none" }}>Non Resident Indian (NRI) </a><br></br><br></br>
              <a href={links} style={{ textDecoration: "none" }}>Company, Partnership, HUF and LLP </a><br></br><br></br>
               <a href={links} style={{ textDecoration: "none" }}> Glossary</a><br></br><br></br>
        </div>
        <div className="col-4 p-5">
            <h3>{heading}<i class="fa-solid fa-house"></i> Your Zerodha Account 
</h3><br></br>
           <a href={links} style={{ textDecoration: "none" }}> Your Profile</a><br></br><br></br>
            <a href={links} style={{ textDecoration: "none" }}> Account modification</a><br></br><br></br>
             <a href={links} style={{ textDecoration: "none" }}>Client Master Report (CMR) </a><br></br><br></br>
              <a href={links} style={{ textDecoration: "none" }}>Nomination </a><br></br><br></br>
               <a href={links} style={{ textDecoration: "none" }}> Transfer and conversion of securities</a><br></br><br></br>
        </div>
        <div className="col-4 p-5 text-grey">
            <h3>{heading}<i class="fa-solid fa-chart-simple"></i> Kite </h3><br></br>
           <a href={links} style={{ textDecoration: "none" }}>IPO </a><br></br> <br></br>
           <a href={links} style={{ textDecoration: "none" }}> Trading FAQs</a><br></br><br></br>
            <a href={links} style={{ textDecoration: "none" }}> Margin Trading Facility (MTF) and Margins</a><br></br><br></br>
             <a href={links} style={{ textDecoration: "none" }}> Charts and orders</a><br></br><br></br>
              <a href={links} style={{ textDecoration: "none" }}> Alerts and Nudges</a><br></br><br></br>
               <a href={links} style={{ textDecoration: "none" }}>General</a><br></br><br></br>
        </div>
        </div>
         <div className="row text-muted">
        <div className="col-4 p-5">
            <h3>{heading}  <i class="fa-solid fa-circle-plus"></i> Funds</h3><br></br>
           <a href={links} style={{ textDecoration: "none" }}>Add money </a><br></br><br></br>
            <a href={links} style={{ textDecoration: "none" }}>Withdraw money </a><br></br><br></br>
             <a href={links} style={{ textDecoration: "none" }}>Add bank accounts</a><br></br><br></br>
              <a href={links} style={{ textDecoration: "none" }}>eMandates</a><br></br><br></br>
              
        </div>
        <div className="col-4 p-5">
            <h3>{heading}<i class="fa-solid fa-house"></i> Console
</h3><br></br>
           <a href={links} style={{ textDecoration: "none" }}> Portfolio</a><br></br><br></br>
            <a href={links} style={{ textDecoration: "none" }}> Corporate actions</a><br></br><br></br>
             <a href={links} style={{ textDecoration: "none" }}>Funds statement </a><br></br><br></br>
              <a href={links} style={{ textDecoration: "none" }}>Reports </a><br></br><br></br>
               <a href={links} style={{ textDecoration: "none" }}> Profile</a><br></br><br></br>
                <a href={links} style={{ textDecoration: "none" }}> Segments</a><br></br><br></br>
        </div>
        <div className="col-4 p-5 text-grey">
            <h3>{heading}<i class="fa-solid fa-chart-simple"></i>  Coin </h3><br></br>
           <a href={links} style={{ textDecoration: "none" }}>Mutual funds</a><br></br> <br></br>
           <a href={links} style={{ textDecoration: "none" }}> National Pension Scheme (NPS)</a><br></br><br></br>
            <a href={links} style={{ textDecoration: "none" }}> Features on Coin</a><br></br><br></br>
             <a href={links} style={{ textDecoration: "none" }}> Payments and Orders</a><br></br><br></br>
             
               <a href={links} style={{ textDecoration: "none" }}>General</a><br></br><br></br>
        </div>
        </div>
        </div>
     );
}

export default CreateTicket;