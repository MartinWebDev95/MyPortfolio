import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  </React.StrictMode>,
);
