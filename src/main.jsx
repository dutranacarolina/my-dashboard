import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import MusicProvider from './context/MusicProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <MusicProvider> 
      <App />
     </MusicProvider>
    </BrowserRouter>
  </StrictMode>,
)
