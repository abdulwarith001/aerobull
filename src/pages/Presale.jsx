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
const baseValue = 160;
const multiples = [200, 1000, 2000, 3000, 4000, 5000];
const desiredNetworkId = 8453n; // Mainnet ID. Change this to your desired network ID.

const Presale = () => {
  const [usdValue, setUsdValue] = useState("");
  const [ethValue, setEthValue] = useState("");
  const [arbValue, setArbValue] = useState("");
  const [error, setError] = useState(null);
  const [ethConversionRate, setEthConversionRate] = useState(null);
  const [multipleIndex, setMultipleIndex] = useState(-1);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState(null);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  const connectWallet = async () => {
    // if (!isMetaMaskInstalled) {
    //   alert("MetaMask not detected in your browser...");
    //   return;
    // }
    if (!isMetaMaskInstalled) {
      alert("Metamask not detected in your browser...");
      return;
    } else {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const netId = await web3.eth.net.getId();

      if (netId === desiredNetworkId) {
        setIsCorrectNetwork(true);
        setAddress(accounts[0]);
        setIsConnected(true);
        fetchBalance(accounts[0]);
      } else {
        setIsCorrectNetwork(false);
        alert(
          "Please switch your account to the BASE network to connect your wallet"
        );
      }
    }
  };

  const fetchBalance = async (address) => {
    const balanceInWei = await web3.eth.getBalance(address);
    const balanceInEth = web3.utils.fromWei(balanceInWei, "ether");
    setBalance(balanceInEth);
  };

  const disconnectWallet = () => {
    setAddress(null);
    setIsConnected(false);
  };

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        setIsMetaMaskInstalled(true);

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
    try {
      if (typeof window.ethereum === "undefined") {
        alert(
          "Please continue this transaction on your desktop or dApp browser"
        );
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

      const transaction = await contract.methods.buyTokens(beneficiary).send({
        from: address,
        value: ethAmount,
        gas: gasEstimate,
        gasPrice: gasPrice,
      });

      alert(
        "Tokens bought successfully!\nTransaction hash: " +
          transaction.transactionHash
      );
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
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
