import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Modal";
import cancle from "../assets/images/cancle.png";

export default function WinnerErrorModal({ isOpen, setIsOpen }) {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-29") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

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
            <h1>Presale</h1>
            <h4>WE ARE COMING SOON</h4>

            <div className="timer_container">
              <div className="timer">
                <h2>{formatTime(timeLeft.days)}</h2>
                <p>Days</p>
              </div>

              <h3>:</h3>

              <div className="timer">
                <h2>{formatTime(timeLeft.hours)}</h2>
                <p>Hours</p>
              </div>

              <h3>:</h3>

              <div className="timer">
                <h2>{formatTime(timeLeft.minutes)}</h2>
                <p>Minutes</p>
              </div>

              <h3>:</h3>

              <div className="timer">
                <h2>{formatTime(timeLeft.seconds)}</h2>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
