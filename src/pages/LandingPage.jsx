import React from "react";
import {
  Hero,
  Stripe,
  Contract_Addr,
  Aeromap,
  Aeronomics,
  Faq,
  Footer
} from "../components";
import milkyguy from '../assets/images/milkyguy.png';
import Wrapper from '../assets/wrappers/LandingPage'

const LandingPage = () => {
  return (
    <Wrapper>
      <Hero />
      <div className="milkyguy">
        <img src={milkyguy} />
        <h1>Aero</h1>
      </div>
      <Stripe />
      <Contract_Addr />
      <Aeromap />
      <Aeronomics />
      <Faq />
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
