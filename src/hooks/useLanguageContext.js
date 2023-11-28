import { useContext } from 'react';
import { languageContext } from '../context/LanguageContext';

const useLanguageContext = () => {
  const context = useContext(languageContext);

  return context;
};

export default useLanguageContext;
