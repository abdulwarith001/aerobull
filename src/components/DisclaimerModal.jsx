import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Disclaimer";
import cancle from "../assets/images/cancle.png";
import { useNavigate } from "react-router-dom";

export default function WinnerErrorModal({ isOpen, setIsOpen }) {

  return (
    <Wrapper>
      <div
        className={isOpen ? "show modal" : "hide modal"}
        style={{ overflow: isOpen ? "hidden" : "auto" }}
      >
        <div className="model-content">
          <div className="img_wrapper">
            <img src={cancle} onClick={() => setIsOpen(false)} alt="Close" />
          </div>
          <div className="content">
            <div className="frontImg">Disclaimer!</div>
            <article className="texts">
              <h4>
                Aerobull is the first humanitarian project on the Base network.
                Our project is a community-driven token that is aiming to bridge
                the gap between third-world countries to Defi. As with any
                innovative technology and financial platform, there are inherent
                risks involved with the use and adoption of $ARBL
              </h4>
              <ul className="items">
                <li>
                  Volatility: The cryptocurrency market is highly volatile.
                  Prices of cryptocurrencies can fluctuate widely and can be
                  affected by external factors such as financial, regulatory, or
                  political events. Aerobull tokens may experience periods of
                  extreme price volatility or become illiquid due to market
                  conditions.
                </li>
                <li>
                  Regulatory Changes: Blockchain technology and
                  cryptocurrencies, in general, are subject to regulatory
                  changes in various jurisdictions. Regulatory actions may
                  negatively impact the usability, transferability, or value of
                  $ARBL tokens
                </li>
                <li>
                  Security Risks: Despite efforts to ensure the security of the
                  platform, and also users are susceptible to phishing attacks
                  and other security breaches. Users must take precautions to
                  protect their tokens and personal information.
                </li>
                <li>
                  No Guarantees: $ARBL is built on experimental technology
                  platform and does not guarantee any specific outcomes or
                  returns. Users participate at their own risk and should
                  conduct their own research and seek advice from qualified
                  professionals before making any decisions.
                </li>
                <li>
                  Loss of Funds: Users may lose all or part of their $ARBL
                  tokens due to unforeseen circumstances, technical failures, or
                  vulnerabilities in their wallets
                </li>
                <li>
                  No Liability: The team behind $ARBL and its affiliates shall
                  not be held liable for any direct, indirect, incidental,
                  special, consequential, or punitive damages arising out of the
                  use or inability to use $ARBL for any trading purposes.
                </li>
              </ul>
              <h4 style={{color: 'red', marginBottom: "3em"}}>
                By using $ARBL, you acknowledge and accept these risks. You are
                solely responsible for your actions and decisions when
                interacting with $ARBL on any decentralised platforms listed
              </h4>
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
