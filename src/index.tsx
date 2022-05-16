import { Chart as ChartJS, registerables } from 'chart.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

ChartJS.register(...registerables);

const _root = document.getElementById('root')!;
const root = ReactDOM.createRoot(_root);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
