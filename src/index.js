// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // 修正
import './css/normalize.css'; // 修正
import './css/site.css'; // 修正

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
