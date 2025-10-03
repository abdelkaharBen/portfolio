import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import doteIcon from './assets/dote.png';

// Ensure favicon uses dote.png
const ensureFavicon = () => {
  try {
    const head = document.head || document.getElementsByTagName('head')[0];
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'icon');
      head.appendChild(link);
    }
    if (link.getAttribute('href') !== doteIcon) {
      link.setAttribute('href', doteIcon);
    }
  } catch (err) {
    // No-op if document is unavailable
  }
};

ensureFavicon();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
