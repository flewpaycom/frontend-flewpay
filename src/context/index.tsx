"use client";

import { wagmiAdapter, projectId, siweConfig, metadata, chains } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { arbitrum } from "@reown/appkit/networks";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
	throw new Error("Project ID is not defined");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const modal = createAppKit({
	adapters: [wagmiAdapter],
	projectId,

	networks: chains,
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
