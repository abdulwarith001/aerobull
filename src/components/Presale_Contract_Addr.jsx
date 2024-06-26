import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Presale_Contract";
import CopyIcon from "../assets/images/copy.png";
import mobile_copy from "../assets/images/mobile_copy.png";

const Contract_Addr = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const input = document.getElementById("contractAddress");
    input.select();
    document.execCommand("copy");
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Wrapper>
      <h1>Contract address</h1>
      <div className="inputWrapper">
        <input
          id="contractAddress"
          type="text"
          value="0x1Bbb0Cad4Ba02Ff047aa407e6b275f373fc1D134"
          readOnly
        />
        <button onClick={copyToClipboard}>
          <img src={CopyIcon} alt="Copy Icon" className="desktop" />
          <img src={mobile_copy} alt="Copy Icon" className="mobile" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </Wrapper>
  );
};

export default Contract_Addr;
