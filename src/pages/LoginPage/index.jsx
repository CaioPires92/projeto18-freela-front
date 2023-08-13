import { Button, Container, Input, LoginForm, SignupLink } from './styled'
import { useQuickIn } from '../../hooks/useQuickIn'
import useForm from '../../hooks/useForm'
import { useSignIn } from '../../services/auth'

export default function LoginPage() {
  const { form, handleForm } = useForm({ email: '', password: '' })

  useQuickIn()
  const signIn = useSignIn()

  function submitForm(e) {
    e.preventDefault()
    signIn(form)
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
