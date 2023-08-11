import { Link } from 'react-router-dom'
import { LogoContainer, LogoText, SamuraiIcon, StyledLink } from './styled'

export default function Logo() {
  return (
    <LogoContainer>
      <StyledLink to="/">
        <SamuraiIcon>🗡️</SamuraiIcon>
        <LogoText>Get Samurais</LogoText>
      </StyledLink>
    </LogoContainer>
  )
}
