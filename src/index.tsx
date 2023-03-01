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
  console.log("ENVIRONMENT " + process.env.REACT_APP_BACKEND_URL);
  let url;
  if(process.env.REACT_APP_BACKEND_URL) {
    url = process.env.REACT_APP_BACKEND_URL
  } else {
    url = window.location.href.replace(":3000/", ":8080");
  }
  return url;
}