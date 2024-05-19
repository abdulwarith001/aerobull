import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createWeb3Modal,
  defaultConfig as ethersDefaultConfig,
} from "@web3modal/ethers/react";
import { WagmiConfig } from "wagmi";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const projectId = "99ba00417662aecb6fb030b897854729";

const metadata = {
  name: "test",
  description: "Web3Modal Example",
  url: "https://aerobull.netlify.app",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const baseNetwork = {
  chainId: 8453,
  name: "Base",
  currency: "ETH",
  explorerUrl: "https://basescan.org",
  rpcUrl: "https://mainnet.base.org",
};

const ethersConfig = ethersDefaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  rpcUrl: baseNetwork.rpcUrl,
  defaultChainId: baseNetwork.chainId,
});

const chains = [baseNetwork];

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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <App />
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
);
