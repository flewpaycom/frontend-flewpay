"use client";

import { wagmiAdapter, projectId, siweConfig, metadata, chains } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { arbitrum, defineChain } from "@reown/appkit/networks";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
	throw new Error("Project ID is not defined");
}

const orbitNetwork = defineChain({
	id: 28133214008,
	caipNetworkId: "eip155:28133214008",
	chainNamespace: "eip155",

	name: "Orbit FlewPay",
	nativeCurrency: {
		decimals: 18,
		name: "Ether",
		symbol: "ETH",
	},
	rpcUrls: {
		default: {
			http: ["https://a877-152-201-123-55.ngrok-free.app"],
		},
	},
	testnet: true,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const modal = createAppKit({
	adapters: [wagmiAdapter],
	projectId,

	networks: [orbitNetwork, ...chains],
	defaultNetwork: arbitrum,
	siweConfig: siweConfig,
	metadata: metadata,
	features: {
		onramp: true,
	},
});

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
	const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies);

	return (
		<WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</WagmiProvider>
	);
}

export default ContextProvider;
