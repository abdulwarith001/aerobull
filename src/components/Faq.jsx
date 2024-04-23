import React, { useState, useMemo, useCallback } from "react";
import Wrapper from "../assets/wrappers/Faq";
import arrow_down from "../assets/images/arrow_down.png";
import arrow_up from "../assets/images/arrow_up.png";
import mobile_arr_up from "../assets/images/mobile_arr_up.png";
import mobile_arr_down from "../assets/images/mobile_arr_down.png";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = useCallback((index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  // Memoize the faqData array
  const memoizedFaqData = useMemo(() => faqData, []);

  return (
    <Wrapper>
      <h1>Faq</h1>

      <div className="faq_wrapper">
        {memoizedFaqData.map((faq, index) => (
          <div className="faq" key={index}>
            <div className="question" onClick={() => handleToggle(index)}>
              <p dangerouslySetInnerHTML={{ __html: faq.question }}></p>
              {openIndex === index ? (
                <>
                  <img src={arrow_up} className="desktop" />
                  <img src={mobile_arr_up} className="mobile" />
                </>
              ) : (
                   <>
                  <img src={arrow_down} className="desktop" />
                  <img src={mobile_arr_down} className="mobile" />
                </>
              )}
            </div>
            {openIndex === index && (
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const faqData = [
  {
    question: "WHO IS <span>AEROBULL</span>?",
    answer:
      "Aerobull is a community driven project that is aiming the gap between third-world countries and Defi through humanitarian efforts",
  },
  {
    question: "WHAT CHAIN IS <span>AEROBULL</span> BUILT ON?",
    answer: "Aerobull is built on Base",
  },
  {
    question: "WHERE IS <span>AERO</span> LISTED?",
    answer: "Coming soon….",
  },
  {
    question: "HOW TO BUY <span>AERO</span>?",
    answer: "Coming soon….",
  },
  {
    question: "WHAT IS <span>AERO</span> MAX SUPPLY?",
    answer: "Aerobull Max Supply is 1 Billion Tokens, ever.",
  },
  {
    question: "IS <span>AERO</span> ON SOCIAL MEDIA?",
    answer: "Aerobull is currently on Discord & Twitter",
  },
];

export default Faq;
