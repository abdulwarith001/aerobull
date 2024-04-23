import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import discord from '../assets/images/discord.png'
import twitter from '../assets/images/twitter.png'
import coin from '../assets/images/coin.png'
import mobile_coin from '../assets/images/mobile_coin.png'
import { useNavigate, Link } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <h1>$ARB</h1>
      <h3>Join our $ARB Community</h3>
      <div className="icons">
        <div className="icon">
          <Link to="https://discord.gg/eT3ZfUZc">
            <img src={discord} />
          </Link>
        </div>
        <div
          className="icon"
        >
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
    </Wrapper>
  );
}

export default Footer