import React from 'react'
import Wrapper from '../assets/wrappers/MoonAero'
import moon_aero from "../assets/images/moon_aero.png";
import mobile_aero_bull from "../assets/images/mobile_aero_bull.png";

const MoonAero = () => {
  return (
      <Wrapper>
          <h1>$ARB is powered by <span>Aero</span></h1>
          <img src={moon_aero} className='desktop'/>
          <img src={mobile_aero_bull} className='mobile'/>
    </Wrapper>
  )
}

export default MoonAero