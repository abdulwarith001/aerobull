import React from "react";
import {
  Hero,
  Stripe,
  Contract_Addr,
  Aeromap,
  Aeronomics,
  Faq,
  Footer,
  MoonAero,
  Whitepaper,
  Team
} from "../components";
import aero_back from '../assets/images/aero_bg.png';
import mobile_hero from '../assets/images/mobile_hero.png';
import Wrapper from '../assets/wrappers/LandingPage'

const LandingPage = () => {
  return (
    <Wrapper>
      <Hero />
      {/* <div className="milkyguy">
        <img src={aero_back} className="desktop" />
        <img src={mobile_hero} className="mobile" />
        <h1>Aero</h1>
      </div> */}
      <Stripe />
      <Contract_Addr />
      <Whitepaper/>
      <Aeromap />
      <Aeronomics />
      <Faq />
      <Team/>
      <MoonAero />
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
