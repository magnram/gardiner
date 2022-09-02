import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const getBaseUrl = () => {
  console.log();
  let url;
  switch(process.env.NODE_ENV) {
    case 'production':
      url = 'https://gardiner-backend.herokuapp.com';
      break;
    case 'development':
    default:
      url = window.location.href.replace(":3000/", ":8080");
  }

  return url;
}