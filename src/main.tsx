import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import { AuthOFF } from './Router/AuthOFF'
import { AuthON } from './Router/AuthON'

const session = false;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
)

function Routes() {
  if (session) {
    return <AuthON />;
  } else {
    return <AuthOFF />;
  }
}