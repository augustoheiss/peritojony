import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ContentPage from './pages/ContentPage'
import LegalPage from './pages/LegalPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/conteudo" element={<ContentPage />} />
        <Route path="/termos" element={<LegalPage />} />
      </Routes>
    </BrowserRouter>
  )
}
