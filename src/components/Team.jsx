import React from 'react'
import Wrapper from '../assets/wrappers/Team'
import team1 from '../assets/images/team1.png'
import team2 from '../assets/images/team2.png'
import team3 from '../assets/images/team3.png'
import team4 from '../assets/images/team4.png'
import team5 from '../assets/images/team5.png'
import team6 from '../assets/images/team6.png'

const Team = () => {
  return (
    <Wrapper>
        <h1>Meet the Team</h1>

        <div className='team-container'>
            <div className='team'>
                <img src={team1}/>
                <h2>William <span>(onlyCrypticBull)</span></h2>
                <h2>Founder - CEO</h2>
            </div>
            <div className='team'>
                <img src={team2}/>
                <h2>Ethan <span>(NotesArcade)</span></h2>
                <h2>COO</h2>
            </div>
            <div className='team'>
                <img src={team2}/>
                <h2>Seth <span>(Aerowingg)</span></h2>
                <h2>Jr Admin</h2>
            </div>
            <div className='team'>
                <img src={team3}/>
                <h2>Seth <span>(AeroD)</span></h2>
                <h2>Head of Marketing</h2>
            </div>
            <div className='team'>
                <img src={team4}/>
                <h2>Anthony <span>(Bongo)</span></h2>
                <h2>Market Strategist</h2>
            </div>
            <div className='team'>
                <img src={team5}/>
                <h2>A.A <span>(Enigmare)</span></h2>
                <h2>Developer</h2>
            </div>
            <div className='team'>
                <img src={team6}/>
                <h2>OD <span>(Dyzyner)</span></h2>
                <h2>Design Plumber</h2>
            </div>
        </div>
    </Wrapper>
  )
}

export default Team