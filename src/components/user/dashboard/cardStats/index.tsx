"use client";

import { SiNfc } from "react-icons/si";
import { FaRegCreditCard, FaPlus, FaArrowUp, FaArrowsLeftRight, FaList } from "react-icons/fa6";
import { Tilt } from "react-tilt";

const OPTIONS_DEFAULT = {
	reverse: false,
	max: 35,
	perspective: 1000,
	scale: 1.1,
	speed: 1000,
	transition: true,
	axis: null,
	reset: true,
	easing: "cubic-bezier(.03,.98,.52,.99)",
};

const CardBalance = () => {
	return (
		<div className="p-6 max-w-md mx-auto">
			<div className="flex flex-col items-center space-y-6">
				<h3 className="text-2xl md:text-3xl font-extrabold text-gray-800">Card Balance</h3>
				<div className="flex items-baseline text-gray-800">
					<span className="text-3xl md:text-4xl font-bold">$</span>
					<span className="text-5xl md:text-6xl font-extrabold">0.00</span>
				</div>

				{/* Card Type Buttons */}
				<div className="flex flex-wrap justify-center gap-4 mt-6">
					<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
						<SiNfc className="text-lg" />
						Virtual Card
					</button>
					<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
						<FaRegCreditCard className="text-lg" />
						Physical Card
					</button>
				</div>

				{/* Card Image */}
				<Tilt options={OPTIONS_DEFAULT} className="tilt">
					<div className="mt-8 w-full max-w-[300px]">
						<img src="/card.svg" alt="Card Flew Pay" className="w-full h-auto rounded-lg shadow-md" />
					</div>
				</Tilt>

				{/* Action Buttons */}
				<div className="flex flex-wrap justify-center gap-4 mt-6">
					{[
						{ icon: FaPlus, title: "Add Funds", color: "bg-blue-500 hover:bg-blue-600" },
						{ icon: FaArrowUp, title: "Send Money", color: "bg-green-500 hover:bg-green-600" },
						{ icon: FaArrowsLeftRight, title: "Transfer Funds", color: "bg-purple-500 hover:bg-purple-600" },
						{ icon: FaList, title: "View Transactions", color: "bg-yellow-500 hover:bg-yellow-600" },
					].map((button, index) => (
						<button key={index} className={`p-3 rounded-full text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${button.color.split(" ")[0]} transition-all ${button.color}`} title={button.title} onClick={() => console.log(`${button.title} clicked`)}>
							<button.icon className="w-6 h-6" />
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default CardBalance;
