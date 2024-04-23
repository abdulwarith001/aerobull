import React from 'react'
import Wrapper from '../assets/wrappers/Presale'

const Presale = () => {
  return (
    <Wrapper>
          <div className='header-container'>
              <button>Connect Wallet</button>
        </div>

          <div className='buy_form'>
              <h1>BUY $ARB</h1>
              <div className='form-container'>
                    <form>
                  <div className='form'>
                        <div className='form-item'>
                              <label>From</label>
                              <div className='input-wrapper'>
                                <input type='text' placeholder='ENTER ETH' required/>
                                <div className='input-txt'>ETH</div>
                              </div>
                        </div>
                        <div className='form-item'>
                              <label>To</label>
                              <div className='input-wrapper'>
                                <input type='text' placeholder='ENTER ARB' required/>
                                <div className='input-txt'>ARB</div>
                              </div>
                        </div>
                  <button>BUY</button>
                  </div>
                    </form>
                    
                  <div className='form2'>
                      <div className='item'>
                          <span>token name</span>
                          <span>Aerobull</span>
                       </div>
                      <div className='item'>
                          <span>token symbol</span>
                          <span>$arb</span>
                       </div>
                      <div className='item'>
                          <span>decimal</span>
                          <span>18</span>
                       </div>
                      <div className='item'>
                          <span>token for eth</span>
                          <span>250,000</span>
                       </div>
                      <div className='item'>
                          <span>min contribution</span>
                          <span>0.1 eth</span>
                       </div>
                      <div className='item'>
                          <span>max contribution</span>
                          <span>0.5 eth</span>
                       </div>
                       
                  </div>
              </div>
        </div>
    </Wrapper>
  )
}

export default Presale