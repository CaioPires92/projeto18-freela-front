import Logo from '../Logo'
import { useContext } from 'react'
import { HeaderContainer, UserInfo, UserIcon } from './styled'
import AuthContext from '../../contexts/authContext'
import { FaUserCircle } from 'react-icons/fa'

function Header() {
  const { userName } = useContext(AuthContext)

  return (
    <HeaderContainer>
      <Logo>Get Samurais</Logo>
      <UserInfo>
        {userName ? (
          <>
            <FaUserCircle size={24} style={{ marginRight: '8px' }} />
            {userName}
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </UserInfo>
    </HeaderContainer>
  )
}

export default Header
