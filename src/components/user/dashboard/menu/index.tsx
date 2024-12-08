import React from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { Link } from "next-view-transitions";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const VerticalMenu = () => {
	const locale = useLocale();
	const {} = useRouter();
	const MENU_OPTIONS = [
		{
			icon: <RiDashboardHorizontalFill className="w-6 h-6" />,
			title: "Dashboard",
			url: `/${locale}/dashboard/user`,
		},
		{
			icon: <MdHistory className="w-6 h-6" />,
			title: "Transacciones",
			url: `/${locale}/dashboard/user/transactions`,
		},
	];

	return (
		<div className=" lg:top-20 lg:left-4 flex flex-row lg:flex-col  items-center bg-[#fbfbfb]/20 justify-center backdrop-blur-xl rounded-full shadow border border-gray-500/30 ">
			<div className="flex-row lg:flex-col flex justify-center items-center lg:py-5 lg:px-0 px-5">
				<button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-purple-300 transition duration-300" title="Flewpay" aria-label="Ir al inicio">
					<div className="w-6 h-6">
						<img src="/flew-logo-v1.svg" alt="FlewPay Logo" />
					</div>
				</button>

				<nav className="flex flex-row lg:flex-col gap-4 lg:gap-6 p-2">
					{MENU_OPTIONS.map((option, index) => (
						<Link href={option.url} key={index} className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-purple-300 transition duration-300" title={option.title} aria-label={option.title}>
							{option.icon}
						</Link>
					))}
				</nav>

				{/* Botones inferiores */}
				<div className="flex flex-row lg:flex-col gap-4 lg:gap-6 mt-auto">
					<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-300 transition duration-300" title="Configuración" aria-label="Abrir configuración">
						<i className="fas fa-cog text-lg"></i>
					</button>
					<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-300 transition duration-300" title="Preferencias" aria-label="Abrir preferencias">
						<i className="fas fa-sliders-h text-lg"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default VerticalMenu;
