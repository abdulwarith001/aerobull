import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/ContractProgress";
import Web3 from "web3";
import axios from "axios";

const Contract_Addr = () => {
  const [balance, setBalance] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isWeb3, setIsWeb3] = useState(false);

  useEffect(() => {
    const initWeb3 = async () => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setIsWeb3(true)
      try {
        const ethBalance = await web3Instance.eth.getBalance(
          "0x979E73dfa7B9bF414e962747971809c00a0683b2"
        );
        const ethBalanceInEth = web3Instance.utils.fromWei(ethBalance, "ether");

        // Fetch the current ETH to USD exchange rate
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const ethToUsdRate = response.data.ethereum.usd;

        // Convert the balance to USD and round up to the nearest whole number
        const balanceInUsd = Math.ceil(ethBalanceInEth * ethToUsdRate);
        const percentageBalance = Math.ceil((balanceInUsd / 100000) * 100);
        setBalance(balanceInUsd);
        setPercentage(percentageBalance);
      } catch (error) {
        console.error(
          "Error connecting to blockchain or fetching exchange rate",
          error
        );
      }
      }else{
        setIsWeb3(false)
      }
    };

    initWeb3();
  }, []);

  return (
   isWeb3 && (
     <Wrapper width={percentage}>
      <div className="inputWrapper">
        <div className="header">
          <span>${balance.toLocaleString()}</span> raised of{" "}
          <span>$100,000</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar" id="progress-bar"></div>
        </div>
        <div className="footer">
          <p>$0</p>
          <p>$100,000</p>
        </div>
      </div>
    </Wrapper>
   )
  );
};

export default Contract_Addr;
