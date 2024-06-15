import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Hero'
import Modal from './DisclaimerModal';
import aero_back from '../assets/images/aero_bg.png';
import mobile_hero from "../assets/images/mobile_hero_bg.png";
import {useNavigate, Link} from 'react-router-dom'
const Hero = () => {
  const navigate= useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="firstSection">
        <div className="header">
          <h2>$ARBL</h2>
          <div className="buttons">
            <button className="disclaimer" onClick={()=> setIsOpen(true)}>Disclaimer</button>
            <Link to="mailto:aerobull2024@gmail.com">
              <button>Contact us</button>
            </Link>
          </div>
        </div>
        <div className="header-txt">
          <div className="herotxt">
            <div className="firstcomma">
              <i>“ </i>
              <div className="herodiv">
                HI THERE, I’M <span>AERO</span>,<br />
                The generous &<br />
                Ambitious bull.
              </div>
            </div>
            <div className="secondcomma">”</div>
          </div>
        </div>
      </div>

      <div className="milkyguy">
        <img src={aero_back} className="desktop" />
        <img src={mobile_hero} className="mobile" />
        <h1>Aerobull</h1>
      </div>
    </Wrapper>
  );
}

export default Hero