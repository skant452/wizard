import React from 'react'

import blurr1 from '../Images/blurr1.png'
import imogi1 from '../Images/imogi1.png'
import imogi2 from '../Images/imogi2.png'
import imogi3 from '../Images/imogi3.png'
const Nft2 = () => {
  return (
    <>
       <div className="banner">
        <div className="container nft">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 mb-4 ">
                    
                   <div className='d-flex justify-content-center align-content-center'>
                   <img src={blurr1 } alt="" className='blur-img img-fluid'/>
                   </div>
                    
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 nft-content">
                  
                   <div>
                   <h2>Caste your vote !</h2>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                   </div>
                   <div className="icons">
                   <div className="div1 div2">
                    <div>
                    <img src={imogi1} alt="" className="icon1" />
                    </div>
                    <h3 className='mt-5'>Stone</h3>
                    
                   </div>
                   <div className="div1 div2">
                    <div>
                    <img src={imogi2} alt="" className="icon2" />
                    </div>
                    <h3 className='mt-5'>Paper</h3>
                    
                   </div>
                   <div className="div1 div2">
                    <div className='iconft'>
                    <img src={imogi3} alt="" className="icon3 " />
                    </div>
                    <h3 className='h3 mt-5 '>Scissor</h3>
                  
                   </div>

                   </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Nft2
