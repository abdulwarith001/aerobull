import React from "react";
import Wrapper from "../assets/wrappers/Aeromap";
import map1 from "../assets/images/map1.png";
import map1_mobile from "../assets/images/map1_mobile.png";
import map3_mobile from "../assets/images/map_mobile3.png";
import map2_mobile from "../assets/images/mobile_map2.png";
import map4_mobile from "../assets/images/mobile_map4.png";
import map5_mobile from "../assets/images/mobile_map5.png";
import map6_mobile from "../assets/images/mobile_map6.png";
import map7_mobile from "../assets/images/mobile_map7.png";
import map2 from "../assets/images/map2.png";
import map3 from "../assets/images/map3.png";
import map4 from "../assets/images/map4.png";
import map5 from "../assets/images/map5.png";
import map6 from "../assets/images/map6.png";
import map8 from "../assets/images/map8.png";
import arrow1 from "../assets/images/arrow1.png";
import arrow2 from "../assets/images/arrow2.png";
import arrow3 from "../assets/images/arrow3.png";
import arrow6 from "../assets/images/arrow6.png";
import arrow5 from "../assets/images/arrow5.png";
import net_base from "../assets/images/net_base.png";
import mobile_net from "../assets/images/mobile_base.png";
import phillipines from "../assets/images/phillipines.png";
import nigeria from "../assets/images/nigeria.png";
import el_salvador from "../assets/images/el_salvador.png";
import el_salvador_mobile from "../assets/images/el_salvador_mobile.png";
import nigeria_mobile from "../assets/images/nigeria_mobile.png";
import phillipines_mobile from "../assets/images/philippines_mobile.png";

