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
  url: "http://localhost:5173", // origin must match your domain & subdomain
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
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const chains = [mainnet, arbitrum];

const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  metadata,
});

createWeb3Modal({
  ethersConfig,
  chains: [mainnet, arbitrum],
  projectId,
  enableAnalytics: true,
});

const queryClient = new QueryClient(); // Create a QueryClient instance

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Wrap your app with QueryClientProvider */}
      <WagmiConfig config={wagmiConfig}>
        <App />
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
);
