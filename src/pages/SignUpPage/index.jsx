import { Button, Container, Input, SigninLink, SignupForm } from './styled'
import { useQuickIn } from '../../hooks/useQuickIn'
import useForm from '../../hooks/useForm'
import { useSignup } from '../../services/auth'

export default function SignupPage() {
  const { form, handleForm } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    city: ''
  })

  useQuickIn()
  const signUp = useSignup()

  function submitForm(e) {
    e.preventDefault()
    if (form.password !== form.confirmPassword)
      return alert(`As senhas não coincidem!`)

    delete form.confirmPassword
    signUp(form)
  }

  return (
    <Container>
      <SignupForm onSubmit={submitForm}>
        <h2>Sign Up</h2>
        <Input
          required
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleForm}
        />
        <Input
          required
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleForm}
        />
        <Input
          required
          minLength={3}
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          value={form.password}
          onChange={handleForm}
        />
        <Input
          required
          name="confirmPassword"
          type="password"
          minLength={3}
          placeholder="confirm Password"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleForm}
        />
        <Input
          required
          name="phone"
          type="number"
          placeholder="Phone"
          value={form.phone}
          onChange={handleForm}
        />
        <Input
          required
          name="city"
          type="text"
          placeholder="City"
          value={form.city}
          onChange={handleForm}
        />
        <Button type="submit">Sign Up</Button>
        <SigninLink to={'/login'} href="#">
          If you already have an account, log in here.
        </SigninLink>
      </SignupForm>
    </Container>
  )
}
