import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TambahKurang from "./tambah_kurang.jsx"
import InputData from "./input_quiz.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <TambahKurang/>
      <InputData/>
    </div>
  </StrictMode>,
)
