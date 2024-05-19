import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createWeb3Modal,
  defaultConfig as ethersDefaultConfig,
} from "@web3modal/ethers/react";
import { WagmiConfig } from "wagmi";
import { arbitrum } from "wagmi/chains";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClient and QueryClientProvider

const projectId = "99ba00417662aecb6fb030b897854729";

const metadata = {
  name: "test",
  description: "Web3Modal Example",
  url: "https://aerobull.netlify.app", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const ethersConfig = ethersDefaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  rpcUrl: "https://cloudflare-eth.com",
  defaultChainId: 1,
});

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const sepolia = {
  chainId: 11155111, // Sepolia chain ID
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: "https://sepolia.infura.io/v3/99ba00417662aecb6fb030b897854729", // Replace with your Infura Project ID
};

const chains = [mainnet, arbitrum, sepolia];

const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  metadata,
});

createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
});

const queryClient = new QueryClient(); // Create a QueryClient instance

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <App />
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
);
