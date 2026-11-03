import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ProtectedRoute>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </ProtectedRoute>
    </BrowserRouter>
  </StrictMode>,
)
