import React from "react";
import Wrapper from "../assets/wrappers/Aeromap";
import map1 from "../assets/images/map1.png";
import map2 from "../assets/images/map2.png";
import map3 from "../assets/images/map3.png";
import map4 from "../assets/images/map4.png";
import map5 from "../assets/images/map5.png";
import arrow1 from "../assets/images/arrow1.png";
import arrow2 from "../assets/images/arrow2.png";
import arrow3 from "../assets/images/arrow3.png";
import net_base from "../assets/images/net_base.png";

const Aeromap = () => {
  return (
    <Wrapper>
      <h1>Aeromap</h1>
      <div className="maps">
        <div className="mapArr">
          <div className="map">
            <div className="map-head">
              <h4>Initial developments</h4>
              <img src={map1} />
            </div>
            <div className="content">
              <div>
                <i>1. </i>
                <span>
                  Collective shaping the direction and development of De-Fi
                </span>
              </div>
              <div>
                <i>2. </i>
                <span>Initiating humanitarian endeavours & poverty relief</span>
              </div>
              <div>
                <i>3. </i>{" "}
                <span>
                  Empowering and delegating community governance & treasury
                </span>
              </div>
            </div>
          </div>
          <img src={arrow1} className="img" />
        </div>
        <div className="mapArr2">
          <img src={arrow2} className="img2" />
          <div className="map">
            <div className="map-head">
              <h4>Network</h4>
              <img src={map2} className="img" />
            </div>
            <div className="content">
              <div>
                <i>1. </i>
                <span>Aerobull will be powered by Aero.</span>
              </div>
              <div>
                <i>2. </i>
                <span>
                  Aerodrome Finance will be the AMM and liquidity pool system 
                  for AeroBull
                </span>
              </div>
              <div className="extra_content">
                <img src={net_base} />
                <span>
                  Built on <span className="span">Base network</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mapArr3">
          <div className="map">
            <div className="map-head">
              <h4>Social media</h4>
              <img src={map3} />
            </div>
            <div className="content">
              <div>
                <i>1. </i>
                <span>
                  Depending on the expansion of project; a weekly giveaway of
                  $ARB will take place through voting incentives.
                </span>
              </div>
              <div>
                <i>2. </i>
                <span>
                  Investors are able to participate in the project; make
                  decisions and vote on where the project and funds must be
                  utilized.
                </span>
              </div>
              <div>
                <i>3. </i>{" "}
                <span>
                  Holders are given the authority to steer the direction of the
                  project.
                </span>
              </div>
            </div>
          </div>
          <img src={arrow3} className="img3" />
        </div>

        <div className="mapArr2">
          <img src={arrow2} className="img2" />

          <div className="map">
            <div className="map-head">
              <h4>Liquidity pool</h4>
              <img src={map4} className="img" />
            </div>
            <div className="content">
              <div>
                <i>1. </i>
                <span>Raise $2M for Liquidity Pool & Exchange Listing</span>
              </div>
              <div>
                <i>2. </i>
                <span>
                  Once LP is locked, utilise funds through FIAT & Tokens to fund
                  website, marketing & strategic partnering.
                </span>
              </div>
              <div>
                <i>3. </i> <span>Organically grow the community.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mapArr3">
          <div className="map">
            <div className="map-head">
              <h4>Project Phillipines</h4>
              <img src={map5} />
            </div>
            <div className="content">
              <div>
                <i>1. </i>
                <span>Conduct needs assessment upon planning</span>
              </div>
              <div>
                <i>2. </i>
                <span>Utilize project funding & community fundraiser</span>
              </div>
              <div>
                <i>3. </i> <span>Distribute & Build relief supplies</span>
              </div>
              <div>
                <i>4. </i> <span>Implement sustainable projects</span>
              </div>
              <div>
                <i>5. </i> <span>Conducted follow-up assessments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Aeromap;
