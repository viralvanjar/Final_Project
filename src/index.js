// Importing required dependency
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';

// Createing the const variable for root element 
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// XML one type of HTML
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);
