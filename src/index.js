import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {IdiomaProvider} from "./context/IdiomaContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <IdiomaProvider>
        <App />
    </IdiomaProvider>
    // </React.StrictMode>
);

