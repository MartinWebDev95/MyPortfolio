import {
  createContext, useMemo, useState,
} from 'react';
import globalEn from '../translations/en/global';
import globalEs from '../translations/es/global';

const languageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState(globalEs);

  const handleChangeLanguage = (lang) => {
    if (lang === 'es') {
      setLanguage('es');
      setText(globalEs);
    } else {
      setLanguage('en');
      setText(globalEn);
    }
  };

  const value = useMemo(() => ({
    text, setText, language, setLanguage, handleChangeLanguage,
  }), [text, language]);

  return (
    <languageContext.Provider value={value}>
      {children}
    </languageContext.Provider>
  );
}

export { LanguageProvider, languageContext };
