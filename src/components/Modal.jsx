import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Modal";
import cancle from "../assets/images/cancle.png";

export default function WinnerErrorModal({ isOpen, setIsOpen }) {
  const [days, setDays] = useState(7);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Decrease seconds
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        // Decrease minutes
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Decrease hours
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            // Decrease days
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }
      }
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);

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
                <h2>{formatTime(days)}</h2>
                <p>Days</p>
              </div>

              <h3>:</h3>

              <div className="timer">
                <h2>{formatTime(hours)}</h2>
                <p>Hours</p>
              </div>

              <h3>:</h3>

              <div className="timer">
                <h2>{formatTime(minutes)}</h2>
                <p>Minutes</p>
              </div>

              <h3>:</h3>

              <div className="timer">
                <h2>{formatTime(seconds)}</h2>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
