import NavbarUserDashboard from "@/components/user/dashboard/navbar";

type LayoutChildren = React.ReactNode;
const Layout = ({ children }: { children: LayoutChildren }) => {
	return (
		<main className="relative min-h-screen w-full bg-gradient-to-br from-white to-primary/20">
			<div className="absolute top-0 left-0 h-full w-full -z-10">
				<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-50 blur-[80px]"></div>
			</div>
			<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#f6f6f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
			<section className="section sticky top-0 z-10 flex w-full items-center justify-center bg-white/50 shadow-md backdrop-blur-xl">
				<NavbarUserDashboard />
			</section>
			<section className="flex min-h-screen w-full items-center justify-center">{children}</section>
		</main>
	);
};

export default Layout;
