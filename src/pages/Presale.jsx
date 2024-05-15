import React, { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../assets/wrappers/Presale";
import eth_tickers from "../assets/images/eth_tickers.png";
import arb_tickers from "../assets/images/arb_tickers.png";
import presale from "../assets/images/presale.png";
import info_icon from "../assets/images/info_icon.png";
import up_arr from "../assets/images/up_arr.png";
import down_arr from "../assets/images/down_arr.png";
import Web3 from "web3";
import SaleContractABI from "../ARB.json";

const contractAddress = "0x979E73dfa7B9bF414e962747971809c00a0683b2";

const Presale = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [usdValue, setUsdValue] = useState("");
  const [ethValue, setEthValue] = useState("");
  const [arbValue, setArbValue] = useState("");
  const [error, setError] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [ethConversionRate, setEthConversionRate] = useState(null);
  const [multipleIndex, setMultipleIndex] = useState(-1);
  const baseValue = 200;

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      setIsWalletConnected(true);
      setAccounts(accounts);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Something went wrong while connecting, try again!");
    }
  };

  const fetchEthConversionRate = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      return response.data.ethereum.usd;
    } catch (error) {
      console.error("Error fetching ETH conversion rate:", error);
      return null;
    }
  };

  const convertUsdToEth = (value) => {
    if (!ethConversionRate) {
      setError("Error fetching conversion rate. Please try again later.");
      return null;
    }
    const ethValue = value / ethConversionRate;
    return ethValue.toFixed(6);
  };

  const handleUsdInputChange = (e) => {
    const usd = parseFloat(e.target.value);
    if (isNaN(usd)) {
      setError("Please enter a valid number.");
      setUsdValue("");
      setEthValue("");
      setArbValue("");
      return;
    }
    if (usd > 100) {
      setError("Maximum value exceeded. Max is $100");
      return;
    }
    if (usd < 1) {
      setError("Minimum value is $1.");
      return;
    }
    setError(null);
    setUsdValue(usd);
    const eth = convertUsdToEth(usd);
    if (eth === null) {
      return;
    }
    setEthValue(eth);
    const arb = usd * baseValue;
    setArbValue(arb);
  };

  const multiples = [5, 10, 20, 40, 60, 80, 100, 200, 300, 400, 500];

  const incrementMultiples = () => {
    if (multipleIndex >= multiples.length - 1) return;

    setMultipleIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      const usd = multiples[newIndex];
      setUsdValue(usd);
      const eth = convertUsdToEth(usd);
      setEthValue(eth);
      const arb = usd * baseValue;
      setArbValue(arb);
      setError(null);
      return newIndex;
    });
  };

  const decrementMultiples = () => {
    if (multipleIndex === 0) return;

    setMultipleIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      const usd = multiples[newIndex];
      setUsdValue(usd);
      const eth = convertUsdToEth(usd);
      setEthValue(eth);
      const arb = usd * baseValue;
      setArbValue(arb);
      setError(null);
      return newIndex;
    });
  };

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          const accs = await web3Instance.eth.getAccounts();
          setAccounts(accs);
          setWalletAddress(accs[0]);

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

    const fetchInitialConversionRate = async () => {
      const rate = await fetchEthConversionRate();
      setEthConversionRate(rate);
    };

    initWeb3();
    fetchInitialConversionRate();
  }, []);

  const checkBalance = async (ethAmount) => {
    if (!web3 || !walletAddress) return false;
    const balanceWei = await web3.eth.getBalance(walletAddress);
    const balanceEth = web3.utils.fromWei(balanceWei, "ether");
    return parseFloat(balanceEth) >= parseFloat(ethAmount);
  };

  const buyTokensInUSD = async (e) => {
    e.preventDefault();
    if (!isWalletConnected) {
      alert("Wallet not connected...");
      return;
    }
    if (!contract) {
      console.error("Smart contract not loaded");
      return;
    }
    const usdAmount = parseFloat(usdValue);
    const ethAmount = web3.utils.toWei(ethValue.toString(), "ether");

    const hasEnoughBalance = await checkBalance(ethValue);
    if (!hasEnoughBalance) {
      alert("Insufficient balance in wallet.");
      return;
    }

    try {
      await contract.methods
        .buyTokensInUSD(usdAmount)
        .send({ value: ethAmount, from: walletAddress });
      console.log("Tokens bought successfully");
    } catch (error) {
      alert(error.message);
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
          YOU CAN ONLY BUY IN <span>$5</span> INCREMENTS
        </h3>
        <div className="form-container">
          <div>
            <form className="form" onSubmit={buyTokensInUSD}>
              <div className="form-item">
                {error && <p className="error-txt">{error}</p>}
                <label>From</label>
                <div className="input-wrapper">
                  <div>
                    <input
                      type="number"
                      placeholder="ENTER USD"
                      required
                      value={usdValue}
                      onChange={handleUsdInputChange}
                    />
                    <p>Ex. Multiples of $5</p>
                  </div>
                  <div className="top-and-down">
                    <div>
                      <img
                        src={up_arr}
                        alt="up icon"
                        onClick={() => incrementMultiples()}
                      />
                      <img
                        src={down_arr}
                        alt="down icon"
                        onClick={() => decrementMultiples()}
                      />
                    </div>
                    <div className="input-txt">
                      <img src={eth_tickers} alt="eth tickers" />
                      ETH
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-item">
                <label>To</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="ARB Value"
                    readOnly
                    value={arbValue}
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
