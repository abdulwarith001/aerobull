import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Modal";
import cancle from "../assets/images/cancle.png";
import { useNavigate } from "react-router-dom";

export default function WinnerErrorModal({ isOpen, setIsOpen }) {
  const navigate = useNavigate()
  const calculateTimeLeft = (targetDateTime) => {
    const difference = new Date(targetDateTime) - new Date();
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
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const targetDateTime = "2024-05-29T11:00:00"; // Example target date and time

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDateTime));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDateTime));
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
            <h1>Presale is live!!!</h1>
            <h4>
              Our highly anticipated presale is now live. Join the presale by
              clicking "Buy ARB" below
            </h4>

            <button onClick={()=> navigate('/presale')}>Buy ARB!!!</button>

            {/* <div className="timer_container">
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
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
