import React from 'react'
import Wrapper from '../assets/wrappers/BuyArbl'
import { Link } from 'react-router-dom'

const BuyArbl = () => {
  return (
    <Wrapper>
      <h1>Join the Aerobull community</h1>
      <Link to="https://dexscreener.com/base/0x84838f0e9d05ee4c22694911fd1f24113d5fb264">
        <button>Buy ARBL</button>
      </Link>
    </Wrapper>
  );
}

export default BuyArbl