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
import map6 from "../assets/images/map6.png";
import map8 from "../assets/images/map8.png";
import arrow1 from "../assets/images/arrow1.png";
import arrow2 from "../assets/images/arrow2.png";
import arrow3 from "../assets/images/arrow3.png";
import phill_1 from "../assets/images/phill_1.png";
import phill_2 from "../assets/images/phill_2.png";
import phill_3 from "../assets/images/phill_3.png";
import phill_4 from "../assets/images/phill_4.png";
import phill_5 from "../assets/images/phill_5.png";
import nig_1 from "../assets/images/nig_1.png";
import nig_2 from "../assets/images/nig_2.png";
import nig_3 from "../assets/images/nig_3.png";
import nig_4 from "../assets/images/nig_4.png";
import net_base from "../assets/images/net_base.png";
import mobile_net from "../assets/images/mobile_base.png";
import phillipines from "../assets/images/phillipines.png";
import nigeria from "../assets/images/nigeria.png";
import el_salvador from "../assets/images/el_salvador.png";
import el_salvador_mobile from "../assets/images/el_salvador_mobile.png";
import nigeria_mobile from "../assets/images/nigeria_mobile.png";
import phillipines_mobile from "../assets/images/philippines_mobile.png";
import els1 from "../assets/images/els1.png";
import els2 from "../assets/images/els2.png";
import els3 from "../assets/images/els3.png";
import els4 from "../assets/images/els4.png";
import els5 from "../assets/images/els5.png";

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
              {/* <div>
                <i>1. </i>
                <span>Raise $2M for Liquidity Pool & Exchange Listing</span>
              </div> */}
              <div>
                <i>1. </i>
                <span>
                  Once LP is locked, utilise funds through FIAT & Tokens to fund
                  website, marketing & strategic partnering.
                </span>
              </div>
              <div>
                <i>2. </i> <span>Organically grow the community.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mapArr3">
          <div className="custom-map">
            <div className="map-head">
              <div className="head-txt">
                <div className="project">
                  Project <img src={phillipines} className="desktop_flag" />
                  <img src={phillipines_mobile} className="mobile_flag" />
                </div>
                <div className="phillipines">Phillipines</div>
              </div>
            </div>
            <div className="project-content">
              <div>
                <p>
                  Disaster Preparedness: Enhance disaster resilience through
                  early warning systems, infrastructure upgrades, and community
                  preparedness initiatives to mitigate the impact of natural
                  disasters. Sustainable
                </p>
                <img src={phill_1} />
              </div>
              <div>
                <p>
                  Tourism, is about exploring new places while also uplifting
                  local communities through meaningful engagement and support.
                  Tourism can also be a powerful catalyst for aiding communities
                  in need by fostering economic growth, preserving cultural
                  heritage, and enhancing infrastructure development to those in
                  need.
                </p>
                <img src={phill_2} />
              </div>
              <div>
                <p>
                  Rural development, in countries is crucial for fostering
                  sustainable growth, empowering local communities, and
                  alleviating poverty through targeted investments in
                  infrastructure, education, and healthcare. not only does
                  Investing in rural development in other countries it is
                  essential as it promotes equitable economic opportunities,
                  strengthens local infrastructure, and empowers communities to
                  thrive, thereby contributing to global stability and
                  prosperity.
                </p>
                <img src={phill_3} />
              </div>
              <div>
                <p>
                  Education Reform is not only just a moral imperative it's a
                  strategic investment in human potential that can break the
                  cycle of poverty and also foster innovation, and empower
                  individuals to drive sustainable development within their
                  communities and beyond Bringing education to people in need is
                  worth it because it empowers individuals to break the cycle of
                  poverty, fosters economic growth, and cultivates informed and
                  engaged citizens who can positively contribute to society.
                </p>
                <img src={phill_4} />
              </div>
              <div>
                <p>
                  Implementing anti-corruption measures is crucial as they
                  strengthen transparency, uphold the rule of law, and foster
                  investor confidence, ultimately paving the way for equitable
                  development and the eradication of graft and corruption and
                  not only that Anti-corruption measures are essential because
                  they will promote integrity, accountability, and fairness,
                  fostering trust in institutions and creating a level playing
                  field for all members of society in everyway shape and form.
                </p>
                <img src={phill_5} />
              </div>
            </div>
          </div>
        </div>

        <div className="mapArr3">
          <div className="custom-map">
            <div className="map-head">
              <div className="head-txt">
                <div className="project_n">
                  Project <img src={nigeria} className="desktop_flag" />
                  <img src={nigeria_mobile} className="mobile_flag" />
                </div>
                <div className="nigeria">Nigeria</div>
              </div>
            </div>
            <div className="project-content">
              <div>
                <img src={nig_1} />
                <p>
                  Not only would Infrastructure development around the world
                  help a lot to those in need it has become a cornerstone of
                  economic progress, facilitating connectivity, trade, and
                  sustainable growth for diverse communities. Investing in
                  infrastructure development is essential to foster economic
                  resilience, improve quality of life, and ensure long-term
                  sustainability for present and future generations.
                </p>
              </div>
              <div>
                <img src={nig_2} />
                <p>
                  Economic diversification around the world is increasingly
                  recognized as a strategic imperative, enabling nations to
                  mitigate risks, foster innovation, and build robust, inclusive
                  economies resilient to global fluctuations. Economic
                  diversification is not only a good thing to partake in it
                  helps a lot of those in 3rd world countries in need. Economic
                  diversification around the world is crucial as it reduces
                  dependency on a single industry, fosters innovation, and
                  enhances resilience against economic shocks, ultimately
                  leading to sustainable growth and prosperity for nations and
                  their citizens.
                </p>
              </div>
              <div>
                <img src={nig_3} />
                <p>
                  Education reform in Nigeria is imperative to address systemic
                  challenges, enhance access to quality education for all, and
                  empower the next generation with the skills and knowledge
                  necessary to thrive in a rapidly evolving global landscape.
                  Bringing education reform to Nigeria is vital to unlock the
                  nation's human potential, foster economic development, and
                  ensure a brighter future for its citizens by equipping them
                  with the skills and knowledge.
                </p>
              </div>
              <div>
                <img src={nig_4} />
                <p>
                  Governance and accountability are essential pillars of a
                  healthy democracy, fostering transparency, trust in
                  institutions, and effective decision-making processes,
                  ultimately leading to equitable development and the well-being
                  of society as a whole. Governance and accountability promote
                  transparency in decision-making processes, ensuring that
                  government actions are open to scrutiny by citizens and
                  stakeholders. Transparent governance builds trust and
                  confidence in institutions. This oversight helps prevent
                  corruption and misuse of power, promoting efficient and
                  ethical governance.
                </p>
              </div>
              {/* <div>
                <p>
                  Governance and Accountability: Strengthen governance
                  structures and promote transparency to build trust and attract
                  investment for long-term development.
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mapArr3">
          <div className="custom-map">
            <div className="map-head">
              <div className="head-txt">
                <div className="project_n">
                  Project <img src={el_salvador} className="desktop_flag" />
                  <img src={el_salvador_mobile} className="mobile_flag" />
                </div>
                <div className="el_salvador">El Salvador</div>
              </div>
            </div>
            <div className="project-content">
              <div>
                <p>
                  Roads, ports, and telecommunications are the main players in
                  stimulating economic growth within El Salvador. Infrastructure
                  development will be a principal investment in furthering the
                  already growing economies efficiency and improving financial
                  stability. Outside investors are more likely to focus on
                  building within El Salvador when the ports, trading routes,
                  and infrastructure are developed and sustained. Ultimately
                  leading to more jobs and increased overall productivity. Along
                  with these benefits schools receive additional funding, as
                  well as hospitals and other utilities.
                </p>
                <img src={els1} />
              </div>
              <div>
                <p>
                  Diversification of funds will be required in order to lead
                  industries that are preexisting to create new practices, more
                  efficient than before, that pave a new highway of innovation
                  for the country. Industries will have new opportunity to
                  prosper and grow in a healthy dynamic that everyone can
                  benefit from. This will reinforce the already building
                  stability behind the jobs created from the booming
                  infrastructure. As outside investors tap into the new ways
                  that El Salvador can trade goods, with more efficient stride
                  and innovation, the funds will of course also spread
                  throughout the country to schools, healthcare facilities, and
                  more.
                </p>
                <img src={els2} />
              </div>
              <div>
                <p>
                  Another key to El Salvador flourishing financially as well as
                  culturally will be a focus on sustainable urbanization.
                  Enhancing the quality of living of the country's residents
                  returns positive growth within communities near and far.
                  Livable dwelling and access to necessities such as clean
                  water. Air, and energy are extremely important. With a booming
                  economy we must safeguard the natural beauty and health of El
                  Salvador no matter what. Safeguarding materials, resources,
                  and necessities are required to provide endless generations
                  with a home that anyone can have the opportunity to be or do
                  anything they can set their mind to.
                </p>
                <img src={els3} />
              </div>
              <div>
                <p>
                  As new generations are introduced to new ways of learning,
                  developing skills that were previously not available to
                  certain areas will aid in the nourishment of the already
                  developing infrastructure and economy. El Salvador will become
                  a stronger and more resilient country on its own accord.
                  Creators, influencers of all kinds, and innovators will have
                  access to a higher threshold of potential than before. The
                  skills and new ways of contributing to society in return are
                  implemented back into industries, education, infrastructure
                  development, and more. The entire scope of the country's
                  leaders for growing within its own borders is reshaped for new
                  inspiration. Social and economic aspects throughout El
                  Salvador's beautiful landscape will be preserved but improved
                  for every living thing.
                </p>
                <img src={els4} />
              </div>
              <div>
                <p>
                  Corruption throughout the government must be combated at all
                  cost to ensure the healthy sustainability and growth of El
                  Salvador. Thorough practice of accountability and governance
                  is required to promote healthy democratic values and trust
                  throughout institutions and citizens. Transparency amongst
                  leaders as well as individuals only seeks to benefit all
                  Salvadorans in the all inclusive endeavor. Resources will be
                  secure, democratic relations grow, and inclusivity is
                  generated benefitting all Salvadorans.
                </p>
                <img src={els5} />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      </div>
    </Wrapper>
  );
};

export default Aeromap;
