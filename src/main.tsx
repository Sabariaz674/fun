import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Modal from 'react-modal' // <-- Add this line

Modal.setAppElement('#root')    // <-- And this line

createRoot(document.getElementById("root")!).render(<App />);