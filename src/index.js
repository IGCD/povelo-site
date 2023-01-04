import axios from "axios"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals.js';

axios.defaults.withCredentials = true;

// window.document.cookie = "safeCookie1=foo; SameSite=Lax"; 
// window.document.cookie = "safeCookie2=foo";  
// window.document.cookie = "crossCookie=bar; SameSite=None; Secure";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
