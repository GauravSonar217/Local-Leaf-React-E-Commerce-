import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./dist/style.css"
import { AppProvider } from './context/ProductContext';
import { CartProvider } from './context/cartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-8254d5njq7pcl87s.us.auth0.com"
    clientId="gNPRTLCcBz5shDbjy6MwCBh4Xy5dFnbS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
