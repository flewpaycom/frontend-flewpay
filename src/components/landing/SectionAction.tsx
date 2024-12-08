import React from "react";

const SectionAction = () => {
	return (
		<section className="py-20 px-8 md:px-12" data-aos="fade-up">
			<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-lg bg-white">
				<div className="text-dark-blue p-10 md:p-16 flex-1">
					<h2 className="text-4xl font-bold mb-4 text-gray-800">Ready to level up your payment process?</h2>
					<p className="text-gray-600 mb-8">Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
					<div className="flex items-center gap-4">
						<button className="btn btn-primary rounded-badge font-medium py-3 px-6">Get Started Now</button>
						<button className="btn btn-outline btn-secondary font-medium py-3 px-6 rounded-badge">Learn More</button>
					</div>
				</div>
				<div className="flex-1">
					<img src="https://img.freepik.com/foto-gratis/persona-pagando-tecnologia-nfc-restaurante_23-2150039472.jpg?t=st=1733696258~exp=1733699858~hmac=c966c9bfd2c7f9527ba3f03f5185af99aed2292a80584580e9efd84af623d263&w=1380" alt="Payment Process" className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl" />
				</div>
			</div>
		</section>
	);
};

export default SectionAction;
