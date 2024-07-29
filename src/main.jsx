import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root');
const reactDOM = ReactDOM.createRoot(root);

/**
 * Strict Mode enables to perform some extra checks
 * to warn us about any potential suboptimal code we
 * could be writing and also in regards to the future
 * code changes that might be added.
 */
reactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
