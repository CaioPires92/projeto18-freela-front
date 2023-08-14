import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../contexts/authContext'

export function useSignup() {
  const navigate = useNavigate()
  return body => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/signup`, body)
      .then(res => navigate('/login'))
      .catch(err => alert(err.response.data))
  }
}

export function useSignIn() {
  const navigate = useNavigate()
  const { setToken, setUserName, setUserId } = useContext(AuthContext)

  return body => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/signin`, body)
      .then(res => {
        setToken(res.data.token)
        setUserName(res.data.username)
        setUserId(res.data.id)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', res.data.username)
        localStorage.setItem('id', res.data.id)
        navigate('/')
      })
      .catch(err => alert(err.response.data.message))
  }
}
