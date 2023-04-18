import React from 'react';

// libs
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// components
import { App } from './components/App';

// assets
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

