import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAbfGqTEDE84wuVIHTO8i8vhp_U69PHh4g",
  authDomain: "datos-de-formulario-9a9ed.firebaseapp.com",
  projectId: "datos-de-formulario-9a9ed",
  storageBucket: "datos-de-formulario-9a9ed.appspot.com",
  messagingSenderId: "531359604708",
  appId: "1:531359604708:web:d22db1fae925fc5c6471f1",
  measurementId: "G-4J3NR907X0"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
