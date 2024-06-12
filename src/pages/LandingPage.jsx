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
  Team,
  ContractProgress
} from "../components";
import Wrapper from '../assets/wrappers/LandingPage'

const LandingPage = () => {
  return (
    <Wrapper>
      <Hero />
      <Stripe />
      {/* <Contract_Addr /> */}
      <Aeronomics />
      {/* <ContractProgress /> */}
      <Whitepaper />
      <Aeromap />
      <Faq />
      <Team />
      <MoonAero />
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
