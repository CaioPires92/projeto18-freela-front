import { useContext, useState } from 'react'
import { Button, Container, Input, LoginForm, SignupLink } from './styled'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../../contexts/authContext'

export default function LoginPage() {
  const { setToken, setUserName } = useContext(AuthContext)

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function submitForm(e) {
    e.preventDefault()

    axios
      .post(`${import.meta.env.VITE_API_URL}/signin`, form)
      .then(res => {
        setToken(res.data.token)
        setUserName(res.data.username)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', res.data.username)
        navigate('/')
      })
      .catch(err => alert(err.response.data.message))
  }

  return (
    <Container>
      <LoginForm onSubmit={submitForm}>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="email"
          required
          name="email"
          value={form.email}
          onChange={handleForm}
          autoComplete="username"
        />
        <Input
          type="password"
          placeholder="password"
          required
          name="password"
          value={form.password}
          onChange={handleForm}
          autoComplete="new-password"
        />
        <Button type="submit">Login</Button>
        <SignupLink to={'/cadastro'} href="#">
          Don't have an account? Sign up here.
        </SignupLink>
      </LoginForm>
    </Container>
  )
}
