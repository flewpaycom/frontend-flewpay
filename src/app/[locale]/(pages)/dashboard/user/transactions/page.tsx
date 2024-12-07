"use client";
import VerticalMenu from "@/components/user/dashboard/menu";
import { useEnsName, useAccount } from "wagmi";

const Dashboard = () => {
	const { address } = useAccount();
	const { data: ensName } = useEnsName({ address });
	return (
		<div className="relative">
			<div className="absolute">
				<div className="sticky flex top-[80px] gap-4 flex-row xl:flex-col items-center xl:-translate-x-[calc(-470%)] xl:w-[60px] pointer-events-auto xl:mr-16">
					<VerticalMenu />
				</div>
			</div>
			<section className="rounded-2xl bg-[#fbfbfb] max-w-6xl mx-auto border-2 h-screen p-5 my-20 top-[80px]">
				<div className="flex items-center">
					<img src="/images/flew-pay.png" alt="" className="w-40" />
				</div>
				<div className="divider"></div>
				<h2 className="text-2xl font-bold mt-5">Bienvenido/a Transacciones, {ensName}</h2>
			</section>
		</div>
	);
};

export default Dashboard;
