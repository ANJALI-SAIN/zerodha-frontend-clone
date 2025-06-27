import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.</p>
                        <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                <div className='row text-center'>
                 <div className='col p-2'>
                     <img src='media/pricing-eq(1).svg' ></img>
                     <p>Free account
opening</p>
                 </div>
                  <div className='col p-2'>
                    <img src='media/pricing-eq(1).svg' ></img>
                   <p> Free equity delivery
and direct mutual funds</p>
                    
                  </div>
                  <div className='col p-2'>
                    <img src='media/pricing(20).svg'></img>
                    <p>
                        Intraday and
F&O
                    </p>
                    </div>
                  </div>
                  </div>
            </div>
        </div>
     );
}

export default Pricing;