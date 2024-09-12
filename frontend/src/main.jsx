import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from "./components/Test.jsx";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Test />
    {/*<App />*/}
  </StrictMode>,
)
