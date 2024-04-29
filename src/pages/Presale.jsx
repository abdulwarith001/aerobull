import React, {useState} from 'react'
import Wrapper from '../assets/wrappers/Presale'
import eth_tickers from '../assets/images/eth_tickers.png'
import arb_tickers from '../assets/images/arb_tickers.png'
import presale from '../assets/images/presale.png'

const Presale = () => {
  //this state is to be toggled when users wallet is connected
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  return (
    <Wrapper>
      <div className="header-container">
        {isWalletConnected ? (
          <button>0x02E91GH93AB...</button>
        ) : (
          <button>Connect Wallet</button>
        )}
      </div>

      <div className="buy_form">
        <h1>BUY $ARB</h1>
        <div className="form-container">
          <div>
            <form className="form">
              <div className="form-item">
                <label>From</label>
                <div className="input-wrapper">
                  <input type="text" placeholder="ENTER ETH" required />
                  <div className="input-txt">
                    <img src={eth_tickers} />
                    ETH
                  </div>
                </div>
              </div>
              <div className="form-item">
                <label>To</label>
                <div className="input-wrapper">
                  <input type="text" placeholder="ENTER ARB" required />
                  <div className="input-txt">
                    <img src={arb_tickers} />
                    ARB
                  </div>
                </div>
              </div>
              <button>BUY</button>
            </form>
          </div>

          <div className="form2">
            <div className="item">
              <span>token name</span>
              <span>Aerobull</span>
            </div>
            <div className="item">
              <span>token symbol</span>
              <span>$arb</span>
            </div>
            <div className="item">
              <span>decimal</span>
              <span>18</span>
            </div>
            <div className="item">
              <span>token for eth</span>
              <span>250,000</span>
            </div>
            <div className="item">
              <span>min contribution</span>
              <span>0.1 eth</span>
            </div>
            <div className="item">
              <span>max contribution</span>
              <span>0.5 eth</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-img">
        <img src={presale} />
      </div>
    </Wrapper>
  );
}

export default Presale