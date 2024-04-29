import React, {useState} from "react";
import Wrapper from "../assets/wrappers/Presale";
import presale from "../assets/images/presale.png";
import profile_icon from "../assets/images/desktop_profile.png";

const Presale = () => {
    //this state is to be toggled when users wallet is connected
    const [isWalletConnected, setIsWalletConnected] = useState(false)
  return (
    <Wrapper>
      <div className="header-container">
        {isWalletConnected ? (
          <button>
        0x02E91GH93AB...</button>
        ) : (
          <button>Connect Wallet</button>
        )}
      </div>

      <div className="buy_form">
        <h1>BUY $ARB</h1>
        <div className="form-container">
          <div className="form3">
            <div className="txt-container">
              <h4>
                $10 <span>=</span> 2,000 ARB
              </h4>
            </div>
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
          </div>
        </div>
      </div>

      <div className="footer-img">
        <img src={presale} />
      </div>
    </Wrapper>
  );
};

export default Presale;
