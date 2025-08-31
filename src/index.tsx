import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './services/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//Connections of the backend API with the frontend------------------------------------------
axios.defaults.baseURL = `${process.env.REACT_APP_PROXY_HOST}${process.env.REACT_APP_PROXY_VERSION}`;
// console.log(
//   `${process.env.REACT_APP_PROXY_HOST}${process.env.REACT_APP_PROXY_VERSION}`
// );

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
