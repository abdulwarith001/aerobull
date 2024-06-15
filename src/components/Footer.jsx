import React, { useState } from "react";
import Wrapper from '../assets/wrappers/Footer'
import discord from '../assets/images/discord.png'
import twitter from '../assets/images/twitter.png' 
import telegram from '../assets/images/telegram.png' 
import coin from '../assets/images/coin.png'
import mobile_coin from '../assets/images/mobile_coin.png'
import footer_bg2 from '../assets/images/footer_bg2.png'
import aerobull_mobile_footer from '../assets/images/aerobull_mobile_footer.png'
import { useNavigate, Link } from "react-router-dom";
import Modal from "./DisclaimerModal";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}

      <div className="contents">
        <h1>$ARBL</h1>
        <h3>Join our $ARB Community</h3>
        <div className="icons">
          <div className="icon">
            <Link>
              <img src={discord} />
            </Link>
          </div>
          <div className="icon">
            <Link to="https://x.com/basedaerobull?s=11">
              <img src={twitter} />
            </Link>
          </div>
          <div className="icon">
            <Link to="https://t.me/+BcioBfMHIMRkY2M5">
              <img src={telegram} />
            </Link>
          </div>
        </div>
        <div className="buy_btn">
          <button className="disclaimer" onClick={() => setIsOpen(true)}>
            Disclaimer
          </button>
        </div>
        <div>
          <Link to="/whitepaper" className="web_link">
            <h4>aerobull whitepaper</h4>
          </Link>
        </div>
      </div>
      <img src={footer_bg2} className="image desktop" />
      <img src={aerobull_mobile_footer} className="image2 mobile" />
    </Wrapper>
  );
}

export default Footer