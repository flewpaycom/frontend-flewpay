import dynamic from "next/dynamic";

const QRCode = dynamic(() => import("react-qr-code"), { ssr: false });

export default function SectionTres() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="w-full bg-white py-24 px-8 text-center flex flex-col items-center">
				<h1 className="text-6xl font-extrabold leading-tight mb-8 text-black">
					Say goodbye to{" "}
					<span className="relative inline-block">
						<span className="bg-[#c9d1fc] px-4 py-2 rounded-lg">Financial stress & uncertainty</span>
					</span>
				</h1>
				<p className="text-gray-600 text-2xl">With our user-friendly interface anbud powerful features, you&apos;ll have all the tools you need to manage your finances with ease.</p>
			</div>

			<div className="w-full flex justify-center my-3"></div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto my-20 px-6">
				<div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center justify-center">
					<h2 className="text-3xl font-semibold mb-6 text-black">Quick and easy</h2>
					<p className="text-gray-600 text-center mb-8">Your journey is seamless, safe, and secure. No need to register or download apps.</p>
					<QRCode value="https://example.com" size={220} />
					<p className="text-sm text-gray-500 mt-6">★ </p>
				</div>
				<div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col justify-between">
					<div>
						<span className="text-gray-700 block mb-4 text-lg">You send exactly</span>
						<div className="bg-gray-50 p-6 rounded shadow-sm flex justify-between items-center mb-6">
							<span className="font-bold text-gray-500">USD</span>
							<input type="text" placeholder="5,000" className="text-right outline-none font-bold text-lg" />
						</div>
						<span className="text-gray-900 block mb-4 text-lg">Recipient gets</span>
						<div className="bg-gray-50 p-6 rounded shadow-sm">
							<p className="text-right font-bold text-lg text-gray-500">221.20 EUR</p>
						</div>
					</div>
					<ul className="text-md text-gray-800 space-y-3 my-8">
						<li>
							Transfer fee: <span className="float-right">12 USD</span>
						</li>
						<li>
							Total amount: <span className="float-right">988 USD</span>
						</li>
						<li>
							Current rate: <span className="float-right">3.67</span>
						</li>
					</ul>
					<button className="bg-[#6f5bf7] text-white py-3 px-6 rounded w-full text-lg font-bold">CONTINUE</button>
				</div>
			</div>
		</div>
	);
}
