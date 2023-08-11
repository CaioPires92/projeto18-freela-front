import { useNavigate } from 'react-router-dom'
import { Button, Container, Input, SigninLink, SignupForm } from './styled'

export default function SignupPage() {
  const navigate = useNavigate()

  function handleSignUp(e) {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <Container>
      <SignupForm onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Input type="tel" placeholder="Phone" />
        <Input type="text" placeholder="City" />
        <Button>Sign Up</Button>
        <SigninLink to={'/login'} href="#">
          If you already have an account, log in here.
        </SigninLink>
      </SignupForm>
    </Container>
  )
}
