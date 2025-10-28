import React from "react";
import { Provider } from "react-redux";
import { store }from './store/auth.js'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
       </Provider>
  </React.StrictMode>
);
