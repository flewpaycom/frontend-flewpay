"use client";
import CardStats from "@/components/user/dashboard/cardStats";
import VerticalMenu from "@/components/user/dashboard/menu";
import { useEnsName, useAccount } from "wagmi";

const Dashboard = () => {
	const { address } = useAccount();

	const { data: ensName } = useEnsName({ address });

	return (
		<div className="p-5">
			<section className="rounded-3xl bg-[#fbfbfb] max-w-4xl mx-auto border-2 h-screen p-5 mt-10 relative">
				{/* Menú Vertical */}
				<div className="transition-all ease-in-out duration-300 fixed bottom-4 left-0 right-0 flex justify-center items-center lg:bottom-auto lg:left-[-80px] lg:top-0 lg:absolute  lg:justify-start lg:items-start ">
					<VerticalMenu />
				</div>

				{/* Contenido Principal */}
				<div className="flex items-center">
					<img src="/images/flew-pay.png" alt="FlewPay Logo" className="w-40" />
				</div>
				<div className="divider"></div>
				<h2 className="text-2xl font-bold mt-5 truncate">Bienvenido/a, {ensName ? ensName : address} 👋</h2>
				<div className="divider">
					<p className="text-gray-500">Account Stats</p>
				</div>
				<aside>
					<CardStats />
				</aside>
			</section>
		</div>
	);
};

export default Dashboard;
