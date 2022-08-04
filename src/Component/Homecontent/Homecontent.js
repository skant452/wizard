import React from 'react'
import CopyExample from '../CopyExample'
import bannerimg from '../Images/bannerimg.gif'
function Homecontent() {
  return (
    <>
      <div className="banner-bg">
        <div className="banner">
          <div className="container ban">
            <div className="row">
              <div className="col-lg-7 ban1">
                <div className="banner-content">
                <h3>WHERE THE MAGIC HAPPENS</h3>
                <p>Welcome to WIZARD, a world of unique experience and magic never before available on the blockchain. Mint or Yield exclusive NFT’s, Play to Earn Crypto, or Explore Our Spell Inventory.</p>
                <p>...You’re a WIZARD now; the possibilities are endless.</p>
                </div>
                <div className="btn">
                <a href="https://dex.knightswap.financial/#/swap?outputCurrency=0x5066c68cae3b9bdacd6a1a37c90f2d1723559d18" target="_blank">Buy WIZARD</a>
                <a href="/marketplace" class="play-btn" target="_blank">Buy NFT</a>
                </div>
                <div className="contract-add">
                <h3>Contract address</h3>
                <CopyExample/>
                </div>
              </div>
              <div className="col-lg-5 ban2">
              <div class="bnr-img">
              <img src={bannerimg} alt='img'/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homecontent