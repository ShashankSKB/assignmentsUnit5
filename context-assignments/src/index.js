import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppcontextProvider } from "./context/Appcontextprovider"
import {AuthContextProvider} from "./context/AuthContextProvider"
 
ReactDOM.render(
  
  <React.StrictMode>
    <AppcontextProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </AppcontextProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

reportWebVitals();
