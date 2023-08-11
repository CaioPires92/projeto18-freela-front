import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}
