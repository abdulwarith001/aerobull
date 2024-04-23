import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import discord from '../assets/images/discord.png'
import twitter from '../assets/images/twitter.png'
import coin from '../assets/images/coin.png'
import mobile_coin from '../assets/images/mobile_coin.png'
import footer_bg2 from '../assets/images/footer_bg2.png'
import aerobull_mobile_footer from '../assets/images/aerobull_mobile_footer.png'
import { useNavigate, Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <div className='contents'>
        <h1>$ARB</h1>
        <h3>Join our $ARB Community</h3>
        <div className="icons">
          <div className="icon">
            <Link to="https://discord.gg/eT3ZfUZc">
              <img src={discord} />
            </Link>
          </div>
          <div className="icon">
            <Link to="https://x.com/basedaerobull?s=11">
              <img src={twitter} />
            </Link>
          </div>
        </div>
        <div className="buy_btn">
          <p>Buy Aero</p>
          <img src={coin} className="desktop" />
          <img src={mobile_coin} className="mobile" />
        </div>
      </div>
      <img src={footer_bg2} className='image' />
      <img src={aerobull_mobile_footer} className='image2' />
    </Wrapper>
  );
}

export default Footer