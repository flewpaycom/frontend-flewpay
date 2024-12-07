import SectionCuatro from "@/components/landing/SectionCuatro";
import SectionTres from "@/components/landing/SectionTres";
import SectionAction from "@/components/landing/SectionAction";
import SectionFooter from "@/components/landing/SectionFooter";
import HeaderMobile from "@/components/landing/ HeaderMobile";

import React from "react";
// import { useTranslations } from "next-intl";
import SwitchLang from "@/components/SwitchLang";

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
		<>
			<SwitchLang />
			<HeaderMobile />
			<SectionTres />
			<SectionCuatro />
			<SectionAction />
			<SectionFooter />
		</>
	);
}
