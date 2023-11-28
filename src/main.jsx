import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
);
