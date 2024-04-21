import React, { useState, useMemo, useCallback } from "react";
import Wrapper from "../assets/wrappers/Faq";
import arrow_down from "../assets/images/arrow_down.png";
import arrow_up from "../assets/images/arrow_up.png";

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
                <img src={arrow_up} />
              ) : (
                <img src={arrow_down} />
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
      "Lorem ipsum is good and ak shw jji kwu jsoakjkwai iiwye iei apodb eye jeiux iedb owyrb oqhs",
  },
  {
    question: "WHAT CHAIN IS <span>AEROBULL</span> BUILT ON?",
    answer:
      "Lorem ipsum is good and ak shw jji kwu jsoakjkwai iiwye iei apodb eye jeiux iedb owyrb oqhs",
  },
  {
    question: "WHERE IS <span>AERO</span> LISTED?",
    answer:
      "Lorem ipsum is good and ak shw jji kwu jsoakjkwai iiwye iei apodb eye jeiux iedb owyrb oqhs",
  },
  {
    question: "HOW TO BUY <span>AERO</span>?",
    answer:
      "Lorem ipsum is good and ak shw jji kwu jsoakjkwai iiwye iei apodb eye jeiux iedb owyrb oqhs",
  },
  {
    question: "WHAT IS <span>AERO</span> TOTAL SUPPLY?",
    answer:
      "Lorem ipsum is good and ak shw jji kwu jsoakjkwai iiwye iei apodb eye jeiux iedb owyrb oqhs",
  },
  {
    question: "IS <span>AERO</span> ON SOCIAL MEDIA?",
    answer:
      "Lorem ipsum is good and ak shw jji kwu jsoakjkwai iiwye iei apodb eye jeiux iedb owyrb oqhs",
  },
];

export default Faq;
