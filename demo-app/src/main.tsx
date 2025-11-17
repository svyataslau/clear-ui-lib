import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Импортируем локальные стили ПЕРЕД стилями библиотеки для переопределения
import './styles/index.css';
import '@clear/ui/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
