import React from 'react'
import blurr3 from '../Images/blurr3.png'
import blurr2 from '../Images/blurr2.png'
import blurr1 from '../Images/blurr1.png'
import imogi1 from '../Images/imogi1.png'
import imogi2 from '../Images/imogi2.png'
import imogi3 from '../Images/imogi3.png'
const Nft1 = () => {
  return (
    <>
       <div className="banner">
        <div className="container nft">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="blurr">
                    <img src={blurr3 } alt="" className='blurr3 img-fluid'/>
                    <img src={blurr2 } alt="" className='blurr2 img-fluid'/>
                    <img src={blurr1 } alt="" className='blurr1 img-fluid'/>
                    </div>
                    <div className="blurr-btn d-flex justify-content-sm-start align-content-center">
                      <div className='h'>
                        <h2>NFTs</h2>
                        <h4>Available</h4>
                      </div>
                    
                        <span>5</span>
                  
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 nft-content">
                   <div className="toggle-btn d-flex justify-content-between">
                   <h2>Caste your vote !</h2>
                   <button>
                   Votes Left
                   </button>
                   </div>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                   <div className="icons">
                   <div className="div1">
                    <div>
                    <img src={imogi1} alt="" className="icon1" />
                    </div>
                    <h3>Stone</h3>
                    <button>10</button>
                   </div>
                   <div className="div1">
                    <div>
                    <img src={imogi2} alt="" className="icon2" />
                    </div>
                    <h3>Paper</h3>
                    <button>8</button>
                   </div>
                   <div className="div1">
                    <div>
                    <img src={imogi3} alt="" className="icon3" />
                    </div>
                    <h3>Scissor</h3>
                    <button>15</button>
                   </div>

                   </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Nft1