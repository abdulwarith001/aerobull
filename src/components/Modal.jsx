import React from "react";
import Wrapper from "../assets/wrappers/Modal";
import cancle from '../assets/images/cancle.png'
export default function WinnerErrorModal({ isOpen, setIsOpen }) {
  return (
    <Wrapper>
      <div className={isOpen ? "show modal" : "hide"}>
        <div className="model-content">
          <div className="img_wrapper">
            <img src={cancle} />
          </div>
          <div className="content">
            <h1>Presale</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
