import React, { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../assets/wrappers/Presale";
import eth_tickers from "../assets/images/eth_tickers.png";
import arb_tickers from "../assets/images/arb_tickers.png";
import presale from "../assets/images/presale.png";
import up_arr from "../assets/images/up_arr.png";
import down_arr from "../assets/images/down_arr.png";
import Web3 from "web3";
import SaleContractABI from "../ARB.json";
import Presale_Contract_Addr from "../components/Presale_Contract_Addr";
import HowTo from "../components/HowTo";

const contractAddress = "0xa245033e8ae5168c177cd5959f721ed5b15d0f8d";
const Presale = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState("");
  const [usdValue, setUsdValue] = useState(1);
  const [ethValue, setEthValue] = useState(0);
  const [arbValue, setArbValue] = useState(1e6);
  const [multipleIndex, setMultipleIndex] = useState(0);
  const [error, setError] = useState(null);
  const multiples = [1, 5, 10, 15];
  const baseValue = 1e6; // 1 USD = 1M ARB
  const desiredNetworkId = 8453n; // Replace with your desired network ID
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        try {
          // const accounts = await web3Instance.eth.requestAccounts();
          // const balance = await web3Instance.eth.getBalance(accounts[0]);
          // setBalance(web3Instance.utils.fromWei(balance, "ether"));

          const instance = new web3Instance.eth.Contract(
            SaleContractABI.abi,
            contractAddress
          );
          setContract(instance);
          // checkNetwork();
        } catch (error) {
          console.error("Error connecting to blockchain", error);
        }
      } else {
        console.error("Ethereum wallet is not installed");
      }
    };

    initWeb3();
  }, []);

const convertUsdToEth = (usd) => {
  // Implement your conversion logic here
  // Example conversion rate: 1 USD = 0.0004 ETH
  return usd * 0.0004; // Adjust as needed
};

const calculateArbValue = (usd) => {
  switch (usd) {
    case 1:
      return 1e6;
    case 5:
      return 10e6;
    case 10:
      return 50e6;
    case 15:
      return 75e6;
    default:
      return usd * baseValue;
  }
};

const incrementMultiples = () => {
  setMultipleIndex((prevIndex) => {
    if (prevIndex === multiples.length - 1) return prevIndex;
    const newIndex = prevIndex + 1;
    const usd = multiples[newIndex];
    setUsdValue(usd);
    const eth = convertUsdToEth(usd);
    setEthValue(eth);
    setArbValue(calculateArbValue(usd));
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
    setArbValue(calculateArbValue(usd));
    setError(null);
    return newIndex;
  });
};

const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      setIsConnected(true);
      // Initialize contract here
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Please install MetaMask!");
  }
};

const disconnectWallet = () => {
  setIsConnected(false);
  setAddress("");
};

const buyTokensInUSD = async (e) => {
  e.preventDefault();
  try {
    if (typeof window.ethereum === "undefined") {
      alert("Please continue this transaction on your desktop or dApp browser");
      return;
    }
    if (!isConnected) {
      alert("Wallet not connected");
      return;
    }
    if (!contract) {
      alert("Please reload the browser. Contract not yet loaded!");
      return;
    }

    const netId = await web3.eth.net.getId();

    if (netId !== desiredNetworkId) {
      alert(
        "Please switch your account to the BASE network to continue this transaction"
      );
      return;
    }

    const usdAmount = parseFloat(usdValue);
    if (isNaN(usdAmount) || usdAmount <= 0) {
      alert("Please enter a valid USD amount.");
      return;
    }

    const ethAmount = Web3.utils.toWei(ethValue.toString(), "ether");
    if (ethAmount <= 0) {
      alert("Calculated ETH amount must be greater than zero.");
      return;
    }

    const beneficiary = address;

    // Check if the user has sufficient balance
    if (parseFloat(balance) < parseFloat(ethValue)) {
      alert(
        "Insufficient balance. Please ensure you have enough ETH to complete the transaction."
      );
      return;
    }

    let gasPrice;
    try {
      gasPrice = await web3.eth.getGasPrice();
    } catch (error) {
      alert("Error fetching gas price. Please try again later.");
      return;
    }

    const gasEstimate = await contract.methods
      .buyTokens(beneficiary)
      .estimateGas({
        from: address,
        value: ethAmount,
      });

    console.log(`ethAmount: ${ethAmount}`);
    console.log(`gasEstimate: ${gasEstimate}`);
    console.log(`gasPrice: ${gasPrice}`);

    const transaction = await contract.methods.buyTokens(beneficiary).send({
      from: address,
      value: ethAmount,
      gas: gasEstimate,
      gasPrice: gasPrice,
    });

    alert(
      "Tokens bought successfully!\\nTransaction hash: " +
        transaction.transactionHash
    );
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};

const handleUsdInputChange = (e) => {
  const value = parseFloat(e.target.value);
  setUsdValue(value);
  const eth = convertUsdToEth(value);
  setEthValue(eth);
  setArbValue(calculateArbValue(value));
};

  return (
    <Wrapper>
      <div className="header-container">
        {isConnected ? (
          <button onClick={() => disconnectWallet()}>
            {address.slice(0, 12) + "..."}
          </button>
        ) : (
          <button onClick={() => connectWallet()}>Connect Wallet</button>
        )}
      </div>
      <div className="buy_form">
        <h1>BUY $ARB</h1>
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
                      readOnly
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

          <div className="form2"></div>
        </div>
      </div>

      <Presale_Contract_Addr />
      <HowTo />
      <div className="footer-img">
        <img src={presale} alt="presale" />
      </div>
    </Wrapper>
  );
};

export default Presale;
