import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Youtube from './components/Youtube.jsx'
import Test from './components/Test.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Youtube /> */}
    <Test></Test>
  </StrictMode>,
)
