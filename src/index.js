import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import client from './lib/ApolloClient'
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';
import 'react-phone-input-2/lib/material.css'
import {
  ApolloProvider,
} from "@apollo/client";

ReactDOM.render(

  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
