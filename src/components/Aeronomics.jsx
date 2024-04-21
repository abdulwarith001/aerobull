import React from 'react'
import Wrapper from '../assets/wrappers/Aeronomics'
import aero_chart from '../assets/images/aero_chart.png'
import aero_chart1 from '../assets/images/aero_chart1.png'
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
          <img src={aero_chart} />
          <div className="content">
            <h4>Breakdown</h4>
            <div className="item_wrapper">
              <div className="item">
                <img src={aero_chart1} />
                <span>Presale & Airdrop Supply (50%)</span>
              </div>
              <div className="item">
                <img src={aero_chart2} />
                <span>Liquidity Pool (15%)</span>
              </div>
              <div className="item">
                <img src={aero_chart3} />
                <span>Exchange & Markets (15%)</span>
              </div>
              <div className="item">
                <img src={aero_chart4} />
                <span>Marketing (10%)</span>
              </div>
              <div className="item">
                <img src={aero_chart5} />
                <span>Team growth & Expansion (15%)</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}

export default Aeronomics