import React from "react";

const steps = [
	{
		id: 1,
		title: "Paso 1: Instalar MetaMask",
		description: "Descarga MetaMask desde su sitio oficial y agrégala como extensión en tu navegador o instala la aplicación móvil.",
	},
	{
		id: 2,
		title: "Paso 2: Crear una Wallet",
		description: "Abre MetaMask, selecciona 'Crear una Wallet', acepta las condiciones y elige una contraseña segura.",
	},
	{
		id: 3,
		title: "Paso 3: Guardar la Frase de Recuperación",
		description: "Copia la frase secreta de 12 palabras en un lugar seguro. Nunca la compartas con nadie.",
	},
	{
		id: 4,
		title: "Paso 4: Configuración Final",
		description: "Verifica la frase, personaliza tu wallet y explora sus funciones para enviar, recibir y gestionar criptomonedas.",
	},
];

const Learn: React.FC = () => {
	return (
		<section className="bg-gray-100 py-12 px-4  min-h-screen ">
			<h2 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
				Aprende a Crear tu Wallet MetaMask
				<img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask Fox" className="w-10 h-10" />
			</h2>

			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 place-items-center">
					{steps.map((step, index) => (
						<div key={step.id} className="flex items-center justify-center relative">
							<div className="bg-[#c2d0fb] shadow-lg rounded-lg p-6 w-full max-w-xs h-48 flex flex-col justify-between hover:shadow-2xl transition duration-300 z-10">
								<div>
									<h3 className="text-xl font-semibold text-gray-700 mb-2">{step.title}</h3>
									<p className="text-gray-600">{step.description}</p>
								</div>
							</div>
							{index < steps.length - 1 && (
								<div className="absolute z-0 text-gray-500 right-[-20px] md:right-[-40px]">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5" />
									</svg>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="text-center mt-8">
				<a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="bg-primary rounded-badge text-white px-6 py-3 shadow hover:bg-blue-700 transition duration-300">
					Ir a MetaMask
				</a>
			</div>
		</section>
	);
};

export default Learn;
