import React from 'react'//obsoleto al menos que las versiones ateriores lo pida
import ReactDOM from 'react-dom/client'//libreeria que tiene todos los elelementos del DOM
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
