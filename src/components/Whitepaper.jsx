import React from 'react'
import Wrapper from '../assets/wrappers/Whitepaper'
import {useNavigate} from 'react-router-dom'


const Whitepaper = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <h1>Whitepaper</h1>
      <h4>Delve into what we are offering our community</h4>
      <button onClick={()=>navigate('/whitepaper')}>Read our whitepaper</button>
    </Wrapper>
  )
}

export default Whitepaper