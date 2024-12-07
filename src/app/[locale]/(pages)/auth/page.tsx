"use client";

import ConnectButton from "@/components/WalletButton";

const Auth = () => {
	return (
		<section className="relative min-h-screen bg-black">
			{/* Imagen de fondo */}
			<div className="absolute inset-0">
				<img src="/images/umbrella.jpg" alt="Ethereum Welcome" className="h-full w-full object-cover" />
				<div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
			</div>

			{/* Contenido principal */}
			<div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6">
				<div className="text-center bg-black/20 backdrop-blur-md w-full max-w-lg flex flex-col justify-center items-center rounded-3xl shadow-2xl p-8 md:p-12 ">
					{/* Logo */}
					<img src="/flewpay-white.png" alt="FlewPay logo" className="w-32 md:w-96 mb-8 p-5" />

					{/* Título */}
					<h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-snug">
						¡Bienvenido/a a <span className="text-primary">Flewpay</span>!
					</h1>

					{/* Descripción */}
					<p className="text-base md:text-lg text-white mb-6 leading-relaxed">Gestiona tus finanzas y transacciones de forma segura. Conéctate con tu billetera Ethereum para empezar.</p>

					{/* Botón de conexión */}
					<div className="w-full flex justify-center mb-6">
						<ConnectButton />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Auth;
