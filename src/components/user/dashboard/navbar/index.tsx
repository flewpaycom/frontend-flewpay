import ConnectButton from "@/components/WalletButton";

const NavbarUserDashboard = () => {
	return (
		<div className="navbar max-w-4xl">
			<div className="flex-1 p-2 space-x-3">
				<img src="/flew-logo-v1.svg" alt="Logo Flewpay" className="size-8" />
				<h2 className="text-xl">Dashboard</h2>
			</div>
			<div className="flex-none bg-black/70 rounded-badge ">
				<ConnectButton />
			</div>
		</div>
	);
};

export default NavbarUserDashboard;
