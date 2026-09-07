import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!

// The build prerenders the app into #root. Hydrate that markup rather than
// throwing it away and re-rendering, so the content the crawler saw is the
// same content the visitor keeps — and there is no blank flash on load.
if (container.hasChildNodes()) {
  hydrateRoot(container, <StrictMode><App /></StrictMode>)
} else {
  createRoot(container).render(<StrictMode><App /></StrictMode>)
}
