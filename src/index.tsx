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
  console.log("ENVIRONMENT " + process.env.NODE_ENV);
  let url;
  if(process.env.NODE_ENV) {
    url = process.env.NODE_ENV
  } else {
    url = window.location.href.replace(":3000/", ":8080");
  }
  return url;
}