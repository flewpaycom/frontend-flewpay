import React from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { Link } from "next-view-transitions";
import { useLocale } from "next-intl";

const VerticalMenu = () => {
	const locale = useLocale();
	const MENU_OPTIONS = [
		{
			icon: <RiDashboardHorizontalFill className="size-6" />,
			title: "Dashboard",
			url: "/" + locale + "/dashboard/user",
		},
		{
			icon: <MdHistory className="size-6" />,
			title: "Transacciones",
			url: "/" + locale + "/dashboard/user/transactions",
		},
	];

	return (
		<div className="flex xl:flex-col gap-4 rounded-full h-[50px] xl:h-auto xl:w-[60px] justify-center items-center xl:py-2 px-2 glass-buttons border border-solid border-[#E1E4EA] border-opacity-50 shadow backdrop-blur-md">
			{/* Botón superior */}
			<button className="w-12 h-12 rounded-full flex items-center justify-center mb-4 hover:bg-purple-300 transition" title="Flewpay">
				<div className="w-6 h-6 ">
					<img src="/flew-logo-v1.svg" alt="" />
				</div>
			</button>
			<nav className="flex flex-col space-y-6">
				{MENU_OPTIONS.map((option, index) => {
					return (
						<Link href={option.url} key={index} className="size-6 hover:bg-primary rounded-full" title={option.title}>
							{option.icon}
						</Link>
					);
				})}
			</nav>

			{/* Botones inferiores */}
			<div className="mt-auto mb-4 space-y-4">
				<button className="w-10 h-10 flex items-center justify-center hover:text-purple-500" title="Configuración">
					<i className="fas fa-plane"></i>
				</button>
				<button className="w-10 h-10 flex items-center justify-center hover:text-purple-500" title="Configuración">
					<i className="fas fa-sliders-h"></i>
				</button>
			</div>
		</div>
	);
};

export default VerticalMenu;
