import React from 'react';


function RightSection
({ imageURL,
  productName,
  productDescription,
 learnMore,}) {
    return ( 
       <div className="container border-bottom mb-5">
      <div className="row">
        <div className="col-4 p-5 mt-5">
            <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {" "}
           
            <a href={learnMore} style={{ textDecoration:"none"}}>
              learnMore <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          
        </div>
          
        
        <div className="col-1"></div>
        <div className="col-5 ">
          <img src={imageURL} className="" />
      </div>
    </div>
    </div>
     );
}

export default RightSection
;