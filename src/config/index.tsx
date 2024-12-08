import { type SIWESession, type SIWEVerifyMessageArgs, type SIWECreateMessageArgs, createSIWEConfig, formatMessage } from "@reown/appkit-siwe";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { getCsrfToken, getSession, signIn, signOut } from "next-auth/react";

import { cookieStorage, createStorage } from "wagmi";
import { arbitrum, AppKitNetwork, arbitrumSepolia } from "@reown/appkit/networks";
import { getAddress } from "viem";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

export const metadata = {
	name: "Flewpay",
	description: "Flewpay is a decentralized finance platform",
	url: "https://flewpay.com",
	icons: ["https://flewpay.com/flew-logo-v1.svg"],
};

export const chains: [AppKitNetwork, ...AppKitNetwork[]] = [arbitrum, arbitrumSepolia];

export const wagmiAdapter = new WagmiAdapter({
	networks: chains,
	storage: createStorage({
		storage: cookieStorage,
	}),
	projectId,
	ssr: true,
});

const normalizeAddress = (address: string): string => {
	try {
		const splitAddress = address.split(":");
		const extractedAddress = splitAddress[splitAddress.length - 1];
		const checksumAddress = getAddress(extractedAddress);
		splitAddress[splitAddress.length - 1] = checksumAddress;
		const normalizedAddress = splitAddress.join(":");

		return normalizedAddress;
	} catch (error) {
		console.error(error);
		return address;
	}
};

export const siweConfig = createSIWEConfig({
	getMessageParams: async () => ({
		domain: typeof window !== "undefined" ? window.location.host : "",
		uri: typeof window !== "undefined" ? window.location.origin : "",
		chains: chains.map((chain: AppKitNetwork) => parseInt(chain.id.toString())),
		statement: "Please sign with your account",
	}),
	createMessage: ({ address, ...args }: SIWECreateMessageArgs) => formatMessage(args, normalizeAddress(address)),
	getNonce: async () => {
		const nonce = await getCsrfToken();
		if (!nonce) {
			throw new Error("Failed to get nonce!");
		}

		return nonce;
	},
	getSession: async () => {
		const session = await getSession();
		if (!session) {
			return null;
		}
		if (typeof session.address !== "string" || typeof session.chainId !== "number") {
			return null;
		}

		return { address: session.address, chainId: session.chainId } satisfies SIWESession;
	},
	verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
		try {
			const success = await signIn("credentials", {
				message,
				redirect: false,
				signature,
			});

			return Boolean(success?.ok);
		} catch (error) {
			console.error(error);
			return false;
		}
	},
	signOut: async () => {
		try {
			await signOut();
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	},
});
