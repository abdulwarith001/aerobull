import React from 'react'
import Wrapper from '../assets/wrappers/Aeronomics'
import aero_chart from '../assets/images/aero_chart.png'
import mobile_chart from '../assets/images/mobile_chart.png'
import mobile_chart2 from '../assets/images/mobile_chart2.png'
import mobile_chart3 from '../assets/images/mobile_chart3.png'
import mobile_chart4 from '../assets/images/mobile_chart4.png'
import mobile_chart5 from '../assets/images/mobile_chart5.png'
import aero_chart1 from '../assets/images/aero_chart1.png'
import mobile_chart1 from "../assets/images/mobile_chart1.png";
import aero_chart2 from '../assets/images/aero_chart2.png'
import aero_chart3 from '../assets/images/aero_chart3.png'
import aero_chart4 from '../assets/images/aero_chart4.png'
import aero_chart5 from '../assets/images/aero_chart5.png'

const Aeronomics = () => {
    return (
      <Wrapper>
        <h1>Aeronomics</h1>
        <h2>$ARB 1,000,000,000</h2>

        <div className="aero_container">
          <img src={aero_chart} className="desktop" />
          <img src={mobile_chart} className="mobile" />
          <div className="content">
            <h4>Breakdown</h4>
            <div className="item_wrapper">
              <div className="item">
                <img src={aero_chart1} className="desktop" />
                <img src={mobile_chart1} className="mobile" />
                <span>Presale & Airdrop Supply (10%)</span>
              </div>
              <div className="item">
                <img src={aero_chart2} className="desktop" />
                <img src={mobile_chart2} className="mobile" />
                <span>Liquidity Pool (15%)</span>
              </div>
              <div className="item">
                <img src={aero_chart3} className="desktop" />
                <img src={mobile_chart3} className="mobile" />
                <span>Exchange & Markets (15%)</span>
              </div>
              <div className="item">
                 <img src={aero_chart4} className="desktop" />
                <img src={mobile_chart4} className="mobile" />
                <span>Marketing (10%)</span>
              </div>
              <div className="item">
                 <img src={aero_chart5} className="desktop" />
                <img src={mobile_chart5} className="mobile" />
                <span>Team growth & Expansion (10%)</span>
              </div>
              <div className="item">
                 <img src={aero_chart1} className="desktop" />
                <img src={mobile_chart1} className="mobile" />
                <span>Supply Burned(40%)</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}

export default Aeronomics