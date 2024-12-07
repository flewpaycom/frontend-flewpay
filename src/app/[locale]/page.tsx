import SectionCuatro from '@/components/landing/SectionCuatro';
import SectionTres from '@/components/landing/SectionTres';
import SectionFooter from '@/components/landing/SectionFooter';

import React from 'react';
import { useTranslations } from 'next-intl';
import SwitchLang from '@/components/SwitchLang';
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
  const t = useTranslations("HomePage");

  return (
    <>
      {/* Selector de idioma */}
      {/* <LanguageSelector /> */}
      <h1>
        {t('title')}
      </h1>
      <SwitchLang/>

      {/* Secciones de la página */}
      <SectionTres />
      <SectionCuatro />
      <SectionFooter />
    </>
  );
}
