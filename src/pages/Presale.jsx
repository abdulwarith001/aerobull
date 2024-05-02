import React, {useState} from 'react'
import Wrapper from '../assets/wrappers/Presale'
import eth_tickers from '../assets/images/eth_tickers.png'
import arb_tickers from '../assets/images/arb_tickers.png'
import presale from '../assets/images/presale.png'
import info_icon from '../assets/images/info_icon.png'

const Presale = () => {
  //this state is to be toggled when users wallet is connected
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [ethValue, setEthValue] = useState(null)
  const [arbValue, setArbValue] = useState(null)
  const [error, setError] = useState(null)

  const baseValue = 2100
  const convertEthToArb = (value) => {
    setEthValue(value)
    if(value > 100){
      setError('Maximum value exceeded. Max is $100')
      return
    }
    if(value < 10){
      setError('Minimum value is $10.')
      return
    }
    const convertedValue = value * baseValue
    setArbValue(convertedValue)
    setError(null)
  }
  const convertArbToEth = (value) => {
    setArbValue(value)
    const convertedValue = value / baseValue
    setEthValue(convertedValue)
  }
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
        <h3>
          <img src={info_icon}/>YOU CAN ONLY BUY IN <span>$10</span> INCREMENTS</h3>
        <div className="form-container">
          <div>
            <form className="form">
              <div className="form-item">
                {error && (
              <p className='error-txt'>{error}</p>
                )}
                <label>From</label>
                <div className="input-wrapper">
                 <div>
                   <input
                    type="text"
                    placeholder="ENTER USD"
                    required
                    value={ethValue}
                    onChange={(e) => convertEthToArb(e.target.value)}
                  />
                  <p>Ex.$10,$20..(ETH Equivalent)</p>
                 </div>
                  <div className="input-txt">
                    <img src={eth_tickers} />
                    ETH
                  </div>
                </div>
              </div>
              <div className="form-item">
                <label>To</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="ENTER ARB"
                    required
                    value={arbValue}
                    onChange={(e) => convertArbToEth(e.target.value)}
                  />
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