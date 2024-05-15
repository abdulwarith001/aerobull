import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Presale";
import eth_tickers from "../assets/images/eth_tickers.png";
import arb_tickers from "../assets/images/arb_tickers.png";
import presale from "../assets/images/presale.png";
import info_icon from "../assets/images/info_icon.png";
import Web3 from "web3";
import SaleContractABI from "../ARB.json"; // Ensure this is the correct path to your ABI JSON file

const contractAddress = "0x979E73dfa7B9bF414e962747971809c00a0683b2"; // Ensure this is the correct address of your deployed contract

const Presale = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [ethValue, setEthValue] = useState("");
  const [arbValue, setArbValue] = useState("");
  const [error, setError] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const baseValue = 200;

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      setIsWalletConnected(true);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Something went wrong while connecting, try again!");
    }
  };

  const convertEthToArb = (value) => {
    setEthValue(value);
    if (value > 100) {
      setError("Maximum value exceeded. Max is $100");
      return;
    }
    if (value < 1) {
      setError("Minimum value is $1.");
      return;
    }
    const convertedValue = value * baseValue;
    setArbValue(convertedValue);
    setError(null);
  };

  const convertArbToEth = (value) => {
    setArbValue(value);
    const convertedValue = value / baseValue;
    setEthValue(convertedValue);
  };

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          await window.ethereum.enable();
          const accs = await web3Instance.eth.getAccounts();
          setAccounts(accs);

          // Debug logging for ABI and contractAddress
          console.log("ABI:", SaleContractABI);
          console.log("Contract Address:", contractAddress);

          if (!SaleContractABI || !Array.isArray(SaleContractABI)) {
            throw new Error("Invalid ABI format");
          }

          const instance = new web3Instance.eth.Contract(
            SaleContractABI,
            contractAddress
          );
          setContract(instance);
        } catch (error) {
          console.error("Error connecting to blockchain", error);
        }
      }
    };
    initWeb3();
  }, []);

  const buyTokens = async (e) => {
    e.preventDefault();
    if (!contract) {
      console.error("Smart contract not loaded");
      return;
    }
    const weiAmount = web3.utils.toWei(ethValue.toString(), "ether"); // Convert ethValue to wei
    try {
      await contract.methods
        .buyTokens(accounts[0])
        .send({ value: weiAmount, from: accounts[0] });
      console.log("Tokens bought successfully");
    } catch (error) {
      console.error("Error buying tokens", error);
    }
  };

  return (
    <Wrapper>
      <div className="header-container">
        {isWalletConnected ? (
          <button>{walletAddress.slice(0, 12) + "..."}</button>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
      </div>

      <div className="buy_form">
        <h1>BUY $ARB</h1>
        <h3>
          <img src={info_icon} alt="info icon" />
          YOU CAN ONLY BUY IN <span>$10</span> INCREMENTS
        </h3>
        <div className="form-container">
          <div>
            <form className="form" onSubmit={buyTokens}>
              <div className="form-item">
                {error && <p className="error-txt">{error}</p>}
                <label>From</label>
                <div className="input-wrapper">
                  <div>
                    <input
                      type="text"
                      placeholder="ENTER USD"
                      required
                      value={ethValue}
                      onChange={(e) => convertEthToArb(e.target.value)}
                    />
                    <p>Ex.$10,$20..(ETH Equivalent)</p>
                  </div>
                  <div className="input-txt">
                    <img src={eth_tickers} alt="eth tickers" />
                    ETH
                  </div>
                </div>
              </div>
              <div className="form-item">
                <label>To</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="ENTER ARB"
                    required
                    value={arbValue}
                    onChange={(e) => convertArbToEth(e.target.value)}
                  />
                  <div className="input-txt">
                    <img src={arb_tickers} alt="arb tickers" />
                    ARB
                  </div>
                </div>
              </div>
              <button type="submit">BUY</button>
            </form>
          </div>

          <div className="form2">
            <div className="item">
              <span>token name</span>
              <span>Aerobull</span>
            </div>
            <div className="item">
              <span>token symbol</span>
              <span>$arb</span>
            </div>
            <div className="item">
              <span>decimal</span>
              <span>18</span>
            </div>
            <div className="item">
              <span>token for eth</span>
              <span>250,000</span>
            </div>
            <div className="item">
              <span>min contribution</span>
              <span>0.1 eth</span>
            </div>
            <div className="item">
              <span>max contribution</span>
              <span>0.5 eth</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-img">
        <img src={presale} alt="presale" />
      </div>
    </Wrapper>
  );
};

export default Presale;
