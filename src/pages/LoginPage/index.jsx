import { Button, Container, Input, LoginForm, SignupLink } from './styled'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <h2>Login</h2>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Login</Button>
        <SignupLink to={'/cadastro'} href="#">
          Don't have an account? Sign up here.
        </SignupLink>
      </LoginForm>
    </Container>
  )
}
