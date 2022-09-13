import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth/AuthProvider'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import "./index.css"
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import Login from "./pages/Login";
import { Signup } from './pages/Signup'
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();