import React from 'react'
import logo1 from "./Images/logo1.png";
import logo2 from "./Images/logo2.png";
import logo3 from "./Images/logo3.png";
import logo4 from "./Images/logo4.png";
import logo5 from "./Images/logo5.png";
import logo6 from "./Images/logo6.png";
import logo7 from "./Images/logo7.png";
import download from "./Images/download.png";

const Modal2 = () => {
  return (
    <>
        <div class="modal fade" id="Backdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">CONNECT WALLET</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body modal-bdy">
        <div className="connect-btn mt-1">
          <span className="float-start">MetaMask</span>
          <img src={logo1} alt="logo" className="float-end"/>
        </div>
      </div>
      <div class="modal-body modal-bdy">
        <div className="connect-btn mt-1">
          <span className="float-start">TrustWallet</span>
          <img src={logo2} alt="logo" className="float-end"/>
        </div>
      </div>
      <div class="modal-body modal-bdy">
        <div className="connect-btn mt-1">
          <span className="float-start">MathWallet</span>
          <img src={download} alt="logo" className="float-end"/>
        </div>
      </div>
      <div class="modal-body modal-bdy">
        <div className="connect-btn mt-1">
          <span className="float-start">Tokenpocket</span>
          <img src={logo4} alt="logo" className="float-end"/>
        </div>
      </div>
      <div class="modal-body modal-bdy">
        <div className="connect-btn mt-1">
          <span className="float-start">Wallet Connect</span>
          <img src={logo5} alt="logo" className="float-end"/>
        </div>
      </div>
      <div class="modal-body modal-bdy">
        <div className="connect-btn mt-1">
          <span className="float-start">Binance Smart Chain Wallet</span>
          <img src={logo6} alt="logo" className="float-end"/>
        </div>
      </div>
      <div class="modal-body modal-bdy">
        <div className="connect-btn mt-1">
          <span className="float-start">Safepal Wallet</span>
          <img src={logo7} alt="logo" className="float-end"/>
        </div>
      </div>
     <p className="bottom-text">
     <a href="https://docs.pancakeswap.finance/get-started/connection-guide" target="_blank"><i class="fa fa-question-circle-o" aria-hidden="true"></i> Learn how to connect?   </a>
     </p>
    </div>
  </div>
</div>
    </>
  )
}

export default Modal2