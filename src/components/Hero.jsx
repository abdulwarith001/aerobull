import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Hero'
import Modal from './Modal';
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>}
      <div className="header">
        <h2>$ARB</h2>
        <button onClick={()=> setIsOpen(true)}>Presale</button>
      </div>
      <div className="header-txt">
        <div className='herotxt'>
         <div className='firstcomma'>
             <i>“ </i>
          <div>
            HI THERE, I’M <span>AERO</span>,<br />
            The generous &<br />
            Ambitious bull.
          </div>
         </div>
          <div className='secondcomma'>”</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero