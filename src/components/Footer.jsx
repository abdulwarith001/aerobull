import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import discord from '../assets/images/discord.png'
import twitter from '../assets/images/twitter.png'
import coin from '../assets/images/coin.png'
import mobile_coin from '../assets/images/mobile_coin.png'
const Footer = () => {
  return (
    <Wrapper>
      <h1>$ARB</h1>
      <h3>Join our $ARB Community</h3>
      <div className="icons">
        <div className="icon">
          <img src={discord} />
        </div>
        <div className="icon">
          <img src={twitter} />
        </div>
      </div>
      <div className="buy_btn">
        <p>Buy Aero</p>
        <img src={coin} className='desktop'/>
        <img src={mobile_coin} className='mobile'/>
      </div>

      <div className="web_link">
        <h4>www.aerobull.com</h4>
      </div>
    </Wrapper>
  );
}

export default Footer