import React from "react";
import {
  Hero,
  Stripe,
  Contract_Addr,
  BuyArbl,
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
      <Contract_Addr />
      <BuyArbl />
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
