import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ContextProvider from "@/context";
import { headers } from "next/headers";
import { ViewTransitions } from "next-view-transitions";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Flewpay",
	description: "Conectando a Latinoamérica, un pago a la vez",
	keywords: "flewpay, pagos, latinoamérica, blockchain, ethereum, wagmi",
	abstract: "Conectando a Latinoamérica, un pago a la vez",
	applicationName: "Flewpay",
	robots: "index, follow",
	metadataBase: new URL("https://flewpay.com"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookies = headers().get("cookie");
	return (
		<ViewTransitions>
			<html lang="es" data-theme="flewPay">
				<ContextProvider cookies={cookies}>
					<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
				</ContextProvider>
			</html>
		</ViewTransitions>
	);
}
