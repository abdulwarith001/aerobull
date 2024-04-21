import React from 'react'
import Wrapper from '../assets/wrappers/Hero'
const Hero = () => {
  return (
    <Wrapper>
      <div className="header">
        <h2>$ARB</h2>
        <button>Presale</button>
      </div>
      <div className="header-txt">
        <div className='herotxt'>
         <div className='firstcomma'>
             <i>“ </i>
          <div>
            HI THERE, I’M <span>AERO</span>,<br />
            Taking Charge for <br />
            Humanitarian Efforts
          </div>
         </div>
          <div className='secondcomma'>”</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero