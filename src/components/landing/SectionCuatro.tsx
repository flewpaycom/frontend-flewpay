"use client";
import React from "react";
import { FaExchangeAlt, FaUnlock, FaBuilding } from "react-icons/fa";

const features = [
	{
		icon: <FaExchangeAlt className="text-5xl group-hover:scale-110 transition-transform" />,
		title: "Free transfers",
		description: "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
	},
	{
		icon: <FaBuilding className="text-5xl group-hover:scale-110 transition-transform" />,
		title: "Multiple accounts",
		description: "Run your operations with cash from your account and generate yield on funds stored in your account.",
	},
	{
		icon: <FaUnlock className="text-5xl group-hover:scale-110 transition-transform" />,
		title: "Unmatched security",
		description: "Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.",
	},
];

const SectionCuatro = () => {
	return (
		<section className="relative w-full  py-36 overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-grid-pattern opacity-5" />

			<div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
				<div className="text-center mb-20" data-aos="fade-up">
					<h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">Experience that grows with your scale</h2>
					<p className="text-gray-600 text-xl max-w-3xl mx-auto">Unlock the full potential of your business with our powerful features</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay={index * 100}>
							<div className="bg-primary/10 p-4 rounded-2xl size-20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">{feature.icon}</div>

							<h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>

							<p className="text-gray-600 mb-6">{feature.description}</p>

							<div className="pt-6 border-t border-gray-100">
								<div className="flex items-baseline"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionCuatro;
