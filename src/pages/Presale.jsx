import React, { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../assets/wrappers/Presale";
import eth_tickers from "../assets/images/eth_tickers.png";
import arb_tickers from "../assets/images/arb_tickers.png";
import presale from "../assets/images/presale.png";
import up_arr from "../assets/images/up_arr.png";
import down_arr from "../assets/images/down_arr.png";
import Web3 from "web3";
import { ethers } from "ethers";
import SaleContractABI from "../ARB.json";
import ArbTokenABI from "../transferABI.json"; // Import your ARB token ABI here
import { useWeb3Modal } from "@web3modal/ethers/react";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import Presale_Contract_Addr from "../components/Presale_Contract_Addr";

const contractAddress = "0x083a42Bd285AeD1733eC30649109D46a6bF170Ee";
const baseValue = 200;
const multiples = [1, 5, 10, 20, 40, 60, 80, 100, 200, 300, 400, 500];

const Presale = () => {
  const [usdValue, setUsdValue] = useState("");
  const [ethValue, setEthValue] = useState("");
  const [arbValue, setArbValue] = useState("");
  const [error, setError] = useState(null);
  const [ethConversionRate, setEthConversionRate] = useState(null);
  const [multipleIndex, setMultipleIndex] = useState(-1);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [arbContract, setArbContract] = useState(null);
  const [balance, setBalance] = useState(0);

  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  useEffect(() => {
    const initWeb3 = async () => {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      try {
        const accs = await web3Instance.eth.getAccounts();
        const balance = await web3Instance.eth.getBalance(accs[0]);
        setBalance(web3Instance.utils.fromWei(balance, "ether"));
        const abi = SaleContractABI.abi

        if (!abi || !Array.isArray(abi)) {
          throw new Error("Invalid ABI format");
        }

        const instance = new web3Instance.eth.Contract(
          abi,
          contractAddress
        );
        setContract(instance);

        // const arbInstance = new web3Instance.eth.Contract(
        //   ArbTokenABI,
        //   tokenContractAddress
        // );
        // setArbContract(arbInstance);
      } catch (error) {
        console.error("Error connecting to blockchain", error);
      }
    };


    const fetchInitialConversionRate = async () => {
      const rate = await fetchEthConversionRate();
      setEthConversionRate(rate);
    };

    initWeb3();
    fetchInitialConversionRate();
  }, []);

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

const buyTokensInUSD = async (e) => {
  e.preventDefault();
  if (!isConnected) {
    alert("Wallet not connected...");
    return;
  }
   if (typeof window.ethereum === "undefined") {
      const dappUrl = "https://aerobull.netlify.app"; // Replace with your actual dApp URL
      const metaMaskUrl = `https://metamask.app.link/dapp/${dappUrl}`;
      window.location.href = metaMaskUrl;
      return;
    }
  if (!contract) {
    console.error("Smart contract not loaded");
    return;
  }

  const usdAmount = parseFloat(usdValue);
  if (isNaN(usdAmount) || usdAmount <= 0) {
    alert("Please enter a valid USD amount.");
    return;
  }

  // Here, you need to provide the beneficiary address. 
  // For simplicity, let's assume the beneficiary is the connected wallet address.
  const beneficiary = address;

  try {
    const gasEstimate = await contract.methods.buyTokens(beneficiary).estimateGas({
  from: address,
  value: web3.utils.toWei(ethValue.toString(), "ether"),
});
  const transaction = await contract.methods.buyTokens(beneficiary).send({
      from: address,
      value: web3.utils.toWei(ethValue.toString(), "ether"),
       gas: web3.utils.toHex(gasEstimate),
  gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
    });

    // Log transaction details
    // console.log("Transaction hash:", transaction.transactionHash);
    // console.log("Transaction receipt:", transaction);

    alert("Tokens bought successfully!\nTransaction hash: " + transaction.transactionHash);

  } catch (error) {
    console.error("Error during token purchase:", error);
    alert(error.message);
  }
};



  return (
    <Wrapper>
      <div className="header-container">
        {isConnected ? (
          <button onClick={() => open()}>{address.slice(0, 12) + "..."}</button>
        ) : (
          <button onClick={() => open()}>Connect Wallet</button>
        )}
      </div>
      {/* <button onClick={openMetaMask}>Open in MetaMask</button> */}
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

          <div className="form2">
            {/* <div className="item">
              <span>$5</span>
              <span>1,000</span>
            </div>
            <div className="item">
              <span>$10</span>
              <span>2,000</span>
            </div>
            <div className="item">
              <span>$20</span>
              <span>4,000</span>
            </div>
            <div className="item">
              <span>$40</span>
              <span>8,000</span>
            </div>
            <div className="item">
              <span>$60</span>
              <span>12,000</span>
            </div>
            <div className="item">
              <span>max contribution</span>
              <span>500 usd</span>
            </div> */}
          </div>
        </div>
      </div>

      <Presale_Contract_Addr />
      <div className="footer-img">
        <img src={presale} alt="presale" />
      </div>
    </Wrapper>
  );
};

export default Presale;
