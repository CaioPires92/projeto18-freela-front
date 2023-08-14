import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AuthContext from './contexts/authContext'
import { useState } from 'react'

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [userName, setUserName] = useState(localStorage.getItem('name'))
  const [userId, setUserId] = useState(Number(localStorage.getItem('id')))
  return (
    <AuthContext.Provider
      value={{ token, setToken, userName, setUserName, userId, setUserId }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
