import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Contract_Addr";
import CopyIcon from "../assets/images/copy.png";

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
          value="0X33QENIV0NQVRJ1924590557895"
          readOnly
        />
        <button onClick={copyToClipboard}>
          <img src={CopyIcon} alt="Copy Icon" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </Wrapper>
  );
};

export default Contract_Addr;
