import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TransactionsProvider } from './context/TransactionContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
