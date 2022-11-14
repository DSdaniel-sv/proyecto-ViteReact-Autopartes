import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from 'react-router-dom'
import App from './App'
import Descripcion from './Description/Description'
import './index.css'
import Router from './Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Descripcion/>
  </React.StrictMode>
)
