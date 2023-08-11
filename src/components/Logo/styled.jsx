import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Arial', sans-serif;
`

export const SamuraiIcon = styled.span`
  font-size: 2rem;
  margin-right: 8px;
  color: #ff0000; /* Cor vermelha */
`

export const LogoText = styled.span`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