const Aeromap = () => {
  return (
    <Wrapper>
      <h1>Aeromap</h1>
      <div className="maps">
        <div className="mapArr">
          <div className="map">
            <div className="map-head">
              <h4>Initial developments</h4>
              {/* <img src={map1} className="desktop_map" />
              <img src={map1_mobile} className="mobile_map" /> */}
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
              {/* <img src={map2} className="img desktop_map" />
              <img src={map2_mobile} className=" img mobile_map" /> */}
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
                <img src={net_base} className="desktop_net" />
                <img src={mobile_net} className="mobile_net" />
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
              {/* <img src={map3} className="img desktop_map" />
              <img src={map3_mobile} className=" img mobile_map" /> */}
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
              {/* <img src={map4} className="img desktop_map" />
              <img src={map4_mobile} className=" img mobile_map" /> */}
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
              <div className="head-txt">
                Project{" "}
                <span className="phillipines">
                  Phillipines <img src={phillipines} className="desktop_flag" />
                  <img src={phillipines_mobile} className="mobile_flag" />
                </span>
              </div>
              <img src={map5} className="img desktop_map" />
              <img src={map5_mobile} className=" img mobile_map" />
            </div>
            <div className="content">
              <div>
                <i>1. </i>
                <span>
                  Disaster Preparedness: Enhance disaster resilience through
                  early warning systems, infrastructure upgrades, and community
                  preparedness initiatives to mitigate the impact of natural
                  disasters. Sustainable
                </span>
              </div>
              <div>
                <i>2. </i>
                <span>
                  Tourism: Promote sustainable tourism practices to preserve
                  natural resources, protect cultural heritage, and generate
                  economic opportunities while minimizing environmental
                  degradation.
                </span>
              </div>
              <div>
                <i>3. </i>{" "}
                <span>
                  Rural Development: Invest in agricultural modernisation, rural
                  infrastructure, and livelihood programs to reduce poverty,
                  create employment, and alleviate urban migration pressures.
                </span>
              </div>
              <div>
                <i>4. </i>{" "}
                <span>
                  Education Reform: Implement comprehensive education reforms to
                  improve quality, accessibility, and relevance of education,
                  focusing on STEM (Science, Technology, Engineering, and
                  Mathematics) subjects and vocational training.
                </span>
              </div>
              <div>
                <i>5. </i>{" "}
                <span>
                  Anti-Corruption Measures: Strengthen anti-corruption
                  mechanisms, enhance transparency, and uphold the rule of law
                  to foster investor confidence, ensure equitable development,
                  and eradicate graft and corruption.
                </span>
              </div>
            </div>
          </div>
          <img src={arrow5} className="img5" />
        </div>

        <div className="mapArr3 extra-map">
          <div className="map">
            <div className="map-head">
              <div className="head-txt">
                Project{" "}
                <span className="nigeria">
                  Nigeria <img src={nigeria} className="desktop_flag" />
                  <img src={nigeria_mobile} className="mobile_flag" />
                </span>
              </div>
              <img src={map6} className="img desktop_map" />
              <img src={map6_mobile} className=" img mobile_map" />
            </div>
            <div className="content">
              <div>
                <i>1. </i>
                <span>
                  Infrastructure Development: Prioritize investment in
                  transportation, energy, and digital infrastructure to support
                  economic growth and improve quality of life.
                </span>
              </div>
              <div>
                <i>2. </i>
                <span>
                  Economic Diversification: Foster a diverse economy by
                  promoting sectors beyond oil and gas, such as technology,
                  agriculture, and manufacturing.
                </span>
              </div>
              <div>
                <i>3. </i>{" "}
                <span>
                  Sustainable Urbanization: Implement sustainable urban planning
                  to manage population growth, alleviate congestion, and
                  preserve green spaces.
                </span>
              </div>
              <div>
                <i>4. </i>{" "}
                <span>
                  Education and Skills Development: Enhance education and
                  vocational training programs to equip citizens with the skills
                  needed for modern industries.
                </span>
              </div>
              <div>
                <i>5. </i>{" "}
                <span>
                  Governance and Accountability: Strengthen governance
                  structures and promote transparency to build trust and attract
                  investment for long-term development.
                </span>
              </div>
            </div>
          </div>
          <img src={arrow6} className="img6" />
        </div>
        <div className="mapArr3 extra-map2">
          <div className="map">
            <div className="map-head">
              <div className="head-txt">
                Project{" "}
                <span className="el_salvador">
                  El Salvador <img src={el_salvador} className="desktop_flag" />
                  <img src={el_salvador_mobile} className="mobile_flag" />
                </span>
              </div>
              <img src={map8} className="img desktop_map" />
              <img src={map7_mobile} className=" img mobile_map" />
            </div>
            <div className="content">
              <div>
                <i>1. </i>
                <span>
                  Crime Prevention and Public Safety: Implement comprehensive
                  crime prevention strategies, including community policing,
                  youth engagement programs, and judicial reforms to reduce
                  violence and enhance public safety.
                </span>
              </div>
              <div>
                <i>2. </i>
                <span>
                  Economic Diversification: Promote economic diversification by
                  investing in sectors such as renewable energy, tourism, and
                  technology to reduce dependency on remittances and create
                  sustainable employment opportunities.
                </span>
              </div>
              <div>
                <i>3. </i>{" "}
                <span>
                  Education and Skills Development: Improve access to quality
                  education and vocational training programs to equip youth with
                  the skills needed for the modern job market and foster
                  innovation and entrepreneurship.
                </span>
              </div>
              <div>
                <i>4. </i>{" "}
                <span>
                  Infrastructure Investment: Prioritize infrastructure
                  development, including transportation, energy, and
                  telecommunications, to enhance connectivity, attract
                  investment, and spur economic growth.
                </span>
              </div>
              <div>
                <i>5. </i>{" "}
                <span>
                  Social Inclusion and Poverty Reduction: Implement social
                  programs aimed at reducing inequality, improving access to
                  healthcare and social services, and addressing the root causes
                  of poverty to ensure inclusive and sustainable development.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Aeromap;
