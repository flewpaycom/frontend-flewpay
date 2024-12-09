import SectionCuatro from "@/components/landing/SectionCuatro";
import SectionTres from "@/components/landing/SectionTres";
import SectionAction from "@/components/landing/SectionAction";
import SectionFooter from "@/components/landing/SectionFooter";
import HeaderMobile from "@/components/landing/ HeaderMobile";

import React from "react";
import SectionTeam from "@/components/landing/SectionTeam";
// import { useTranslations } from "next-intl";

// Componente LanguageSelector para cambiar el idioma
// const LanguageSelector: React.FC = () => {

//   return (
//     <div>
//       <button onClick={() => changeLanguage('es')}>Español</button>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('pt')}>Português</button>
//     </div>
//   );
// };

// Componente principal
export default function Home() {
	return (
		<main className="relative min-h-screen w-full bg-gradient-to-br from-white to-primary/20">
			<div className="absolute top-0 left-0 h-full w-full -z-10">
				<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-50 blur-[80px]"></div>
			</div>
			<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#adadad_1px,transparent_1px)] [background-size:16px_16px]"></div>

			<HeaderMobile />
			<SectionTres />
			<SectionCuatro />
			<SectionAction />
			<SectionTeam />

			<SectionFooter />
		</main>
	);
}
