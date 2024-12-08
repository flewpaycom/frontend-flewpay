import { FaRegCreditCard } from "react-icons/fa6";
import { SiNfc } from "react-icons/si";
import { useBalance } from "wagmi";

const CardStats = () => {
	const { data: balance } = useBalance();
	return (
		<div className="shadow-md text-black p-2 rounded-3xl flex justify-center flex-col items-center max-w-5xl mx-auto border">
			<div className="flex flex-col items-center p-5">
				<h3 className="text-2xl font-bold">Card Balance</h3>
				<h1 className="flex items-center">
					<span className="text-3xl font-bold">$</span>
					<span className="text-5xl font-bold">{balance && balance.toString()}</span>
				</h1>
				<div className="flex justify-center gap-2 mt-4">
					<button className="btn btn-outline btn-primary rounded-badge btn-sm">
						<SiNfc />
						Virtual Card
					</button>
					<button className="btn btn-outline btn-primary rounded-badge btn-sm">
						<FaRegCreditCard />
						Physical Card
					</button>
				</div>
			</div>
			{/* <div className="bg-purple-500 w-72 h-48 rounded-lg flex items-center justify-end p-6"></div> */}
		</div>
	);
};
export default CardStats;
